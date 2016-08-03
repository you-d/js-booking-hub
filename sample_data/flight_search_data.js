/**
 * Dev Note:
 * Judging by the presence of "key" member for each node in the sampleData,
 * the database system being used for the application is a NoSQL database system
 * such as MongoDB.
 * In real world scenario, the content of the "start" & "finish" keys must be obtained
 * from the "/airports" API endpoint. The same goes with the "airline" key as well
 * (which has to be obtained from the "/airlines" API endpoint).
 * However, since both operations have to be done on the server side, and
 * the scope of this test is to measure my skill in front end development
 * (not to mention the time constraint to complete & submit this test as early as possible),
 * then I will use the below sampleData to populate the content of UI.
 * But in case if you guys are interested to know about my level of knowledge in backend aspect
 * of MEAN stack development, then My MEAN Stack portfolio shall demonstrate my knowledge in
 * basic server side operations utilising Node.JS, MongoDB, and Express.JS.
 */

var exports = module.exports = {};

exports.flightSearchData = function() {
  return ([
    {
        "key": "UUCHAGDUY1",
        "airline": { "code": "QF", "name": "Quantas" },
        "flightNum": 664,
        "start": {
            "dateTime": "2016-09-03T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "380",
            "shortName": "Airbus A380",
            "fullName": "Airbus Industry A380",
            "manufacturer": "Airbus",
            "model": "A380"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3499.46
    },
    {
        "key": "HCJAED78VDSKJ",
        "airline": { "code": "SQ", "name": "Singapore Airlines" },
        "flightNum": 716,
        "start": {
            "dateTime": "2016-09-03T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "74H",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3899.46
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "KE", "name": "Korean Airlines" },
        "flightNum": 456,
        "start": {
            "dateTime": "2016-09-03T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith International Airport",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy International Airport",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "SU", "name": "Aeroflot" },
        "flightNum": 216,
        "start": {
            "dateTime": "2016-09-03T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "stop1": {
            "dateTime": "2016-09-04T19:59:00+10:00",
            "durationMin": "120",
            "airportCode": "MLB",
            "airportName": "Melbourne International Airport",
            "cityCode": "MLB",
            "cityName": "Melbourne",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 28.102,
            "longitude": -80.645,
            "stateCode": "FL",
            "timezone": "America/New_York"
        },
        "finish": {
            "dateTime": "2016-09-04T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },

    {
        "key": "UUCHAGDUY1",
        "airline": { "code": "QF", "name": "Quantas" },
        "flightNum": 667,
        "start": {
            "dateTime": "2016-09-02T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "380",
            "shortName": "Airbus A380",
            "fullName": "Airbus Industry A380",
            "manufacturer": "Airbus",
            "model": "A380"
        },
        "distance": 16014,
        "durationMin": 901,
        "price": 2499.46
    },
    {
        "key": "HCJAED78VDSKJ",
        "airline": { "code": "SQ", "name": "Singapore Airlines" },
        "flightNum": 796,
        "start": {
            "dateTime": "2016-09-02T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "74H",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3899.46
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "KE", "name": "Korean Airlines" },
        "flightNum": 406,
        "start": {
            "dateTime": "2016-09-02T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith International Airport",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy International Airport",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "SU", "name": "Aeroflot" },
        "flightNum": 116,
        "start": {
            "dateTime": "2016-09-02T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "stop1": {
            "dateTime": "2016-09-03T19:59:00+10:00",
            "durationMin": "120",
            "airportCode": "MLB",
            "airportName": "Melbourne International Airport",
            "cityCode": "MLB",
            "cityName": "Melbourne",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 28.102,
            "longitude": -80.645,
            "stateCode": "FL",
            "timezone": "America/New_York"
        },
        "finish": {
            "dateTime": "2016-09-04T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },

    {
        "key": "UUCHAGDUY1",
        "airline": { "code": "QF", "name": "Quantas" },
        "flightNum": 167,
        "start": {
            "dateTime": "2016-09-05T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "380",
            "shortName": "Airbus A380",
            "fullName": "Airbus Industry A380",
            "manufacturer": "Airbus",
            "model": "A380"
        },
        "distance": 16014,
        "durationMin": 901,
        "price": 2499.46
    },
    {
        "key": "HCJAED78VDSKJ",
        "airline": { "code": "SQ", "name": "Singapore Airlines" },
        "flightNum": 26,
        "start": {
            "dateTime": "2016-09-05T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "74H",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3899.46
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "KE", "name": "Korean Airlines" },
        "flightNum": 106,
        "start": {
            "dateTime": "2016-09-05T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith International Airport",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy International Airport",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "SU", "name": "Aeroflot" },
        "flightNum": 119,
        "start": {
            "dateTime": "2016-09-05T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "stop1": {
            "dateTime": "2016-09-03T19:59:00+10:00",
            "durationMin": "120",
            "airportCode": "MLB",
            "airportName": "Melbourne International Airport",
            "cityCode": "MLB",
            "cityName": "Melbourne",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 28.102,
            "longitude": -80.645,
            "stateCode": "FL",
            "timezone": "America/New_York"
        },
        "finish": {
            "dateTime": "2016-09-04T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },

    {
        "key": "UUCHAGDUY1",
        "airline": { "code": "QF", "name": "Quantas" },
        "flightNum": 107,
        "start": {
            "dateTime": "2016-09-01T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "380",
            "shortName": "Airbus A380",
            "fullName": "Airbus Industry A380",
            "manufacturer": "Airbus",
            "model": "A380"
        },
        "distance": 16014,
        "durationMin": 901,
        "price": 2499.46
    },
    {
        "key": "HCJAED78VDSKJ",
        "airline": { "code": "SQ", "name": "Singapore Airlines" },
        "flightNum": 206,
        "start": {
            "dateTime": "2016-09-01T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-01T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "74H",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3899.46
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "KE", "name": "Korean Airlines" },
        "flightNum": 146,
        "start": {
            "dateTime": "2016-09-01T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith International Airport",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy International Airport",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "SU", "name": "Aeroflot" },
        "flightNum": 319,
        "start": {
            "dateTime": "2016-09-01T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "stop1": {
            "dateTime": "2016-09-03T19:59:00+10:00",
            "durationMin": "120",
            "airportCode": "MLB",
            "airportName": "Melbourne International Airport",
            "cityCode": "MLB",
            "cityName": "Melbourne",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 28.102,
            "longitude": -80.645,
            "stateCode": "FL",
            "timezone": "America/New_York"
        },
        "finish": {
            "dateTime": "2016-09-04T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },

    {
        "key": "UUCHAGDUY1",
        "airline": { "code": "QF", "name": "Quantas" },
        "flightNum": 7,
        "start": {
            "dateTime": "2016-09-04T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "380",
            "shortName": "Airbus A380",
            "fullName": "Airbus Industry A380",
            "manufacturer": "Airbus",
            "model": "A380"
        },
        "distance": 16014,
        "durationMin": 901,
        "price": 2499.46
    },
    {
        "key": "HCJAED78VDSKJ",
        "airline": { "code": "SQ", "name": "Singapore Airlines" },
        "flightNum": 200,
        "start": {
            "dateTime": "2016-09-04T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-01T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "74H",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3899.46
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "KE", "name": "Korean Airlines" },
        "flightNum": 14,
        "start": {
            "dateTime": "2016-09-04T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith International Airport",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "finish": {
            "dateTime": "2016-09-03T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy International Airport",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    },
    {
        "key": "OIHCFJHWE7876",
        "airline": { "code": "SU", "name": "Aeroflot" },
        "flightNum": 19,
        "start": {
            "dateTime": "2016-09-04T09:59:00+10:00",
            "airportCode": "SYD",
            "airportName": "Kingsford Smith",
            "cityCode": "SYD",
            "cityName": "Sydney",
            "countryCode": "AU",
            "countryName": "Australia",
            "latitude": -33.946111,
            "longitude": 151.177222,
            "stateCode": "NS",
            "timezone": "Australia/Sydney"
        },
        "stop1": {
            "dateTime": "2016-09-03T19:59:00+10:00",
            "durationMin": "120",
            "airportCode": "MLB",
            "airportName": "Melbourne International Airport",
            "cityCode": "MLB",
            "cityName": "Melbourne",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 28.102,
            "longitude": -80.645,
            "stateCode": "FL",
            "timezone": "America/New_York"
        },
        "finish": {
            "dateTime": "2016-09-04T16:00:00+04:00",
            "airportCode": "JFK",
            "airportName": "John F Kennedy Intl",
            "cityCode": "NYC",
            "cityName": "New York",
            "countryCode": "US",
            "countryName": "United States",
            "latitude": 40.639751,
            "longitude": -73.778925,
            "stateCode": "NY",
            "timezone": "America/New_York"
        },
        "plane": {
            "code": "K55",
            "shortName": "Boeing 747-8",
            "fullName": "Boeing 747-8",
            "manufacturer": "Boeing",
            "model": "747-8 Intercontinental"
        },
        "distance": 16014,
        "durationMin": 1201,
        "price": 3579.32
    }
  ]);
}
