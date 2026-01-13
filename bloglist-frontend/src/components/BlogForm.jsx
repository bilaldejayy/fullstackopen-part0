import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
    const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })

    const addBlog = (event) => {
        event.preventDefault()
        createBlog(newBlog)
        setNewBlog({ title: '', author: '', url: '' })
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addBlog}>
                <div>
                    title:
                    <input
                        value={newBlog.title}
                        onChange={({ target }) => setNewBlog({ ...newBlog, title: target.value })}
                        placeholder='write title here'
                        id='title-input'
                    />
                </div>
                <div>
                    author:
                    <input
                        value={newBlog.author}
                        onChange={({ target }) => setNewBlog({ ...newBlog, author: target.value })}
                        placeholder='write author here'
                        id='author-input'
                    />
                </div>
                <div>
                    url:
                    <input
                        value={newBlog.url}
                        onChange={({ target }) => setNewBlog({ ...newBlog, url: target.value })}
                        placeholder='write url here'
                        id='url-input'
                    />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default BlogForm
