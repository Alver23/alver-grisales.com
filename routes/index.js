var express = require('express')
var lenguages = require('models/').lenguages
var officeApplication = require('models/').officeApplication
var router = express.Router()
router.get('/', function (req, res) {
	//var lenguages = [{ "name":"PHP", "level": "80" }, { "name": "jQuery", "level": "70" }]
	res.render('index',{ title: 'Alver Grisales Ortega', lenguages : lenguages, officeApplication: officeApplication});
})
module.exports = router