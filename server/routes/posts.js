const express = require('express')

const db = require('../db/db')

const router = express.Router()

// GET /v1/posts
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      // render all posts in JSON
      res.json(posts)
    })
})

// GET /v1/posts/:id
router.get('/:id', (req, res) => {
  const { id } = req.params

  // call getPostById by using Id from params
  db.getPostById(id)
    .then(post => {
      // render singular post returned
      res.json(post)
    })
})

// POST /v1/posts
router.post('/', (req, res) => {
  // define what is needed for a newPost (what user enters)
  const newPost = {
    title: req.body.title,
    paragraphs: req.body.paragraphs
  }

  db.addPost(newPost)
  // use id given from newPost to find the single post again
    .then(id => db.getPostById(id))
    .then(post => {
      res.json(post)
    })
})

// PUT /v1/posts/:id
router.put('/:id', (req, res) => {
  const { id } = req.params
  // what options are used for updating the post
  const post = {
    title: req.body.title,
    paragraphs: req.body.paragraphs
  }
  // takes the post from req.body and the id from the params
  db.updatePost(id, post)
  // renders the chosen post after it has been updated
    .then(() => db.getPostById(id))
    .then(post => {
      res.json(post)
    })
})

// DELETE /v1/posts/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params
  // deletes post using id from params
  db.deletePost(id)
    .then(() => db.getPosts())
    .then(posts =>
      res.json(posts))
})

// GET /v1/posts/:postId/comments
router.get('/:postId/comments', (req, res) => {
  const { postId } = req.params
  // retreives the comments that match a posts id
  db.getPostComments(postId)
    .then(comments => {
      res.json(comments)
    })
})

// POST /v1/posts/:postId/comments
router.post('/:postId/comments', (req, res) => {
  const { postId } = req.params
  const comment = {
    post_id: postId,
    comment: req.body.comment
  }

  db.addPostComment(comment)
    .then(id => {
      res.json(id)
    })
})

module.exports = router
