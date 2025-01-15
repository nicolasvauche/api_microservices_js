const express = require('express')
const bodyParser = require('body-parser')
const { dbConnect } = require('./src/database')

const authRoutes = require('./src/routes/auth/auth_routes')
const profileRoutes = require('./src/routes/user/profile_routes')
const registerRoutes = require('./src/routes/user/register_routes')
const listRoutes = require('./src/routes/user/list_routes')

const app = express()
const port = 3000

app.use(bodyParser.json())

dbConnect()

app.use('/auth', authRoutes)
app.use('/users/me', profileRoutes)
app.use('/users/register', registerRoutes)
app.use('/users', listRoutes)

app.listen(port, () => {
  console.log(`API REST running at http://localhost:${port}`)
})
