/**
 * Dev Comment :
 * 1 - Implementing the sorting feature.
 * One feature that's common in online flight ticket booking system is
 * the ability to sort flight search results - usually based on the following
 * criteria: airlines, ticket price (lowest to highest), direct / 1 stop flight.
 * Due to time constraint, I've decided not to implement such a feature in this
 * test. However, given more time, I will implement the feature with the following
 * approach:
 * UI - the sorting control panel will be available in the footer section, together with
 *      already implemented filtering option.
 * FrontEnd - Since the requirement states that all business logic must reside in frontend,
 *           then in this javascript module, I would create a function to do a sorting
 *           operation. The function will utilise one of already well-known sorting algorithm
 *           such as quicksort algorithm. However, I may need to perform a further analysis
 *           on the sample data before deciding which sorting algorithm would be the best
 *           in this application.
 *           The function will receive an array containing the retrieved data from
 *           Ajax GET request from the main.js, and it will return the sorted array.
 * Backend - Nothing change. Besides, as a single thread - non blocking I/O server
 *           tech, Node.JS is not suitable for CPU intensive operation such as sorting.
 *           Therefore it makes sense to leave the data sorting task to the clients' browser
 *           (front end).
 *
 * 2 - Pagination
 * Another feature that's very common for showing a large number of data in
 * one single page is by breaking down the list into several pages.
 * A most simple approach would be to break down the retrieved flight search data
 * into several groups. Each group will be assigned to a Template generated from
 * the TemplateFactory class. The 1st group will have its display css attribute set to "block",
 * while the rest of the groups will have their display attribute set to "none".
 * Clicking a page number link is a matter of toggling the css display attribute.
 *
 * A more robust approach would be assigning each group of the retrieved data into a
 * javascript variable, probably an associative array would be the most suitable type of container.
 * Clicking a page number link would be a matter of assigning the generated template with
 * a different element in the array. With this approach, tech savvy users would not be able to use
 * Browser's developer tool to expose the hidden search result cards.
 *
 * For this web app, I prefer to follow the design language of the Facebook desktop site,
 * and Pinterest Site. That means instead of breaking down the presentation of contents into
 * several pages, I resorted to an endless stream of contents being shown in one single page.
 * End users will have to scroll down as they browsing through the flight search results
 * with each schedule is represented as a "card".
 * A possible improvement to make this approach to be more data friendly (especially for mobile users)
 * would be to only grab several rows of flight schedules from the database as the initial set of
 * retrieved data, and set anchors that serve as checkpoints in the UI. As users scroll down
 * the page, the bottom part of viewport will hit the anchor which sends a signal to a Javascript code
 * to start fetching the next group of data (with AJAX of course), and then append the results list in
 * the UI. The best example to visualise this approach is the "Explore" feature of the Instagram app.
 * I may need to rely on JQuery for this data-friendly technique.
 */

 /**
  * Public function
  * Handle each filter button clicked action to filter the flight schedule cards being shown
  * in the search result section.
  * @param {string} mode - Accepts 3 possible values: "all", "direct", "1stop".
  */
export function filterBtnClickedAction(mode) {
    let _order = ["block", "block"];
    let _allOneStopCards = document.getElementsByClassName("oneStopCard");
    let _allDirectCards = document.getElementsByClassName("directCard");

    switch(mode) {
      case "all": _order = ["block", "block"]; break;
      case "direct": _order = ["block", "none"]; break;
      case "1stop": _order = ["none", "block"]; break;
    }

    for (let i=0; i<_allDirectCards.length; i++) {
        _allDirectCards[i].style.display = _order[0];
    }
    for (let i=0; i<_allOneStopCards.length; i++) {
        _allOneStopCards[i].style.display = _order[1];
    }
}
