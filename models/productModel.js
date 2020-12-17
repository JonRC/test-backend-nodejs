const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  price: Number,
  category: String
})

module.exports = mongoose.model('Product', productSchema)