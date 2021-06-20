const app = require('express').Router()
const { join } = require('path')

app.get('/api/user', (req, res) =>
	require(join(__dirname, '../controllers/index')).index(req, res)
)
app.get('/', (req, res) => res.send('App Works !!!!'))
module.exports = app
