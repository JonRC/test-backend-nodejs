const {Router} = require('express')
const controller = require('./controllers/productsController')
const noAuthRoutes = require("./services/routes")

const router = Router()



router.use("/noauth", noAuthRoutes.router)

module.exports = {
  router
};