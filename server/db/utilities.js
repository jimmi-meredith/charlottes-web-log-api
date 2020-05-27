const _ = require('lodash')

function convertSnakeToCamelCase (obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.camelCase(key)
  })
}

function convertCamelToSnakeCase (obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.snakeCase(key)
  })
}

module.exports = {
  convertSnakeToCamelCase,
  convertCamelToSnakeCase
}
