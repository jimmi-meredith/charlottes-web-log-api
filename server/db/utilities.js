const _ = require('lodash')

function convertSnakeToCamelCase (obj) {
  return _.mapKeys(obj, (key, value) => {
    return _.camelCase(key)
  })
}

function convertCamelToSnakeCase (obj) {
  return _.mapKeys(obj, (key, value) => {
    return _.snakeCase(key)
  })
}

module.exports = {
  convertSnakeToCamelCase,
  convertCamelToSnakeCase
}
