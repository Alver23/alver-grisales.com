var express = require('express')

var router = express.Router()
var lenguages = [
		{
			name: "PHP",
			level: 80,
			description: "Probando men"
		},
		{
			name: "jQuery",
			level: 70,
			description: "Probando men"
		},
		{
			name: "HTML5",
			level: "90",
			description: "Probando men"
		},
		{
			name: "CSS3",
			level: "80",
			description: "Probando men"
		},
		{
			name: "Javascript",
			level: "70",
			description: "Probando men"
		}
	]
var officeApplication = [
	{
		name: "MS Word",
		level: 40,
	},
	{
		name: "MS Excel",
		level: 60,
	},
	{
		name: "Powerpoint",
		level: 40,
	}
]

router.get('/', function (req, res) {
	//var lenguages = [{ "name":"PHP", "level": "80" }, { "name": "jQuery", "level": "70" }]
	res.render('index',{ title: 'Alver Grisales Ortega', lenguages : lenguages, officeApplication: officeApplication});
})

module.exports = router