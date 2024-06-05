const express = require('express')

const app = express()

const cors = require('cors')

app.use(express.urlencoded({ extended: true }))

const dbConfig = require('./db')

app.use(express.json())

app.use(cors())


const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server running on port ${port} 🔥`))