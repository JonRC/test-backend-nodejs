const mongoose = require('mongoose')
const Product = require('../../../models/productModel') 

module.exports = {
  async registerProduct (title, description, price, category){
    product = new Product({
      id: new mongoose.Types.ObjectId(),
      title,
      description,
      price,
      category
    })
    registeredProduct = await product.save()
      .catch(error =>{
        console.log(error)
        return error
      })

    return registeredProduct
  },

  async listProducts(conditions){
    productList = await Product.find(conditions)
      .exec()
      .catch(error => {
        console.log(error)
        return error
      })
    return productList
    
  },

  async deleteProduct(conditions){
    deletedProduct = await Product.deleteOne(conditions)
      .exec()
      .then(deletInformations => deletInformations.deletedCount)
      .catch(error => {
        console.log(error)
        return error
      })

      return deletedProduct
  },

  async changeProduct(conditions, productUpdates){
    changeInformations = await Product.update(conditions, {$set: productUpdates})
      .exec()
      .catch(error => {
        console.log(error)
      })
    
    const status = changeInformations.ok
    return status
  }
}