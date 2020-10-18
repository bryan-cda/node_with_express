const Ninja = require('../model/ninja')

  exports.findOne = (request, response, next) => {
      const id = request.params.id

      Ninja.findById(id).then((ninja) => {
          if (ninja) {
              response.send(ninja)
          } else {
              response.status(404).send()
          }
      }).catch((error) => next(error))
  }

  exports.findAll = (request, response, next) => {
      let limit = parseInt(request.query.limit || 0)
      let page = parseInt(request.query.page || 0)

      if (!Number.isInteger(limit) || !Number.isInteger(page)) {
          response.status(400).send()
      }

      const PAGE_ITEMS = 10

      limit = limit > PAGE_ITEMS || limit <= 0 ? PAGE_ITEMS : limit
      page = page <= 0 ? 0 : page * limit

      Ninja.findAll({ limit: limit, offset: page }).then((ninjas) => {
          if (ninjas && ninjas.length) {
              response.send(ninjas)
          } else {
              response.status(404).send()
          }
      }).catch((error) => next(error))
  }

  exports.create = (request, response, next) => {
      const name = request.body.name
      const village = request.body.village

      Ninja.create({
          name: name,
          village: village,
      }).then(() => {
          response.status(201).send()
      }).catch((error) => next(error))
  }

 