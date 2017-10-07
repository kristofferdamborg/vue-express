const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Shows console logs of requests made to the server
app.use(morgan('combined'))
// Helps parsing data as json
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Server is running.'
  })
})

app.listen(process.env.PORT || 8081)
