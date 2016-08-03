/**
 * Dev Note
 *
 * ES6 Syntax through Babel transpiler.
 *
 * In order to demonstrate my knowledge in ECMAScript 2015, I've decided to minimise my
 * reliance on JQuery. After all, many React.JS based projects eschew mixing react components with
 * JQuery code.
 *
 * This work hasn't been tested in IE browsers due to the fact that IE is not available
 * in non-Windows operating systems. I use Ubuntu as my dev environment.
 */

import TemplateFactory from './templateFactory';
import * as helperModule from './helper';
import * as searchFormModule from './searchForm';
import * as searchResultModule from './searchResult';
import * as footerPanelModule from './footerPanel';
import * as experimentModule from './experimental';

/*******************************
 * Variable declarations
 *******************************/
let mainContentPlaceholder = document.getElementById("main-content-placeholder");
let inputDate = document.getElementById("inputDate");
let inputDateMobile = document.getElementById("inputDateMobile");
let inputFrom = document.getElementById("inputFrom");
let inputTo = document.getElementById("inputTo");
let inputFromMobile = document.getElementById("inputFromMobile");
let inputToMobile = document.getElementById("inputToMobile");
let searchButton = document.getElementById("searchButton");
let searchButtonMobile = document.getElementById("searchButtonMobile");
let carets = document.getElementsByClassName("caret");
let filterDirectBtn = document.getElementById("filterDirectCard");
let filterOneStopBtn = document.getElementById("filterOneStopCard");
let filterShowAllBtn = document.getElementById("filterShowAllCards");

let searchFormElements = {
    "inputTo" : inputTo, "inputFrom" : inputFrom,
    "inputDate" : inputDate, "searchButton" : searchButton
};
let searchFormElementsMobile = {
    "inputTo" : inputToMobile, "inputFrom" : inputFromMobile,
    "inputDate" : inputDateMobile, "searchButton" : searchButtonMobile
};

let resultTabsContainer = document.getElementById("resultTabsContainer");
let resultTabsContainerMobile = document.getElementById("resultTabsContainerMobile");
let allDesiredFlightDates = {
    "desiredFlightDateMinus2" : null, "desiredFlightDateMinus1" : null,
    "desiredFlightDate" : null,
    "desiredFlightDatePlus1" : null, "desiredFlightDatePlus2" : null
};
let allTabsWide = { "resultTabMinus2Wide" : null, "resultTabMinus1Wide" : null,
                    "resultTabZeroWide" : null,
                    "resultTabPlus1Wide" : null, "resultTabPlus2Wide" : null };
let allTabsNarrow = { "resultTabMinus2Narrow" : null, "resultTabMinus1Narrow" : null,
                      "resultTabZeroNarrow" : null,
                      "resultTabPlus1Narrow" : null, "resultTabPlus2Narrow" : null };
let searchFormDropdownFields = [ inputFromMobile, inputToMobile, inputFrom, inputTo ];

let airportsURL = "/airports";

/*******************************
 * JQuery codes
 *******************************/
jQuery(function() {
    searchFormModule.createDatePicker("inputDate");
    searchFormModule.createDatePicker("inputDateMobile");

    searchFormModule.populateFromAndToDropdownField(airportsURL, searchFormDropdownFields);

    helperModule.crossBrowserAddEventListener(searchFormElements.searchButton, "click", function(e) {
        e.preventDefault();
        if(searchFormModule.validateSearchFormInputs(searchFormElements)) {
            searchResultModule.setUpSearchResultSection(searchFormElements.inputDate.value,
                                                        allDesiredFlightDates, mainContentPlaceholder,
                                                        resultTabsContainer, resultTabsContainerMobile,
                                                        allTabsWide, allTabsNarrow,
                                                        searchFormElements.inputFrom.value,
                                                        searchFormElements.inputTo.value);

            // populate the fields in the narrow view form with the provided inputs
            searchFormModule.transferFormInputs(searchFormElements, searchFormElementsMobile, "narrow");

            // initially flight schedules for content-0 will be displayed
            searchResultModule.showSearchResultContent(searchFormElements.inputFrom.value,
                                                       searchFormElements.inputTo.value,
                                                       searchFormElements.inputDate.value,
                                                       document.getElementById("content-0"));

            experimentModule.bookingBtnAnimation();
        }
    });
    helperModule.crossBrowserAddEventListener(searchFormElementsMobile.searchButton, "click", function(e) {
        e.preventDefault();
        if(searchFormModule.validateSearchFormInputs(searchFormElementsMobile)) {
            searchResultModule.setUpSearchResultSection(searchFormElementsMobile.inputDate.value,
                                                        allDesiredFlightDates, mainContentPlaceholder,
                                                        resultTabsContainer, resultTabsContainerMobile,
                                                        allTabsWide, allTabsNarrow,
                                                        searchFormElementsMobile.inputFrom.value,
                                                        searchFormElementsMobile.inputTo.value);

            // populate the fields in the wide view form with the provided inputs
            searchFormModule.transferFormInputs(searchFormElements, searchFormElementsMobile, "wide");

            // initially flight schedules for content-0 will be displayed
            searchResultModule.showSearchResultContent(searchFormElementsMobile.inputFrom.value,
                                                       searchFormElementsMobile.inputTo.value,
                                                       searchFormElementsMobile.inputDate.value,
                                                       document.getElementById("content-0"));

            experimentModule.bookingBtnAnimation();
        }
    });
});

/*******************************
 * Search Form
 *******************************/
searchFormModule.animateCarets(carets);

/*******************************
 * Footer Panel
 *******************************/
helperModule.crossBrowserAddEventListener(filterShowAllBtn, "click", function(e) {
    footerPanelModule.filterBtnClickedAction("all");
});
helperModule.crossBrowserAddEventListener(filterDirectBtn, "click", function() {
    footerPanelModule.filterBtnClickedAction("direct");
});
helperModule.crossBrowserAddEventListener(filterOneStopBtn, "click", function() {
    footerPanelModule.filterBtnClickedAction("1stop");
});

/*******************************
 * Unit Test Suites
 *******************************/
/**
 * Dev Comment :
 * Although I've never had a chance to have an in-depth exposure towards 3rd party
 * unit testing tools such as Mocha (for Node.JS), QUnit, or Karma (for Angular.JS),
 * I am aware about the importance of TDD in Javascript Development.
 * Therefore, even though MEAN stack development environment provides a very useful
 * console based debugging tool, I have created a series of test suites using plain
 * Javascript (ES6) that relies on a web browser console in order to show the unit
 * test report.
 * These test suites is not an thorough and exhaustive test suites as it would require a
 * huge amount of time in order to produce a complete test suites. They are purely to
 * demonstrate my knowledge about the concept of Unit Testing.
 * I only have written test suites for the helper.js (HelperModule), but obviously,
 * the same technique can be implemented on the rest of modules.
 * Uncomment the below lines in order to see the demo.      
 */
//import UtestHelperModule from '../../unit_test/frontend/ut_helper';
//new UtestHelperModule(helperModule).runTestSuites();
