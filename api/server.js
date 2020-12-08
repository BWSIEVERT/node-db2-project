const express = require('express')
const helmet = require('helmet')

const dealerRouter = require('./dealer/dealer_router')

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/dealers', dealerRouter)

module.exports = server