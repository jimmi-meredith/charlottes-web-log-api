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

module.exports = router
