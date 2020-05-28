const config = require('../../knexfile').development
const db = require('knex')(config)
const utils = require('./utilities')

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
  getPostComments,
  addPostComment,
  updateComment
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

function updatePost (id, post) {
  return db('Posts')
    .where('id', id)
  // updates the chosen post
    .update(post)
}

function deletePost (id) {
  return db('Posts')
    .where('id', id)
  // deletes the chosen post
    .delete()
}

function getPostComments (postId) {
  return db('Comments')
  // post_id is a column in the comments table
    .where('post_id', postId)
    .select()
}

function addPostComment (comment) {
  return db('Comments')
    .insert(comment)
    .then(([postId]) => postId)
}

function updateComment (id, comment) {
  return db('Comments')
    .where('id', id)
    .update(comment)
}
