const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports = {
  getPosts,
  getPost
}

function getPosts () {
  return db('Posts')
}

function getPost (id) {
  return db('Posts')
    .where('id', id)
    .first()
}
