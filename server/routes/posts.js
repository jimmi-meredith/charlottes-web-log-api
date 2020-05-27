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

// POST /v1/posts
router.post('/', (req, res) => {
  db.addPost()
    .then(post => {
      res.json(post)
    })
})

module.exports = router
