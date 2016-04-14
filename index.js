var express = require('express')
var http = require('http')
var path = require('path')
var routes = require('./routes')

var app = express()
var port = process.env.PORT || 8000
var server = http.createServer(app)

app.use(routes);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))
server.listen(port, function () {
	console.log('Server listening on port '+ port)
})