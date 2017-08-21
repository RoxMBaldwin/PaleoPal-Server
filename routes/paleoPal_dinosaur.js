const express = require('express')
const router = express.Router()
const queries = require('../queries')
const knex = require('knex')

router.get('/PaleoPal/', (request, response) => {
  queries.getAll()
  .then(function(dinosaur){
    response.json(dinosaur)
  })
})

module.exports = router
