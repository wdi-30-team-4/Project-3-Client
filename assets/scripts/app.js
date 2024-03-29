'use strict'
const bookEvent = require('./books/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.get-books').on('submit', bookEvent.onGetBooks)
})
