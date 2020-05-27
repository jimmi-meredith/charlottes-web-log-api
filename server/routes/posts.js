const express = require('express')

const db = require('../db/db')

const router = express.Router()

// GET /v1/posts
router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
})

// GET /v1/posts/:id
router.get('/:id', (req, res) => {
  const { id } = req.params

  db.getPostById(id)
    .then(post => {
      res.json(post)
    })
})

// POST /v1/posts
router.post('/', (req, res) => {
  const newPost = {
    title: req.body.title,
    paragraphs: req.body.paragraphs
  }

  db.addPost(newPost)
    .then(post => {
      res.json(post)
    })
})

module.exports = router
