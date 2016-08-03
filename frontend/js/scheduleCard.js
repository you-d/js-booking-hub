/*******************************
 * Flight Schedule Card functions
 *******************************/

import TemplateFactory from './templateFactory';

/**
 * Public function
 * This function instantiates an object of type TemplateFactory in order to
 * generate the markup template. The passed JSON argument will have to pass
 * a series of test in order to validate the structure of the data.
 * This function accepts 2 type of flight schedule: direct, and 1-stop.
 * @param {JSON} aRecord - A retrieved flight schedule in JSON format.
 * @return {String} a markup string that will automatically be translated as
 *                  a markup code by the browser.
 * Dev Comment :
 * This function will only check the completeness of the data structure. It will
 * not perform a thorough & exhaustive validation on every single value obtained from the data.
 * I believe that it should be the responsibility of API developers to ensure
 * the correctness of the supplied data.
 * However, in the scenario of which the front end code must perform an complete and
 * thorough validation measures, then I could simply utilise 3rd party library from NPM
 * such as Chris O'Hara's Validator package. (Check out the package.json for more details
 * about this library). 
 */
export function generateScheduleCard(aRecord) {
    // check the structure of the data
    // 0. key
    let test0 = typeof aRecord.key != "undefined";
    // 1. airline
    let test1 = typeof aRecord.airline != "undefined";
    let test1a = typeof aRecord.airline.code != "undefined";
    let test1b = typeof aRecord.airline.name != "undefined";
    // 2. flightNum
    let test2 = typeof aRecord.flightNum != "undefined";
    // 3. start
    let test3 = typeof aRecord.start;
    let test3a = typeof aRecord.start.dateTime != "undefined";
    let test3b = typeof aRecord.start.airportCode != "undefined";
    let test3c = typeof aRecord.start.airportName != "undefined";
    let test3d = typeof aRecord.start.cityCode != "undefined";
    let test3e = typeof aRecord.start.cityName != "undefined";
    let test3f = typeof aRecord.start.countryCode != "undefined";
    let test3g = typeof aRecord.start.countryName != "undefined";
    // 4. finish
    let test4 = typeof aRecord.finish != "undefined";
    let test4a = typeof aRecord.finish.dateTime != "undefined";
    let test4b = typeof aRecord.finish.airportCode != "undefined";
    let test4c = typeof aRecord.finish.airportName != "undefined";
    let test4d = typeof aRecord.finish.cityCode != "undefined";
    let test4e = typeof aRecord.finish.cityName != "undefined";
    let test4f = typeof aRecord.finish.countryCode != "undefined";
    let test4g = typeof aRecord.finish.countryName != "undefined";
    // 5. plane
    let test5 = typeof aRecord.plane != "undefined";
    let test5a = typeof aRecord.plane.shortName != "undefined";
    // 6. distance
    let test6 = typeof aRecord.distance != "undefined";
    // 7. durationMin
    let test7 = typeof aRecord.durationMin != "undefined";
    // 8. price
    let test8 = typeof aRecord.price != "undefined";

    // 9. is it a 1-stop schedule?
    let test9 = true;
    if (typeof aRecord.stop1 != "undefined") {
        if (typeof aRecord.stop1.dateTime == "undefined" ||
            typeof aRecord.stop1.durationMin == "undefined" ||
            typeof aRecord.stop1.airportCode == "undefined" ||
            typeof aRecord.stop1.airportName == "undefined" ||
            typeof aRecord.stop1.cityCode == "undefined" ||
            typeof aRecord.stop1.cityName == "undefined" ||
            typeof aRecord.stop1.countryCode == "undefined" ||
            typeof aRecord.stop1.countryName == "undefined") {
                test9 = false;
         }
    } else { test9 = false; }

    if (test1 && test1a && test1b && test2 && test3 && test3a && test3b &&
        test3c && test3d && test3e && test3f && test3g && test4 && test4a &&
        test4b && test4c && test4d && test4e && test4f && test4g && test5 &&
        test5a && test6 && test7 && test8 && test0) {
            // pass all of the test cases
            if (!test9) {
                return new TemplateFactory().constructTemplate("flightScheduleDirect",
                                                               "",
                                                               aRecord);
            } else {
                return new TemplateFactory().constructTemplate("flightScheduleOneStop",
                                                               "",
                                                               aRecord);
            }
    }
    return (
      '<div>ERROR</div>'
    );
}

/**
 * Public function
 * This function instantiates an object of type TemplateFactory in order to
 * generate the markup template. If the search query from the Search form generates
 * an empty JSON string, then this function will be called.
 * @return {String} a markup string that will automatically be translated as
 *                  a markup code by the browser.
 */
export function generateScheduleNotAvailTemplate() {
    return new TemplateFactory().constructTemplate("scheduleNotAvailable");
}
