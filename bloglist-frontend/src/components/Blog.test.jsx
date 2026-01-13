import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Blog />', () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'Matti Luukkainen',
        url: 'https://react-testing-library.com',
        likes: 7,
        user: {
            username: 'mluukkai',
            name: 'Matti Luukkainen'
        }
    }

    const mockHandler = vi.fn()
    let container

    beforeEach(() => {
        container = render(
            <Blog blog={blog} updateBlog={mockHandler} deleteBlog={mockHandler} user={blog.user} />
        ).container
    })

    test('renders title and author', () => {
        const div = container.querySelector('.blog-title-author')
        expect(div).toHaveTextContent(
            'Component testing is done with react-testing-library Matti Luukkainen'
        )
    })

    test('at start the details are not displayed', () => {
        const div = container.querySelector('.blog-details')
        expect(div).toBeNull()
    })

    test('after clicking the button, details are displayed', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('view')
        await user.click(button)

        const div = container.querySelector('.blog-details')
        expect(div).not.toBeNull()
        expect(div).toHaveTextContent('https://react-testing-library.com')
        expect(div).toHaveTextContent('likes 7')
    })

    test('if the like button is clicked twice, the event handler is called twice', async () => {
        const user = userEvent.setup()
        const viewButton = screen.getByText('view')
        await user.click(viewButton)

        const likeButton = screen.getByText('like')
        await user.click(likeButton)
        await user.click(likeButton)

        expect(mockHandler.mock.calls).toHaveLength(2)
    })
})
