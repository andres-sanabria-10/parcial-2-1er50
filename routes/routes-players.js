const routes = require('express').Router()

const {save,findAllplayer
  
} = require('./../controllers/controll-players')

routes.post('/:id',save)
routes.get('/',findAllplayer)
module.exports = routes