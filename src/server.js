const express = require('express')
const {router} = require('./routes')

const app = express()
const bd = require('../database/database')
bd.connect()


app.use(express.json())
app.use(router)


app.listen(8080)