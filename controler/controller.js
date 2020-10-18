const Spoiler = require('../model/ninja')
  const Status = require('http-status')
const Ninja = require('../model/ninja')

  exports.findOne = (request, response, next) => {
      const id = request.params.id

      Spoiler.findById(id).then((spoiler) => {
          if (spoiler) {
              response.send(spoiler)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.findAll = (request, response, next) => {
      let limit = parseInt(request.query.limit || 0)
      let page = parseInt(request.query.page || 0)

      if (!Number.isInteger(limit) || !Number.isInteger(page)) {
          response.status(Status.BAD_REQUEST).send()
      }

      const PAGE_ITEMS = 10

      limit = limit > PAGE_ITEMS || limit <= 0 ? PAGE_ITEMS : limit
      page = page <= 0 ? 0 : page * limit

      Spoiler.findAll({ limit: limit, offset: page }).then((ninjas) => {
          if (ninjas && ninjas.length) {
              response.send(ninjas)
          } else {
              response.status(Status.NOT_FOUND).send()
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
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.update = (request, response, next) => {
      const id = request.params.id

      const name = request.body.name
      const village = request.body.village

      Spoiler.findById(id).then((ninja) => {
          if (ninja) {
              Ninja.update({
                  name: name,
                  village: village,
              }, { where: { id: id } }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.delete = (request, response, next) => {
      const id = request.params.id

      Spoiler.findById(id).then((ninja) => {
          if (ninja) {
              Ninja.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }