var express = require('express')

var router = express.Router()


router.get('/', function (req, res) {
	res.render('index',{ title: 'Alver Grisales Ortega'});
})

module.exports = router