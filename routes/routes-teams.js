const routes = require('express').Router()

const {
    findAllteams,findByIdteams
  
} = require('./../controllers/controll-teams')
routes.get('/',findAllteams)
routes.get('/:id',findByIdteams)
module.exports = routes