/**
 * Public class
 * This class serves as a central repository of all markup templates in the site.
 * All functions must instantiate an object of this class, and call the "constructTemplate"
 * method in order to generate a markup based on the specified template.
 *
 * Dev Comment :
 * Instead of relying on "display : none/block" css attribute to hide/show
 * a certain section of the site, I've decided to settle with generating markups
 * through ECMAScript. The benefit of this approach is that it will prevent tech savvy
 * end-users to be able to utilise Browser's Developer Tool to fiddle around with the
 * markup of the site in an unintended way.
 */
export default class TemplateFactory {
    constructor() {}
    /**
     * Public function
     * Generate a HTML markup to be shown on the site.
     * @param {String} templateType - the signature of the template. Must be unique.
     * @param {String} templateId - the value to be set for the id property of the markup.
     * @param {Flexible} data - can accept a string, array, objects, or JSON string, depending
     *                    on the type of data required by the requested template.
     * @return {String} the requested HTML markup populated by the specified data.
     */
    constructTemplate(templateType, templateId = "", data="") {
        switch(templateType) {
            case "searchResultLayout":
              return this.searchResultLayoutTemplate(templateId);
            case "flightScheduleDirect":
              return this.flightScheduleCardDirectTemplate(data);
            case "flightScheduleOneStop":
              return this.flightScheduleCardOneStopTemplate(data);
            case "airportDropdown":
              return this.airportDropdownTemplate(data);
            case "resultTabs":
              return this.resultTabsTemplate();
            case "resultTabsMobile":
              return this.resultTabsMobileTemplate();
            case "scheduleNotAvailable":
              return this.scheduleNotAvailableTemplate();
            default:
              console.log("ERROR: Unrecognised Template Signature: " + templateType);
        }
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * Used by the flight schedule card to convert airport name into a shorter version.
     * This function checks occurences of the following keywords : "I/international" and "A/airport".
     * It converts the "I/international" string into "Intl", and
     * the "A/airport" string into "" (empty string).
     * @param {String} airportName - the full name of the airport.
     * @return {String} the shortened airport name.
     */
    condenseAirportName(airportName) {
        let _airportNameComps = airportName.split(" ");
        let _output = "";

        for(let i=0; i<_airportNameComps.length; i++) {
            if (_airportNameComps[i].toLowerCase() == "international") {
                _airportNameComps[i] = "Intl";
            }
            if (_airportNameComps[i].toLowerCase() == "airport") {
                _airportNameComps[i] = "";
            }

            _output += _airportNameComps[i];

            if (i != _airportNameComps.length - 1) { _output += " "; }
        }

        return _output;
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * Used by the flight schedule card to convert an airline name into the shortened version.
     * e.g "ABC Airlines" becomes "ABC Air"
     * @param {String} airportName - the full name of the airline.
     * @return {String} the shortened airline name.
     */
    condenseDataAirlineNameLabel(label) {
        let _output = "";
        let _labelComponents = label.split(" ");
        let _lastComponent = "";

        if (_labelComponents.length > 1) {
            _lastComponent = _labelComponents.slice(-1)[0].toLowerCase();
        } else {
            return _labelComponents[0];
        }

        if (_lastComponent === "airline" || _lastComponent === "airlines") {
            _lastComponent = "Air";
        }

        for(let i=0; i<_labelComponents.length; i++) {
            if (i == _labelComponents.length-1) {
               _output += _lastComponent;
            } else {
               _output += (_labelComponents[i] + " ");
            }
        }

        return _output;
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * convert "0" to "Sun", "1" to "Mon", and so on.
     * @param {String/int} num - the day number ranging from 0 to 6.
     * @return {String} the shortened day name corresponds to the specified number.
     */
    getDayName(num) {
        switch(num.toString()) {
          case "0" : return "Sun"; case "1" : return "Mon";
          case "2" : return "Tue"; case "3" : return "Wed";
          case "4" : return "Thu"; case "5" : return "Fri";
          case "6" : return "Sat";
        }
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * convert "0" to "Jan", "1" to "Feb", and so on.
     * @param {String/int} num - the month number ranging from 0 to 11.
     * @return {String} the shortened month name corresponds to the specified number.
     */
    getMonthName(num) {
        switch(num.toString()) {
          case "0" : return "Jan"; case "1" : return "Feb";
          case "2" : return "Mar"; case "3" : return "Apr";
          case "4" : return "May"; case "5" : return "Jun";
          case "6" : return "Jul"; case "7" : return "Aug";
          case "8" : return "Sep"; case "9" : return "Oct";
          case "10" : return "Nov"; case "11" : return "Dec";
        }
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * convert a valid dateTime string into a custom string for the flight schedule card.
     * e.g 2016-09-03 becomes "3 Sep (Thu)" or "(Thu) 3 Sep"
     * @param {String} dateTime - a date time string in a valid format.
     * @param {String} whichComp - accepts either "leftColDate" or "rightColDate"
     * @return either e.g "3 Sep (Thu)" or "(Thu) 3 Sep".
     */
    getDateOrTimeComponent(dateTime, whichComp) {
        let _dateTime = new Date(dateTime);
        let _output = "";
        switch(whichComp) {
          case "leftColDate" :
            _output = _dateTime.getDate() + " " + this.getMonthName(_dateTime.getMonth()) + " (" +
                      this.getDayName(_dateTime.getDay()) + ")";
            break;
          case "rightColDate" :
            _output = "(" + this.getDayName(_dateTime.getDay()) + ") " + _dateTime.getDate() + " " +
                      this.getMonthName(_dateTime.getMonth())
            break;
          case "time" :
            let __hours = _dateTime.getHours().toString().length == 1 ? "0" + _dateTime.getHours() :
                                                                        _dateTime.getHours();
            let __minutes = _dateTime.getMinutes().toString().length == 1 ? "0" + _dateTime.getMinutes() :
                                                                            _dateTime.getMinutes();
            _output = __hours + ":" + __minutes;
            break;
        }

        return _output;
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * Get the start date and end date, and calculate the date difference in x hrs y mins format
     * @param {String} departureTime - a date time string in a valid format.
     * @param {String} arrivalTime - a date time string in a valid format.
     * @return {string} "x hrs y mins" format
     */
    calculateFlightDuration(departureTime, arrivalTime) {
        let _rawDiff = new Date(arrivalTime) - new Date(departureTime);

        return new Date(_rawDiff).getHours() + "hrs " +
               new Date(_rawDiff).getMinutes() + "mins";
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * populate a <select> tag with <option> tags based on the supplied data.
     * @param {JSON/array} data.
     * @return {string} the markup.
     */
    airportDropdownTemplate(data) {
        let output = "<option value=''></option>";
        for(let idx=0; idx<data.length; idx++) {
          output += "<option value='" + data[idx]["airportCode"] + "'>" +
                        "[ " + data[idx]["countryCode"] + " ] " +
                        data[idx]["cityName"] + " - " +
                        data[idx]["airportCode"] +
                    "</option>";
        }

        return output;
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * generate main tabs for the wide/desktop for the search result section.
     * @return {string} the markup.
     */
    resultTabsTemplate() {
        return (
          "<ul class='nav nav-justified'>" +
              "<li class='tab1-nav-btn'>" +
                  "<div id='result-tab-minus2-wide'></div>" +
              "</li>" +
              "<li class='tab2-nav-btn'>" +
                  "<div id='result-tab-minus1-wide'></div>" +
              "</li>" +
              "<li class='tab3-nav-btn active'>" +
                  "<div id='result-tab-zero-wide'></div>" +
              "</li>" +
              "<li class='tab4-nav-btn'>" +
                  "<div id='result-tab-plus1-wide'></div>" +
              "</li>" +
              "<li class='tab5-nav-btn'>" +
                  "<div id='result-tab-plus2-wide'></div>" +
              "</li>" +
          "</ul>"
        );
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * generate main tabs for the narrow/mobile view for the search result section.
     * @return {string} the markup.
     */
    resultTabsMobileTemplate() {
        return (
            "<ul class='nav navbar-nav'>" +
              "<li class='tab1-nav-btn'>" +
                  "<div id='result-tab-minus2-narrow'></div>" +
              "</li>" +
              "<li class='tab2-nav-btn'>" +
                  "<div id='result-tab-minus1-narrow'></div>" +
              "</li>" +
              "<li class='tab3-nav-btn active'>" +
                  "<div id='result-tab-zero-narrow'></div>" +
              "</li>" +
              "<li class='tab4-nav-btn'>" +
                  "<div id='result-tab-plus1-narrow'></div>" +
              "</li>" +
              "<li class='tab5-nav-btn'>" +
                  "<div id='result-tab-plus2-narrow'></div>" +
              "</li>" +
            "</ul>"
        );
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * generate search result layout.
     * @param {string} the element id.
     * @return {string} the markup.
     */
    searchResultLayoutTemplate(templateId) {
        return (
          "<div id='" + templateId + "' class='row resultContentLayout'>" +
          "</div>"
        );
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * generate the markup to be shown in case users search produces empty result.
     * @return {string} the markup.
     */
    scheduleNotAvailableTemplate() {
        return (
            '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 notAvailCellRow">' +
                'Currently there aren\'t any flight schedules that match your search criteria.' +
                '<br>' +
                'Please check back again later.' +
            '</div>'
        );
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * The template for a direct flight schedule.
     * @param {JSON} data - a flight schedule data.
     * @return {string} the markup that represents a flight schedule card.
     */
    flightScheduleCardDirectTemplate(data) {
        let _dataAirlineName = this.condenseDataAirlineNameLabel(data.airline.name);
        return (
            '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 resultCellRow directCard">' +
                '<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 resultCellRow1Left">' +
                  '<span class="glyphicon glyphicon-plane"></span>&nbsp;<span>' + _dataAirlineName + ' - ' + data.airline.code + ' ' + data.flightNum + '</span>' +
                '</div>' +
                '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 resultCellRow1Right">' +
                  '<span>direct</span>' +
                  '<span>$' + data.price + '</span>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Left">' +
                  '<div>' + data.start.cityCode + '</div>' +
                  '<div>' + this.getDateOrTimeComponent(data.start.dateTime, "time") + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' + this.condenseAirportName(data.start.airportName) + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' + this.getDateOrTimeComponent(data.start.dateTime, "leftColDate") + '</div>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Right">' +
                  '<div>' + data.finish.cityCode + '</div>' +
                  '<div>' + this.getDateOrTimeComponent(data.finish.dateTime, "time") + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' + this.condenseAirportName(data.finish.airportName) + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' + this.getDateOrTimeComponent(data.finish.dateTime, "rightColDate") + '</div>'+
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow3Left">' +
                  '<span class="glyphicon glyphicon-time"></span>&nbsp;' +
                  '<span>' + this.calculateFlightDuration(data.start.dateTime, data.finish.dateTime) + '</span>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow3Right">' +
                  '<div class="bookingButton">' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-1"></span>' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-2"></span>' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-3"></span>' +
                    '[ Book ]' +
                  '</div>' +
                '</div>' +
            '</div>'
        );
    }
    /**
     * Private function
     * (Supposedly as ES6 class syntatic sugar lacks support for class property access scope)
     *
     * The template for a 1 stop flight schedule.
     * @param {JSON} data - a flight schedule data.
     * @return {string} the markup that represents a flight schedule card.
     */
    flightScheduleCardOneStopTemplate(data) {
        let _dataAirlineName = this.condenseDataAirlineNameLabel(data.airline.name);
        return (
            '<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 resultCellRow oneStopCard">' +
                '<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 resultCellRow1Left">' +
                    '<span class="glyphicon glyphicon-plane"></span>&nbsp;<span>' + _dataAirlineName + ' - ' + data.airline.code + ' ' + data.flightNum + '</span>' +
                '</div>' +
                '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 resultCellRow1Right">' +
                    '<span>1 stop</span>' +
                    '<span>$' + data.price + '</span>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Left">' +
                    '<div>' + data.start.cityCode + '</div>' +
                    '<div>' + this.getDateOrTimeComponent(data.start.dateTime, "time") + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' + this.condenseAirportName(data.start.airportName) + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' + this.getDateOrTimeComponent(data.start.dateTime, "leftColDate") + '</div>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Right">' +
                    '<div class="transitColor">' + data.stop1.cityCode + '</div>' +
                    '<div>' + this.getDateOrTimeComponent(data.stop1.dateTime, "time") + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' + this.condenseAirportName(data.stop1.airportName) + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' +
                        '<span class="glyphicon glyphicon-text-width transitIconColor"></span>' +
                        '&nbsp;&nbsp;&nbsp;&nbsp;' +
                        '<span>' + this.getDateOrTimeComponent(data.start.dateTime, "rightColDate") + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Left">' +
                  '<div class="transitColor">' + data.stop1.cityCode + '</div>' +
                  '<div>' + this.getDateOrTimeComponent(data.stop1.dateTime, "time") + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' + this.condenseAirportName(data.stop1.airportName) + '</div>' +
                  '<div class="clearFloat"></div>' +
                  '<div>' +
                    '<span>' + this.getDateOrTimeComponent(data.start.dateTime, "leftColDate") + '</span>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<span class="glyphicon glyphicon-text-width transitIconColor"></span></div>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow2Right">' +
                    '<div>' + data.finish.cityCode + '</div>' +
                    '<div>' + this.getDateOrTimeComponent(data.finish.dateTime, "time") + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' + this.condenseAirportName(data.finish.airportName) + '</div>' +
                    '<div class="clearFloat"></div>' +
                    '<div>' + this.getDateOrTimeComponent(data.finish.dateTime, "rightColDate") + '</div>'+
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow3Left">' +
                  '<span class="glyphicon glyphicon-time"></span>' +
                  '<span>' + this.calculateFlightDuration(data.start.dateTime, data.finish.dateTime) + '</span>' +
                '</div>' +
                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 resultCellRow3Right">' +
                  '<div class="bookingButton">' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-1"></span>' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-2"></span>' +
                    '<span class="glyphicon glyphicon-play bookingBtnAnim-3"></span>' +
                    '[ Book ]' +
                  '</div>' +
                '</div>' +
            '</div>'
        );
    }
}
