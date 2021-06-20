const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.set(
	'views',
	join(__dirname, '../app/public/views/view-angular-front-end/src')
)

app.use(require(join(__dirname, '../app/routes/index')))

module.exports = app
