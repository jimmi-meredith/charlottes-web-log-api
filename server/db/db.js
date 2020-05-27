const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports = {
  getPosts
}

function getPosts () {
  return db('posts')
}
