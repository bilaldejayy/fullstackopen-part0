const _ = require('lodash')

const dummy = (_blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null

  const favorite = blogs.reduce((prev, current) => {
    return (prev.likes > current.likes) ? prev : current
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null

  const authorCounts = _.countBy(blogs, 'author')
  const author = _.maxBy(Object.keys(authorCounts), (author) => authorCounts[author])

  return {
    author: author,
    blogs: authorCounts[author]
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null

  const groupedBlogs = _.groupBy(blogs, 'author')
  const authorLikes = _.map(groupedBlogs, (blogs, author) => {
    return {
      author: author,
      likes: blogs.reduce((sum, blog) => sum + blog.likes, 0)
    }
  })

  return _.maxBy(authorLikes, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
