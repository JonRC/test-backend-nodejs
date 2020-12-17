const express = require('express')
const {router} = require('./routes')
const yaml = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const path = require('path')

const app = express()
const bd = require('../database/database')
bd.connect()

const swaggerDocument = yaml.load(path.join(__dirname, "/../docs", "openaip.yaml"))




app.use(express.json())
app.use(router)

app.use('/docs', swaggerUI.serve)
app.get('/docs', swaggerUI.setup(swaggerDocument))


app.listen(8080)