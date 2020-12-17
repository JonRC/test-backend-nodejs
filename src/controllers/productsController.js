const productsServices = require('../services/noauth/productsServices')
const productServices = require('../services/noauth/productsServices')


module.exports = {
  async createProduct (request, response){
    
    console.log(request.body)

    const {
      title,
      description,
      price,
      category
    } = request.body

    productServices.registerProduct(title, description, price, category)
      .then(registerInformation => response.send(registerInformation))
      .then(() => response.status(200))
      .catch(error =>{
        console.log(error)
        response.status(500)
      })

    
  },

  async listProducts (request, response) {
    const conditions = {}
    const querys = request.query

    querys.title && (conditions.title = querys.title)
    querys.category && (conditions.category = querys.category)

    productsFound = await productServices.listProducts(conditions)
    productsFound ? response.send(productsFound) : response.send('error')
  },

  async findProduct (request, response){
    const { id } = request.params;
    const conditions = { id } 

    productsFound = await productServices.listProducts(conditions)
    productsFound ? response.send(productsFound) : send.status(500)
  },

  async deleteProduct (request, response){
    const { id } = request.params;
    conditions = { id }
    deletedCount = await productsServices.deleteProduct(conditions)

    response.send({deletedCount})
  },

  async updateProduct (request, response){
    const productUpdates = request.body
    const { id } = request.params;
    const conditions = { id }

    changeStatus = await productServices.changeProduct(conditions, productUpdates)
    response.send({changeStatus})

  }

}

 