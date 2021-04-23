require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()

const mainRoutes = require('./routes/main')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

app.listen(3000, () => {
  console.log('CONNECTED')
})
