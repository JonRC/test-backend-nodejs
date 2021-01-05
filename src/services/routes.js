const {Router} = require('express')
const controller = require('./../controllers/productsController')

router = Router()


router.post("/products", controller.createProduct)
router.put("/products/:id", controller.updateProduct)
router.get("/products", controller.listProducts)
router.get("/products/:id", controller.findProduct)
router.delete("/products/:id", controller.deleteProduct)

module.exports = {
  router
}