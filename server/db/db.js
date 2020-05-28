const config = require('../../knexfile').development
const db = require('knex')(config)
const utils = require('./utilities')

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost
}

function getPosts () {
  // returning all posts in Posts table
  return db('Posts')
}

function getPostById (id) {
  return db('Posts')
  // only returns posts which have an id that matches the id in the params (defined in routes)
    .where('id', id)
    // selects the first post that matches so it is no longer one post in an array
    .first()
}

function addPost (post) {
  return db('Posts')
  // adds the new post to the Posts table
    .insert(post)
    // GET CLARIFICATION HERE!!!
    .then(([id]) => id)
}

function updatePost (post, id) {
  return db('Posts')
  // updates the chosen post
    .update(post)
    .where('id', id)
}

function deletePost (post, id) {
  return db('Posts')
    .delete(post)
    .where('id', id)
}
