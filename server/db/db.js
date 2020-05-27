const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports = {
  getPosts,
  getPostById,
  addPost
}

function getPosts () {
  return db('Posts')
}

function getPostById (id) {
  return db('Posts')
    .where('id', id)
    .first()
}

function addPost (post) {
  return db('Posts')
    .insert(post)
    .select()
}
