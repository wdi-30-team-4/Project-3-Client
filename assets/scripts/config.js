'use strict'

let apiUrl
const apiUrls = {
  production: 'https://wdi-library-api.herokuapp.com/books',
  development: 'https://wdi-library-api.herokuapp.com/books'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
