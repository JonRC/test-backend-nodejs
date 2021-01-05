const mongoose = require('mongoose')

module.exports = {
  async connect(){
    await mongoose.connect('mongodb+srv://jonathan:anotaai2020@cluster0.xkmxz.mongodb.net/testeDB?retryWrites=true&w=majority')
    const status = mongoose.connection.readyState
    return status
  }
}