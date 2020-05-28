const express = require('express')

const db = require('../db/db')

const router = express.Router()

// PUT /v1/comments/:commentId
router.put('/:commentId', (req, res) => {
  const { commentId } = req.params
  const { comment } = req.body

  db.updateComment(commentId, comment)
    .then(() => db.get
})

module.exports = router
