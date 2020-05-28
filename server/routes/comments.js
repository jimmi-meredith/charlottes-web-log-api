const express = require('express')

const db = require('../db/db')

const router = express.Router()

// GET /v1/posts/:postId/comments
router.get('/:postId/comments', (req, res) => {
  const { postId } = req.params
  // retreives the comments that match a posts id
  db.getPostComments(postId)
    .then(comments => {
      res.json(comments)
    })
})

module.exports = router
