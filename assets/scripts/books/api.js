'use strict'

const config = require('./../config')

const index = function () {
  // make GET request to /books
  return $.ajax({
    url: config.apiUrl,
    method: 'GET'
  })
}

module.exports = { index }