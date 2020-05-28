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
  getCommentById,
  addPostComment,
  updateComment,
  deleteComment,
  stringifyParagraphs,
  parseParagraphs
}

function getPosts () {
  // returning all posts in Posts table
  return db('Posts')
  // map over each post and turn the array of strings into a Javascript object
    .then(posts => posts.map(parseParagraphs))
    // map over the keys in each post object and convert to camelCase
    .then(posts => posts.map(utils.convertSnakeToCamelCase))
}

function getPostById (id) {
  return db('Posts')
  // only returns posts which have an id that matches the id in the params (defined in routes)
    .where('id', id)
    // selects the first post that matches so it is no longer one post in an array
    .first()
    .then(parseParagraphs)
    .then(utils.convertSnakeToCamelCase)
}

function addPost (post) {
  post = stringifyParagraphs(post)
  post = utils.convertCamelToSnakeCase
  // generates the cunnret time and date of when the post is added and assigns it to dateCreated property
  post.dateCreated = new Date(Date.now())

  return db('Posts')
  // adds the new post to the Posts table
    .insert(post)
    // GET CLARIFICATION HERE!!!
    .then(([id]) => id)
}

function updatePost (id, post) {
  post = stringifyParagraphs(post)
  post = utils.convertCamelToSnakeCase

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

function getCommentById (id) {
  return db('Comments')
    .where('id', id)
    .first()
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

function deleteComment (id) {
  return db('Comments')
    .where('id', id)
    .delete()
}

function stringifyParagraphs (post) {
  // converts the paragraphs from an object to a string
  post.paragraphs = JSON.stringify(post.paragraphs)

  return post
}

function parseParagraphs (post) {
  // converts the paragraphs from a string to an object
  post.paragraphs = JSON.parse(post.paragraphs)

  return post
}
