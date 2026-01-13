const loginWith = async (page, username, password) => {
    await page.getByRole('button', { name: 'login' }).click()
    await page.getByRole('textbox', { name: 'Username' }).fill(username)
    await page.getByRole('textbox', { name: 'Password' }).fill(password)
    await page.getByRole('button', { name: 'login' }).click()
}

const createBlog = async (page, title, author, url) => {
    await page.getByRole('button', { name: 'create new blog' }).click()
    await page.getByPlaceholder('write title here').fill(title)
    await page.getByPlaceholder('write author here').fill(author)
    await page.getByPlaceholder('write url here').fill(url)
    await page.getByRole('button', { name: 'create' }).click()
    // Wait for the form to close or the blog to appear
    await page.getByText(`${title} ${author}`).waitFor()
}

export { loginWith, createBlog }
