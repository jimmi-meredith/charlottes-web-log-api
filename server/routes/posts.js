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

  db.getPost(id)
    .then(post => {
      res.json(post)
    })
})

module.exports = router
