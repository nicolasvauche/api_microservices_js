const express = require('express')
const bodyParser = require('body-parser')
const { dbConnect } = require('./src/database')

const authRoutes = require('./src/routes/auth/auth_routes')
const validateRoutes = require('./src/routes/auth/validate_routes')
const profileRoutes = require('./src/routes/user/profile_routes')
const registerRoutes = require('./src/routes/user/register_routes')
const listRoutes = require('./src/routes/user/list_routes')

const app = express()

app.use(bodyParser.json())

dbConnect()

app.use('/auth/login', authRoutes)
app.use('/auth/validate', validateRoutes)
app.use('/users/me', profileRoutes)
app.use('/users/register', registerRoutes)
app.use('/users', listRoutes)

module.exports = app
