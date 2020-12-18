const mongoose = require('mongoose')
const Product = require('../../../models/productModel') 

module.exports = {
  /**
   * 
   * register product
   * 
   * @name registerProduct
   * @description Registra um produto no banco de dados
   * @param  {String} title - titulo
   * @param  {String} description - descrição
   * @param  {Number} price - preço
   * @param  {String} category - categoria
   * @returns {Object} - Produto registrado
   */
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

  /**
   * @name listProducts
   * @description - Lista os produtos conforme as confições dadas
   * 
   * @param  {String} conditions.id - ID do produto a ser buscado
   * @param  {String} conditions.title - Título do produto a ser buscado
   * @param  {String} conditions.price - Price do produto a ser buscado
   * @param  {String} conditions.category - Category do produto a ser buscado
   * 
   * @returns - Produtos encontrados
   */
  async listProducts(conditions){
    productList = await Product.find(conditions)
      .exec()
      .catch(error => {
        console.log(error)
        return error
      })
    return productList
    
  },
  /**
   * @name deleteProduct
   * @description - Deleta um produto conforme o ID dado
   * 
   * @param  {String} conditions.id - ID do produto a ser buscado
   * 
   * @returns - Número de produtos excluídos
   * 
   */
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
  /**
   * @name changeProduct
   * @description - Altera o produto com o id especificado
   * 
   * @param  {String} conditions.id - ID do produto a ser buscado
   * 
   * @param  {String} productUpdates.title - Novo título do produto
   * @param  {String} productUpdates.price - Novo preço do produto
   * @param  {String} productUpdates.category - Nova categoria do produto
   * @param  {String} productUpdates.description - Nova descrição do produto
   * 
   * @returns - Produto antes de ser alterado
   */
  async changeProduct(conditions, productUpdates){
    changedProduct = await Product.findOneAndUpdate(conditions, {$set: productUpdates})
      .exec()
      .catch(error => {
        console.log(error)
      })
    
    return changedProduct
  }

}