var express = require('express');
var router = express.Router();

var sampleData = require('../sample_data/flight_search_data').flightSearchData();

/**********************************
 * Helper functions
 **********************************
 * Dev Note :
 * these helper functions are not needed in this router. However, in case
 * we'd like to calculate adjacent dates from a given date, and convert them
 * into "yyyy-mm-dd" string format, then we could use these functions
 **********************************/
function calculateNewDateBasedOnPivotDate(pivotDate, numOfDays) {
    // Hint:
    // JS Date objects possess a auto correct feature that can automagically correct
    // wrong dates (e.g June 31st (30 days) will automatically be corrected into July 1st).
    // That means if we set any date components individually, we may run in a situation
    // of which the autocorrect feature will get in our way. Always instantiate a
    // new Date object whenever we construct a Date object.
    var _calcDate = new Date();
    pivotDate = new Date(pivotDate);

    _calcDate = new Date(pivotDate);
    if(Math.sign(numOfDays) != 0) {
        _calcDate.setDate(_calcDate.getDate() + numOfDays);
        return new Date(_calcDate);
    }

    return _calcDate;
}
function yyyymmddStringConvertor(dateObj) {
    var yyyy = dateObj.getFullYear();
    var mm = (parseInt(dateObj.getMonth()) + 1).toString();
    var dd = dateObj.getDate();

    return yyyy + "-" + mm + "-" + dd;
}

/* GET => /flight_search/:airline_code */
// e.g flight_search/QF?date=2016-09-02&from=SYD&to=NYC
// Presumption :
// 1) "from" & "to" params contains airport codes, not city codes.
// 2) case insensitive (acceptable input: SYD or syd)
// 3) date format must be "yyyy-mm-dd"
router.get('/:airline_code', function(req, res, next) {
    var _rawAirlineCode = req.params.airline_code;
    var _rawQuery = require('util').inspect(req._parsedOriginalUrl["query"]);
    var _output = [];
    var _sanityCheckTestResults = [false, false, false, false, false, false,
                                   false, false, false, false, false];

    // remove the single quote wrapper from the query
    _rawQuery = _rawQuery.substring(1,_rawQuery.length - 1);

    // perform a sanity check for the airline code
    /**
     * Dev Note :
     * In order to minimise the number of expensive data fetching operation
     * straight from the database, we could create a local array in this router
     * which contains a list of IATA/ICAO airline designators. The idea is to
     * check the received airline code from the url parameter against the list
     * in order to verify the validity of the airline code. If the received
     * airline code is not valid, then we could avoid wasted, and expensive data
     * fetching operation from the database.
     * Since this is a backend operation, for this test, I will assume that the
     * received code has already been valid, therefore I will skip the sanity check
     * operation for the airline code.
     */
    var _validatedAirlineCode = _rawAirlineCode.toUpperCase();
    // we'll skip the 1st test.
    _sanityCheckTestResults[0] = true;

    // inspect the _rawQuery value, and perform sanity check.
    var _rawQueryArray = _rawQuery.split("&");

    // 2nd test -> determine the number of elements in the _rawQueryArray.
    // The number must be either 3 or 4 (with the key of the last
    // element must be "_"). For the later case, that
    // means the request came from jQuery Ajax method.
    switch( _rawQueryArray.length ) {
        case 3 :
          _sanityCheckTestResults[1] = true;
          break;
        case 4 :
          if(_rawQueryArray[3].substring(0,2) === "_=") {
            // remove the last element that was added by JQuery Ajax method
            _rawQueryArray.splice(-1);
            _sanityCheckTestResults[1] = true;
          }
          break;
        default :
          _sanityCheckTestResults[1] = false;
    }

    // 3rd-5th test -> the acceptable query string key is either "date", "from", or "to";
    //                 in any orders, but case insensitive
    var _rawFromVal = ""; var _rawToVal = ""; var _rawDateVal = "";
    for (var i=0; i<_rawQueryArray.length; i++) {
        if (_rawQueryArray[i].substring(0,5).toLowerCase() === "date=" && !_sanityCheckTestResults[2]) {
            _sanityCheckTestResults[2] = true;
            _rawDateVal = _rawQueryArray[i].substring(5);
        }
        if (_rawQueryArray[i].substring(0,5).toLowerCase() === "from=" && !_sanityCheckTestResults[3]) {
            _sanityCheckTestResults[3] = true;
            _rawFromVal = _rawQueryArray[i].substring(5);
        }
        if (_rawQueryArray[i].substring(0,3).toLowerCase() === "to=" && !_sanityCheckTestResults[4]) {
            _sanityCheckTestResults[4] = true;
            _rawToVal = _rawQueryArray[i].substring(3);
        }
    }

    // 6th-7th test -> perform sanity checks on both _rawFromVal & _rawToVal.
    //                 We could use a similar approach to 1st test (_validatedAirlineCode).
    //                 Create a fixed array of available country codes or multiple arrays of country codes
    //                 group by alphabetical order, and check the existance of the obtained values against these
    //                 arrays.
    // 8th-11th test -> perform sanity checks on _rawDateVal, ensure that the supplied value has a valid date
    //                  format (yyyy-mm-dd).
    var _validatedFromVal = ""; var _validatedToVal = ""; var _validatedDateVal = "";
    if (_sanityCheckTestResults[2] && _sanityCheckTestResults[3] && _sanityCheckTestResults[4]) {
        // For the same reason as the 1st test, we'll skip the 6th & 7th test
        _sanityCheckTestResults[5] = true;
        _validatedFromVal = _rawFromVal.toUpperCase();
        _sanityCheckTestResults[6] = true;
        _validatedToVal = _rawToVal.toUpperCase();

        // Dev note :
        // A more thorough sanity check approach would be to also take into consideration
        // the leap year, 30 or 31 days in a month. In this case, it may be
        // better to utilise a 3rd party library.
        // In this test, I will skip this thorough approach, as this is the backend code, which
        // is beyond the scope of front end development position that I'm applying for.

        // 8th test - total chars must be 10 chars (yyyy-mm-dd)
        _rawDateVal.length == 10 ? _sanityCheckTestResults[7] = true : _sanityCheckTestResults[7] = false;

        // 9th test - 'yyyy' must be >= 2016 (current year)
        var __splittedRawDateVal = _rawDateVal.split("-");
        if(__splittedRawDateVal[0].length == 4 && parseInt(__splittedRawDateVal[0]) >= 2016) {
            _sanityCheckTestResults[8] = true;
        }

        // 10th test - 'mm' must be in between 1-12
        if(__splittedRawDateVal[1].length == 2 && parseInt(__splittedRawDateVal[1]) >= 1 && parseInt(__splittedRawDateVal[1]) <= 12) {
            _sanityCheckTestResults[9] = true;
        }

        // 11th test - 'dd' must be in between 1-31
        if(__splittedRawDateVal[1].length == 2 && parseInt(__splittedRawDateVal[1]) >= 1 && parseInt(__splittedRawDateVal[1]) <= 31) {
            _sanityCheckTestResults[10] = true;
        }
    }

    /**
     * Dev Note :
     * From performance standpoint, it's definitely better to minimise the number of
     * data travelling in between the server and each client. So instead letting
     * each client to send 5 separate data fetching requests, we could simply limit
     * the number of data fetching operation into a single request, by determining the adjacent
     * dates in the server and let the data fetching function to return a large set of data.
     * However,such a behaviour can't be implemented in online ticket booking system, due to
     * fact that the database is constantly being updated on regular basis especially during
     * peak travel season or promo period.
     * That means we will have to settle with letting clients to send a new request everytime
     * an end user click on a tab in the result section of the site.
     */
    var _validatedDateVal = "";

    if (_sanityCheckTestResults[8] && _sanityCheckTestResults[9] && _sanityCheckTestResults[10]) {
        _validatedDateVal = _rawDateVal;
    }

    var _performQuery = false;
    for (var i=0; i<=_sanityCheckTestResults.length; i++) {
        if (i == _sanityCheckTestResults.length) { _performQuery = true; }
        if (!_sanityCheckTestResults[i]) { _output = []; break; }
    }
    if (_performQuery) {
        // passed all sanity checks, lets perform search query from the database table
        for (var i=0; i<sampleData.length; i++) {
            var __data = sampleData[i];
            var __primaryCondition = false;

            /**
             * Dev Note :
             * The requirement only provides the following example for the API endpoint url:
             * "/flight_search/QF?from=JFK&to=SYD&date=2016-09-03"
             * It doesn't provide an url example in case we'd like to generate result schedules
             * for all airlines, of which in my opinion is very common in real world scenario.
             * Therefore I've taken a liberty to allow the API endpoint to accept the following
             * URL structure as well: "/flight_search/ALLAIRLINES?from=JFK&to=SYD&date=2016-09-03"
             * to accomodate search query for all airlines - not just a specific airline.
             * Alternatively, I could simply get a list available airline codes from the "/airline"
             * API endpoint, and perform multiple flight schedule data requests by looping through
             * the airline code list. Obviously, this approach would not be as efficient as the previous
             * approach.
             */
            if ( _validatedAirlineCode === "ALLAIRLINES" ) {
                __primaryCondition = (__data.start.airportCode === _validatedFromVal) &&
                                     (__data.start.dateTime.substring(0,10) === _validatedDateVal) &&
                                     (__data.finish.airportCode === _validatedToVal)
            } else {
                __primaryCondition = (__data.airline.code === _validatedAirlineCode) &&
                                     (__data.start.airportCode === _validatedFromVal) &&
                                     (__data.start.dateTime.substring(0,10) === _validatedDateVal) &&
                                     (__data.finish.airportCode === _validatedToVal)
            }

            if ( __primaryCondition ) {
                // construct the output

                /**
                 * Dev Note :
                 * We could simply fetch the whole data from here (server side), and we'll do the
                 * data trimming on the front end - just like what I did with the "/airports" endpoint.
                 * However for performance gain reason, in this endpoint I've decided to perform the
                 * data trimming in here in order to reduce the size of the data that needs to be transferred
                 * into the front end side.
                 */
                var __retrievedData = {
                    "key": __data.key,
                    "airline": { "code": __data.airline.code,
                                 "name": __data.airline.name },
                    "flightNum": __data.flightNum,
                    "start": {
                        "dateTime": __data.start.dateTime,
                        "airportCode": __data.start.airportCode,
                        "airportName": __data.start.airportName,
                        "cityCode": __data.start.cityCode,
                        "cityName": __data.start.cityName,
                        "countryCode": __data.start.countryCode,
                        "countryName": __data.start.countryName
                    },
                    "finish": {
                        "dateTime": __data.finish.dateTime,
                        "airportCode": __data.finish.airportCode,
                        "airportName": __data.finish.airportName,
                        "cityCode": __data.finish.cityCode,
                        "cityName": __data.finish.cityName,
                        "countryCode": __data.finish.countryCode,
                        "countryName": __data.finish.countryName
                    },
                    "plane": { "shortName": __data.plane.shortName },
                    "distance": __data.distance,
                    "durationMin": __data.durationMin,
                    "price": __data.price
                }

                if (typeof __data.stop1 != "undefined") {
                    __retrievedData.stop1 = {
                        "dateTime": __data.stop1.dateTime,
                        "durationMin": __data.stop1.durationMin,
                        "airportCode": __data.stop1.airportCode,
                        "airportName": __data.stop1.airportName,
                        "cityCode": __data.stop1.cityCode,
                        "cityName": __data.stop1.cityName,
                        "countryCode": __data.stop1.countryCode,
                        "countryName": __data.stop1.countryName
                    };
                }

                _output.push(__retrievedData);
            }
        }
    }

    res.json(_output);
});

module.exports = router;
