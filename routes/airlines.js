var express = require('express');
var router = express.Router();

var sampleData = require('../sample_data/airlines_data').airlinesData();

/* GET => /airlines */
router.get('/', function(req, res, next) {
    res.json(sampleData);
});

module.exports = router;
