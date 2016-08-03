var express = require('express');
var router = express.Router();

var sampleData = require('../sample_data/airports_data').airportsData();

/* GET => /airports */
/**
 * Dev Note
 * The spec requirement doesn't state the response should be given for href: /airports.
 * I presume by specifying "/airports" only, the endpoint service will return
 * a list of all airlines. This will be needed to populate the "from" & "to" dropdown
 * menu in the search flight form.
 */
// e.g2 /airports?q=Melbourne
router.get('/', function(req, res, next) {
    var _obtainedHref = require('util').inspect(req._parsedOriginalUrl["href"]);
    var _dataSource = sampleData;
    var _returnedData = [];
    var _searchKeyword = "";

    if(_obtainedHref === "'/airports'") {
        _returnedData = _dataSource;
    } else if(_obtainedHref.substr(1,12) === "/airports?_=") {
        // equivalent to /airports - to cater ajax request from the
        // frontend component.
        _returnedData = _dataSource;
    } else if(_obtainedHref.substr(1,12) === "/airports?q=") {
        if(_obtainedHref.substr(13) != " " || _obtainedHref.substr(13) != "") {
            _searchKeyword = _obtainedHref.substr(13).split("&")[0];

            for (var i=0; i<_dataSource.length; i++) {
                if (_dataSource[i].cityName.toLowerCase() === _searchKeyword.toLowerCase()) {
                    _returnedData.push(_dataSource[i]);
                }
            }
        }
    }
    res.json(_returnedData);
});

module.exports = router;
