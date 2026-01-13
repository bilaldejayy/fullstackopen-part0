import { test, expect } from '@playwright/test'
import { loginWith, createBlog } from './helper'

test.describe('Blog app', () => {
    test.beforeEach(async ({ page, request }) => {
        // Empty the DB
        await request.post('http://localhost:3003/api/testing/reset')

        // Create a user in backend
        await request.post('http://localhost:3003/api/users', {
            data: {
                name: 'Test User',
                username: 'testuser',
                password: 'password'
            }
        })

        await page.goto('/')
    })

    test('Login form is shown', async ({ page }) => {
        await expect(page.getByText('Log in to application')).toBeVisible()
        await expect(page.getByRole('button', { name: 'login' })).toBeVisible()
    })

    test.describe('Login', () => {
        test('succeeds with correct credentials', async ({ page }) => {
            await loginWith(page, 'testuser', 'password')
            await expect(page.getByText('Test User logged in')).toBeVisible()
        })

        test('fails with wrong credentials', async ({ page }) => {
            await loginWith(page, 'testuser', 'wrong')

            const notification = page.getByText('wrong username or password')
            await expect(notification).toBeVisible()
            await expect(notification).toHaveCSS('color', 'rgb(255, 0, 0)') // red

            await expect(page.getByText('Test User logged in')).not.toBeVisible()
        })
    })

    test.describe('When logged in', () => {
        test.beforeEach(async ({ page }) => {
            await loginWith(page, 'testuser', 'password')
        })

        test('a new blog can be created', async ({ page }) => {
            await createBlog(page, 'Test Blog Title', 'Test Author', 'http://test.url')
            await expect(page.getByText('Test Blog Title Test Author')).toBeVisible()
        })

        test.describe('and a blog exists', () => {
            test.beforeEach(async ({ page }) => {
                await createBlog(page, 'Playwright Blog', 'Microsoft', 'http://playwright.dev')
            })

            test('it can be liked', async ({ page }) => {
                await page.getByRole('button', { name: 'view' }).click()
                await page.getByRole('button', { name: 'like' }).click()
                await expect(page.getByText('likes 1')).toBeVisible()
            })

            test('it can be deleted', async ({ page }) => {
                await page.getByRole('button', { name: 'view' }).click()

                page.on('dialog', dialog => dialog.accept())
                await page.getByRole('button', { name: 'remove' }).click()

                await expect(page.getByText('Playwright Blog Microsoft')).not.toBeVisible()
            })
        })
    })

    test.describe('When multiple blogs exist', () => {
        test.beforeEach(async ({ page }) => {
            await loginWith(page, 'testuser', 'password')
            await createBlog(page, 'Blog A', 'Author A', 'url')
            await createBlog(page, 'Blog B', 'Author B', 'url')
            await createBlog(page, 'Blog C', 'Author C', 'url')
        })

        test('they are sorted by likes', async ({ page }) => {
            // Need to like blogs differently to test sorting
            // We need to target specific blogs. Locators are strict, so we need precise targeting.
            // We'll use the title text to find the container.

            const blogA = page.locator('.blog').filter({ hasText: 'Blog A' })
            const blogB = page.locator('.blog').filter({ hasText: 'Blog B' })
            const blogC = page.locator('.blog').filter({ hasText: 'Blog C' })

            // Like Blog B 2 times
            await blogB.getByRole('button', { name: 'view' }).click()
            await blogB.getByRole('button', { name: 'like' }).click()
            await page.waitForTimeout(200) // wait for backend
            await blogB.getByRole('button', { name: 'like' }).click()
            await page.waitForTimeout(200)
            await blogB.getByRole('button', { name: 'hide' }).click()

            // Like Blog A 1 time
            await blogA.getByRole('button', { name: 'view' }).click()
            await blogA.getByRole('button', { name: 'like' }).click()
            await page.waitForTimeout(200)
            await blogA.getByRole('button', { name: 'hide' }).click()

            // Verify order: B (2), A (1), C (0)
            const blogs = page.locator('.blog')
            await expect(blogs.first()).toContainText('Blog B')
            await expect(blogs.nth(1)).toContainText('Blog A')
            await expect(blogs.nth(2)).toContainText('Blog C')
        })
    })
})
