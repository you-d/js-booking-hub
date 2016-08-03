import TemplateFactory from './templateFactory';

/**
 * Public function
 * This function performs an AJAX JQuery method to populate a <select> HTML
 * tag with <options> .
 * @param {string} endpointURL - The URL of the RESTful API endpoint.
 * @param {array of HTML elements} dropdownFields - the innerHTML property of each
 *        element in the array will be set to a populated <option> html element.
 */
export function populateFromAndToDropdownField(endpointURL, dropdownFields) {
    jQuery.ajax({
        url: endpointURL, dataType: 'json', cache: false,
        success: function(data) {
            for (let i=0; i<dropdownFields.length; i++) {
                dropdownFields[i].innerHTML = new TemplateFactory().constructTemplate("airportDropdown", "", data);
            }
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(endpointURL, status, err.toString());
        }.bind(this),
    });
}

/**
 * Public function
 * This function utilises JQuery UI datepicker to construct a datepicker widget.
 * The date format is set to "yyyy-mm-dd", and users will not be able to select
 * a date before today's date.
 * This function must be called inside the JQuery document ready scope.
 * @param {string} elementId - The URL of the RESTful API endpoint.
 */
export function createDatePicker(elementId) {
    jQuery("#" + elementId).datepicker({
        dateFormat: 'yy-mm-dd', minDate: new Date(), firstDay: 1,
    });
}

/**
 * Public function
 * Perform input validation of the search form upon form submit.
 * @param {array of HTML elements} searchFormElems - all input fields in the form
 *
 * Dev Comment :
 * At the moment, there's no visual effect to indicate that one or
 * more input fields are empty, making the form submission to be
 * invalid. I personally like it this way as, its a very simple
 * form with only 3 input fields. IMHO, it is a common sense for
 * end users to figure out the reason behind invalid form submission.
 * Otherwise, I could set the colour of input field's bottom border
 * to a different colour (bright red) to highlight the empty field.
 * (I used this approach in my MEAN stack portfolio in the login/registration page
 * of the portfolio site).
 *
 * Dev Comment #2 :
 * Due to time constraint, both 'from' & 'to' dropdown menu in the seach form doesn't offer
 * search capability, which is very common in online ticket booking system.
 * I could easily implement the autocomplete feature on both dropdown mnenu by relying on
 * JQuery UI autocomplete feature. The process to implement the feature in a select element
 * is a bit more involved, but the sample code (in ES5 syntax) is available in the JQuery site.
 * http://www.jqueryui.com/autocomplete/#combobox
 */
export function validateSearchFormInputs(searchFormElems) {
    let _doAction = false;


    if (searchFormElems.inputFrom.value != "" ||
        searchFormElems.inputTo.value != "" ||
        searchFormElems.inputDate.value != "") {
          _doAction = true;
    }

    return _doAction;
}

 /**
  * Public function
  * This function transfer inputs from the desktop/wide view mode of the search form
  * into the mobile/narrow view of the search form, vice versa - depending on the
  * specified param. This function is a limited version of the onChange event listener.
  * @param {array of HTML elements} wideElems - All input fields in the desktop/wide view search form.
  * @param {array of HTML elements} narrowElems - All input fields in the mobile/narrow view search form.
  * @param {string} direction - accepts 2 possible values : either "wide" or "narrow".
  *
  * Dev Comment:
  * Alternatively, I could use the onChange event handler instead to synchronise
  * the form inputs in between both forms. However since its very unlikely for
  * end users to play with their browsers viewport when performing online
  * bookings, I see no reason to implement this alternative approach.
  */
export function transferFormInputs(wideElems, narrowElems, to) {
    switch(to) {
        case "wide":
          wideElems.inputTo.value = narrowElems.inputTo.value;
          wideElems.inputFrom.value = narrowElems.inputFrom.value;
          wideElems.inputDate.value = narrowElems.inputDate.value;
          break;
        case "narrow":
          narrowElems.inputTo.value = wideElems.inputTo.value;
          narrowElems.inputFrom.value = wideElems.inputFrom.value;
          narrowElems.inputDate.value = wideElems.inputDate.value;
          break;
    }
}

/**
 * Public function
 * Animate all carets beside every dropdown menu. The transition interval is set
 * to 150ms.
 * @param {array of HTML elements} carets - All caret html elements on the document.
 */
export function animateCarets(carets) {
    // animate the caret icon for both dropdown fields
    let _caretAnimPosArray = [ '15px', '20px', '15px' ];
    let _caretAnimLoopIdx = 0;
    setInterval(function() {
        for(let i=0; i<carets.length; i++) {
            carets[i].style.margin = _caretAnimPosArray[_caretAnimLoopIdx] + " 0 0 0";
        }
        _caretAnimLoopIdx++;
        if (_caretAnimLoopIdx == _caretAnimPosArray.length) { _caretAnimLoopIdx = 0; }
    }, 150);
}
