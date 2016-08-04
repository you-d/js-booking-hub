import TemplateFactory from './templateFactory';
import * as helperModule from './helper';
import * as scheduleCardModule from './scheduleCard';

/**
 * Public function
 * This function build the layout of the search result section, and the nav tab for both wide and
 * narow view. It also calculates the adjacent flight dates based on the desired flight date.
 * This function must be called inside JQuery document ready scope, and called before the
 * showSearchResultContent function.
 * @param {String} selectedDate - the specified flight date from the search form.
 * @param {array of HtmlElement} allDesiredFlightDates - Placeholders of the desired flight dates &
          its adjacent flight dates to be populated with Date objects.
 * @param {HtmlElement} mainContentPlaceholder - the placeholder of the search result section.
 * @param {HtmlElement} resultTabsContainer - The Placeholder of all desktop/wide view search result tabs.
 * @param {HtmlElement} resultTabsContainerMobile - The Placeholder of all mobile/narrow view search result tabs.
 * @param {array of HtmlElement} allTabsWide - All Html Element Object for desktop/wide view search result tabs.
 * @param {array of HtmlElement} allTabsNarrow - All HTML Element Object for mobile/narrow view search result tabs.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 */
export function setUpSearchResultSection(selectedDate, allDesiredFlightDates, mainContentPlaceholder,
                                         resultTabsContainer, resultTabsContainerMobile,
                                         allTabsWide, allTabsNarrow, origin, destination) {

    document.getElementById("hamburgerBtn").style.display = "block";
    document.getElementById("filterOption").style.display = "block";
    document.getElementById("demoMsg").style.display = "none";

    allDesiredFlightDates.desiredFlightDateMinus2 = helperModule.calculateNewDateBasedOnPivotDate(selectedDate, -2);
    allDesiredFlightDates.desiredFlightDateMinus1 = helperModule.calculateNewDateBasedOnPivotDate(selectedDate, -1);
    allDesiredFlightDates.desiredFlightDate = new Date(selectedDate);
    allDesiredFlightDates.desiredFlightDatePlus1 = helperModule.calculateNewDateBasedOnPivotDate(selectedDate, 1);
    allDesiredFlightDates.desiredFlightDatePlus2 = helperModule.calculateNewDateBasedOnPivotDate(selectedDate, 2);

    generateSearchResultTabs(resultTabsContainer, resultTabsContainerMobile,
                             allTabsWide, allTabsNarrow);

    assignResultTabLabel(allDesiredFlightDates.desiredFlightDateMinus2, "-2");
    assignResultTabLabel(allDesiredFlightDates.desiredFlightDateMinus1, "-1");
    assignResultTabLabel(allDesiredFlightDates.desiredFlightDate, "0");
    assignResultTabLabel(allDesiredFlightDates.desiredFlightDatePlus1, "+1");
    assignResultTabLabel(allDesiredFlightDates.desiredFlightDatePlus2, "+2");

    /**
     * Dev Comment :
     * A way to improve the aesthetic aspect of the UI is by implementing the JQuery
     * fade-in and out animation in the search result section. The animation will
     * be triggered after an end user clicked on one of the search result tab.
     * The shown search result panel will be faded out, and the new search result
     * panel which will replace the shown one will be faded in.
     * Due to time constraint, I will not implement this visual effect. Besides, with
     * JQuery it will be a relatively simple (although time consuming) task.
     */
    helperModule.crossBrowserAddEventListener(allTabsWide.resultTabMinus2Wide, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabMinus2Wide, allTabsNarrow.resultTabMinus2Narrow)) {
          resultNavTabClicked("-2", allTabsWide, allTabsNarrow);
          showContentMinus2(mainContentPlaceholder, origin, destination,
                            helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDateMinus2, "-"));
        }
    });
    helperModule.crossBrowserAddEventListener(allTabsNarrow.resultTabMinus2Narrow, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabMinus2Wide, allTabsNarrow.resultTabMinus2Narrow)) {
            resultNavTabClicked("-2", allTabsWide, allTabsNarrow);
            showContentMinus2(mainContentPlaceholder, origin, destination,
                              helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDateMinus2, "-"));
        }
        collapseMobileNavbar();
    });
    helperModule.crossBrowserAddEventListener(allTabsWide.resultTabMinus1Wide, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabMinus1Wide, allTabsNarrow.resultTabMinus1Narrow)) {
            resultNavTabClicked("-1", allTabsWide, allTabsNarrow);
            showContentMinus1(mainContentPlaceholder, origin, destination,
                              helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDateMinus1, "-"));
        }
    });
    helperModule.crossBrowserAddEventListener(allTabsNarrow.resultTabMinus1Narrow, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabMinus1Wide, allTabsNarrow.resultTabMinus1Narrow)) {
            resultNavTabClicked("-1", allTabsWide, allTabsNarrow);
            showContentMinus1(mainContentPlaceholder, origin, destination,
                              helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDateMinus1, "-"));
        }
        collapseMobileNavbar();
    });
    helperModule.crossBrowserAddEventListener(allTabsWide.resultTabZeroWide, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabZeroWide, allTabsNarrow.resultTabZeroNarrow)) {
            resultNavTabClicked("0", allTabsWide, allTabsNarrow);
            showContentZero(mainContentPlaceholder, origin, destination,
                            helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDate, "-"));
        }
    });
    helperModule.crossBrowserAddEventListener(allTabsNarrow.resultTabZeroNarrow, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabZeroWide, allTabsNarrow.resultTabZeroNarrow)) {
            resultNavTabClicked("0", allTabsWide, allTabsNarrow);
            showContentZero(mainContentPlaceholder, origin, destination,
                            helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDate, "-"));
        }
        collapseMobileNavbar();
    });
    helperModule.crossBrowserAddEventListener(allTabsWide.resultTabPlus1Wide, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabPlus1Wide, allTabsNarrow.resultTabPlus1Narrow)) {
            resultNavTabClicked("+1", allTabsWide, allTabsNarrow);
            showContentPlus1(mainContentPlaceholder, origin, destination,
                             helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDatePlus1, "-"));
        }
    });
    helperModule.crossBrowserAddEventListener(allTabsNarrow.resultTabPlus1Narrow, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabPlus1Wide, allTabsNarrow.resultTabPlus1Narrow)) {
            resultNavTabClicked("+1", allTabsWide, allTabsNarrow);
            showContentPlus1(mainContentPlaceholder, origin, destination,
                             helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDatePlus1, "-"));
        }
        collapseMobileNavbar();
    });
    helperModule.crossBrowserAddEventListener(allTabsWide.resultTabPlus2Wide, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabPlus2Wide, allTabsNarrow.resultTabPlus2Narrow)) {
            resultNavTabClicked("+2", allTabsWide, allTabsNarrow);
            showContentPlus2(mainContentPlaceholder, origin, destination,
                             helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDatePlus2, "-"));
        }
    });
    helperModule.crossBrowserAddEventListener(allTabsNarrow.resultTabPlus2Narrow, "click", function() {
        if (!checkIfResultNavTabIsActive(allTabsWide.resultTabPlus2Wide, allTabsNarrow.resultTabPlus2Narrow)) {
            resultNavTabClicked("+2", allTabsWide, allTabsNarrow);
            showContentPlus2(mainContentPlaceholder, origin, destination,
                             helperModule.yyyymmddStringConvertor(allDesiredFlightDates.desiredFlightDatePlus2, "-"));
        }
        collapseMobileNavbar();
    });

    // The content-0 will always be shown first.
    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", "content-0");
}

/**
 * Public function
 * This function perform an AJAX request to obtain flight schedule data from the backend.
 * The retrieved data will be used to construct schedule cards by calling the
 * scheduleCardModule.generateScheduleCard function.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 * @param {HtmlElement} contentPlaceholder - The placeholder of all flight schedule cards
 *
 * Dev Commment :
 * The requirement only provides the following example for the API endpoint url:
 * "/flight_search/QF?from=JFK&to=SYD&date=2016-09-03"
 * It doesn't provide an url example for a case if we'd like to generate result schedules
 * for all airlines, of which in my opinion is very common in real world scenario.
 * Therefore I've taken a liberty to allow the API endpoint to accept the following
 * URL structure as well: "/flight_search/ALLAIRLINES?from=JFK&to=SYD&date=2016-09-03"
 * to accomodate search query for all airlines - not just a specific airline.
 */
export function showSearchResultContent(origin, destination, flightDate, contentPlaceholder) {
    // fetch data from the database for the desired date (+0) as it will be displayed 1st
    let _requestUrl = "/flight_search/ALLAIRLINES?from=" + origin +
                                                "&to=" + destination +
                                                "&date=" + flightDate;

    jQuery.ajax({
        url: _requestUrl, dataType: 'json', cache: false,
        success: function(data) {
          if (data.length > 0) {
              for (let i=0; i<data.length; i++) {
                  contentPlaceholder.innerHTML += scheduleCardModule.generateScheduleCard(data[i]);
              }
          } else {
              // show the empty record panel.
              contentPlaceholder.innerHTML += scheduleCardModule.generateScheduleNotAvailTemplate();
          }
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(_requestURL, status, err.toString());
        }.bind(this),
    });
}
/**
 * Private function
 * Click Action handler after users clicked on the -2 tab.
 * @param {HtmlElement} mainContentPlaceholder - The placeholder of the search result section.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 */
function showContentMinus2(mainContentPlaceholder, origin, destination, flightDate) {
    let _templateId = "content-minus-2";

    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", _templateId);

    showSearchResultContent(origin, destination, flightDate,
                            document.getElementById(_templateId));
}
/**
 * Private function
 * Click Action handler after users clicked on the -1 tab.
 * @param {HtmlElement} mainContentPlaceholder - The placeholder of the search result section.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 */
function showContentMinus1(mainContentPlaceholder, origin, destination, flightDate) {
    let _templateId = "content-minus-1";

    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", _templateId);

    showSearchResultContent(origin, destination, flightDate,
                            document.getElementById(_templateId));
}
/**
 * Private function
 * Click Action handler after users clicked on the zero tab.
 * @param {HtmlElement} mainContentPlaceholder - The placeholder of the search result section.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 */
function showContentZero(mainContentPlaceholder, origin, destination, flightDate) {
    let _templateId = "content-0";

    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", _templateId);

    showSearchResultContent(origin, destination, flightDate,
                            document.getElementById(_templateId));
}
/**
 * Private function
 * Click Action handler after users clicked on the +1 tab.
 * @param {HtmlElement} mainContentPlaceholder - The placeholder of the search result section.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 */
function showContentPlus1(mainContentPlaceholder, origin, destination, flightDate) {
    let _templateId = "content-plus-1";

    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", _templateId);

    showSearchResultContent(origin, destination, flightDate,
                            document.getElementById(_templateId));
}
/**
 * Private function
 * Click Action handler after users clicked on the +2 tab.
 * @param {HtmlElement} mainContentPlaceholder - The placeholder of the search result section.
 * @param {String} origin - The desired departure place from the search form.
 * @param {String} destination - The desired arrival place from the search form.
 * @param {String} flightDate - the specified flight date from the search form.
 */
function showContentPlus2(mainContentPlaceholder, origin, destination, flightDate) {
    let _templateId = "content-plus-2";

    mainContentPlaceholder.innerHTML =
        new TemplateFactory().constructTemplate("searchResultLayout", _templateId);

    showSearchResultContent(origin, destination, flightDate,
                            document.getElementById(_templateId));
}
/**
 * Private function
 * Assign the label name for a search result tab. Both wide & narrow tabs will have their label
 * assigned to in this function.
 * @param {Date} theDate - The desired flight date.
 * @param {String} daysDiff - Number of elapsed date from theDate (-2 to 2).
 */
function assignResultTabLabel(theDate, daysDiff) {
    let _commonElemId = "";

    switch(daysDiff) {
        case "-2": _commonElemId = "result-tab-minus2"; break;
        case "-1": _commonElemId = "result-tab-minus1"; break;
        case "0": _commonElemId = "result-tab-zero"; break;
        case "+1": _commonElemId = "result-tab-plus1"; break;
        case "+2": _commonElemId = "result-tab-plus2"; break;
    }

    document.getElementById(_commonElemId + "-wide").innerHTML = helperModule.ddMyyyyStringConvertor(theDate, " ");
    document.getElementById(_commonElemId + "-narrow").innerHTML = helperModule.ddMyyyyStringConvertor(theDate, " ");
}
/**
 * Private function
 * This function builds result tabs by calling the constructTemplate method from the TemplateFactory class.
 * @param {HtmlElement} resultTabsContainer - The placeholder of all desktop search result tabs
 * @param {HtmlElement} resultTabsContainerMobile - The placeholder of all mobile search result tabs
 * @param {array of HtmlElements} allTabsWide - all desktop search result tabs.
 * @param {array of HtmlElements} allTabsNarrow - all mobile search result tabs.
 */
function generateSearchResultTabs(resultTabsContainer, resultTabsContainerMobile, allTabsWide, allTabsNarrow) {
    resultTabsContainer.innerHTML = new TemplateFactory().constructTemplate("resultTabs");
    resultTabsContainerMobile.innerHTML = new TemplateFactory().constructTemplate("resultTabsMobile");

    allTabsWide.resultTabMinus2Wide = document.getElementById("result-tab-minus2-wide");
    allTabsNarrow.resultTabMinus2Narrow = document.getElementById("result-tab-minus2-narrow");
    allTabsWide.resultTabMinus1Wide = document.getElementById("result-tab-minus1-wide");
    allTabsNarrow.resultTabMinus1Narrow = document.getElementById("result-tab-minus1-narrow");
    allTabsWide.resultTabZeroWide = document.getElementById("result-tab-zero-wide");
    allTabsNarrow.resultTabZeroNarrow = document.getElementById("result-tab-zero-narrow");
    allTabsWide.resultTabPlus1Wide = document.getElementById("result-tab-plus1-wide");
    allTabsNarrow.resultTabPlus1Narrow = document.getElementById("result-tab-plus1-narrow");
    allTabsWide.resultTabPlus2Wide = document.getElementById("result-tab-plus2-wide");
    allTabsNarrow.resultTabPlus2Narrow = document.getElementById("result-tab-plus2-narrow");
}
/**
 * Private function
 * Hide the mobile collapsible nav bar after users press on a tab button in the mobile nav bar.
 */
function collapseMobileNavbar() {
    let _navbarCollapseArray = document.getElementsByClassName("navbar-collapse");
    if (_navbarCollapseArray[0].getAttribute("class").length > 0) {
        _navbarCollapseArray[0].className = "navbar-collapse collapse";
    }
    _navbarCollapseArray[0].setAttribute("aria-expanded", "false");
}
/**
 * Private function
 * Check if a search result tab is active. The corresponding tab in the mobile view
 * will be checked as well. It does so by checking for the presence of the "active"
 * css class in the element.
 * @param {HtmlElement} wideTab - a desktop tab.
 * @param {HtmlElement} narrowTab - the corresponding tab in mobile view.
 * @return {boolean} the result.
 */
function checkIfResultNavTabIsActive(wideTab, narrowTab) {
    let _rawClassNamesWide = wideTab.parentNode.getAttribute('class');
    let _rawClassNamesNarrow = narrowTab.parentNode.getAttribute('class');
    let _verdict = false;

    if (_rawClassNamesWide.length > 0 && _rawClassNamesNarrow.length > 0) {
        let __classNamesWide = _rawClassNamesWide.split(" ");
        let __classNamesNarrow = _rawClassNamesNarrow.split(" ");

        if (__classNamesWide.length > 1 && __classNamesWide[1] === "active" &&
            __classNamesNarrow.length > 1 && __classNamesNarrow[1] === "active") {
              _verdict = true;
        }
    }

    return _verdict;
}
/**
 * Private function
 * Remove the 'active' css class from a nav tab element in order to indicate
 * that this tab is not being selected/active.
 * @param {HtmlElement} node - the target nav tab.
 * @return {string} the value of the css attribute of the element sans the 'active' css class.
 */
function removeResultNavTabActiveClassName(node) {
    let _rawClassNames = "";
    let _classNames = "";

    _rawClassNames = node.parentNode.getAttribute('class');
    _classNames = _rawClassNames.split(" ");

    return _classNames[0];
}
/**
 * Private function
 * Action handler when a user click on a search result nav tab. This function will
 * assign the 'active' class name on the selected tab, and remove the same class name
 * on any other tabs. It will handle both wide & its respective narrow tab simuataneously.
 * @param {String} label - the signature of the tab (ranging from -2 to 2 in string format).
 * @param {array of HtmlElements} allTabsWide - all tabs in desktop view.
 * @param {array of HtmlElements} allTabsNarrow - all tabs in narrow view.
 */
function resultNavTabClicked(label, allTabsWide, allTabsNarrow) {
    let _tgtIdx = 0;
    let _pass = false;
    let _allTabsWideKeys = Object.keys(allTabsWide);
    let _allTabsNarrowKeys = Object.keys(allTabsNarrow);
    switch(label) {
        case "-2": _tgtIdx = 0; _pass = true; break;
        case "-1": _tgtIdx = 1; _pass = true; break;
        case "0":  _tgtIdx = 2; _pass = true; break;
        case "+1": _tgtIdx = 3; _pass = true; break;
        case "+2": _tgtIdx = 4; _pass = true; break;
    }

    if(_pass && _allTabsWideKeys.length == _allTabsNarrowKeys.length) {
        for(let i=0; i<_allTabsWideKeys.length; i++) {
            let __aWideTab = allTabsWide[ _allTabsWideKeys[i] ];
            let __aNarrowTab = allTabsNarrow[ _allTabsNarrowKeys[i] ];
            if(checkIfResultNavTabIsActive(__aWideTab, __aNarrowTab)) {
              // IE compatibility: 8+
              __aWideTab.parentNode.className = removeResultNavTabActiveClassName(__aWideTab);
              __aNarrowTab.parentNode.className = removeResultNavTabActiveClassName(__aNarrowTab);
            }
            if(i == _tgtIdx && !checkIfResultNavTabIsActive(__aWideTab, __aNarrowTab)) {
              // IE compatibility: 8+
              __aWideTab.parentNode.className += ' active';
              __aNarrowTab.parentNode.className += ' active';
            }
        }
    }
}
