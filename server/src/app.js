const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined')) // morgan log
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// sync() will create all table if they doesn't exist in database
sequelize.sync({ force: true }).then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
