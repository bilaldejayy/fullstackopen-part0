const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const blogs = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })

  test('when list has multiple blogs, equals the sum of likes', () => {
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 24)
  })

  test('when list is empty, equals 0', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })
})

describe('favorite blog', () => {
  const blogs = [
    {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    },
    {
      title: 'React patterns',
      author: 'Michael Chan',
      likes: 7
    },
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5
    }
  ]

  test('returns the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12
    })
  })

  test('returns null for empty list', () => {
    assert.strictEqual(listHelper.favoriteBlog([]), null)
  })
})

describe('most blogs', () => {
  const fullBlogs = [
    { author: 'Michael Chan', likes: 7 },
    { author: 'Edsger W. Dijkstra', likes: 5 },
    { author: 'Edsger W. Dijkstra', likes: 12 },
    { author: 'Robert C. Martin', likes: 10 },
    { author: 'Robert C. Martin', likes: 0 },
    { author: 'Robert C. Martin', likes: 2 }
  ]

  test('returns author with most blogs', () => {
    const result = listHelper.mostBlogs(fullBlogs)
    assert.deepStrictEqual(result, {
      author: 'Robert C. Martin',
      blogs: 3
    })
  })

  test('returns null for empty list', () => {
    assert.strictEqual(listHelper.mostBlogs([]), null)
  })
})

describe('most likes', () => {
  const fullBlogs = [
    { author: 'Michael Chan', likes: 7 },
    { author: 'Edsger W. Dijkstra', likes: 5 },
    { author: 'Edsger W. Dijkstra', likes: 12 },
    { author: 'Robert C. Martin', likes: 10 },
    { author: 'Robert C. Martin', likes: 0 },
    { author: 'Robert C. Martin', likes: 2 }
  ]

  test('returns author with most likes', () => {
    const result = listHelper.mostLikes(fullBlogs)
    assert.deepStrictEqual(result, {
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })

  test('returns null for empty list', () => {
    assert.strictEqual(listHelper.mostLikes([]), null)
  })
})
