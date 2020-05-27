const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
})

module.exports = router
