/*******************************
 * Reusable Helper functions
 *******************************/

 /**
  * Public function
  * Determine the date days after/before the pivotDate.
  * @param {Date} pivotObj - the Date object that serves as the base date.
  * @param {int} numOfDays - Number of elapsed days.
  * @return {Date} a new Date object.
  */
export function calculateNewDateBasedOnPivotDate(pivotDate, numOfDays) {
    // Hint:
    // JS Date objects possess a auto correct feature that can automagically correct
    // wrong dates (e.g June 31st (30 days) will automatically be corrected into July 1st).
    // That means if we set any date components individually, we may run in a situation
    // of which the autocorrect feature will get in our way. Always instantiate a
    // new Date object whenever we construct a Date object.
    let _calcDate = new Date();
    pivotDate = new Date(pivotDate);

    _calcDate = new Date(pivotDate);
    if(Math.sign(numOfDays) != 0) {
        _calcDate.setDate(_calcDate.getDate() + numOfDays);
        return new Date(_calcDate);
    }

    return _calcDate;
}

/**
 * Public function
 * Convert a Date object into a "dd [Month Name] yyyy" format in string if the value of
 * the separator parameter equals to " ".
 * @param {Date} dateObj - the Date object to be converted.
 * @param {string} separator - A string that serves as the date separator.
 * @return {string} a string in "dd [Month Name] yyyy" format assuming " " as the
 *         separator.
 */
export function ddMyyyyStringConvertor(dateObj, separator) {
    let _dd = dateObj.getDate();
    let _mm = dateObj.getMonth();
    let _M = "Jan";
    let _yyyy = dateObj.getFullYear();

    switch(_mm) {
        case 0: _M = "Jan"; break; case 1: _M = "Feb"; break;
        case 2: _M = "Mar"; break; case 3: _M = "Apr"; break;
        case 4: _M = "May"; break; case 5: _M = "Jun"; break;
        case 6: _M = "Jul"; break; case 7: _M = "Aug"; break;
        case 8: _M = "Sept"; break; case 9: _M = "Oct"; break;
        case 10: _M = "Nov"; break; case 11: _M = "Dec"; break;
    }

    return _dd + separator.toString() + _M + separator.toString() + _yyyy;
}

/**
 * Public function
 * Convert a Date object into a "yyyy-mm-dd" format in string if the value of
 * the separator parameter equals to "-".
 * @param {Date} dateObj - the Date object to be converted.
 * @param {string} separator - A string that serves as the date separator.
 * @return {string} a string in "yyyy-mm-dd" format assuming "-" as the separator.
 */
export function yyyymmddStringConvertor(dateObj, separator) {
    let _yyyy = dateObj.getFullYear();
    let _mm = (parseInt(dateObj.getMonth()) + 1).toString();
    let _dd = dateObj.getDate().toString();

    let _finMM = _mm.length == 1 ? "0" + _mm : _mm;
    let _finDD = _dd.length == 1 ? "0" + _dd : _dd;

    return _yyyy + separator.toString() + _finMM + separator.toString() + _finDD;
}

/**
 * Public function
 * Cross browser helper to addEventListener.
 * ref : https://gist.github.com/eduardocereto/955642
 * @param {HtmlElement} obj - The element to attach event to.
 * @param {string} eType - The event that will trigger the binded function.
 * @param {function(event)} callback - The callback function of the element.
 * @return {boolean} true if it was successfully binded.
 */
export function crossBrowserAddEventListener(obj, eType, callback) {
    let _output = false;
    if(obj.addEventListener) {
        // W3C approach
        obj.addEventListener(eType, callback, false);
        _output = true;
    } else if(obj.attachEvent) {
        // IE approach
        _output = obj.attachEvent('on' + eType, callback);
    } else {
        // Other browsers approach
        eType = 'on' + eType;
        if(typeof obj[eType] === 'function') {
            // Obj already has a function, let's wrap it with our own function
            // inside another function
            callback = ((f1,f2)=>{
                return ()=> {
                    f1.apply(this.arguments);
                    f2.apply(this.arguments);
                }
            }) (obj[evt], callback)
        }
        obj[eType] = callback;
        _output = true;
    }
    return _output;
}
