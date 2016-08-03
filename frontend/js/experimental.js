/*******************************
 * Experimental features
 *******************************/

let bookingBtnAnim1 = document.getElementsByClassName("bookingBtnAnim-1");
let bookingBtnAnim2 = document.getElementsByClassName("bookingBtnAnim-2");
let bookingBtnAnim3 = document.getElementsByClassName("bookingBtnAnim-3");
let bookingBtnAnimArray = [ bookingBtnAnim1, bookingBtnAnim2, bookingBtnAnim3 ];

/**
 * Public function
 * Animate the booking button on all flight schedule cards. The animation transition
 * is set to 150 ms.
 *
 * Dev Comment:
 * The logic behind this function is a very expensive [O(n to power of 2)] &
 * running on an endless loop, therefore it's not suitable for a large set of
 * search results data.
 */
export function bookingBtnAnimation() {
  let bookingBtnAnimArrayToggle = [ "#777", "#777", "#777" ];
  let bookingBtnAnimArrayIdx = 0;
  setInterval(function() {
      if (bookingBtnAnimArrayToggle[bookingBtnAnimArrayIdx] == "#777") {
          for (let i=0; i<bookingBtnAnimArray[bookingBtnAnimArrayIdx].length; i++) {
            bookingBtnAnimArray[bookingBtnAnimArrayIdx][i].style.color = "#EEE";
          }
          bookingBtnAnimArrayToggle[bookingBtnAnimArrayIdx] = "#EEE";
      } else {
          for (let i=0; i<bookingBtnAnimArray[bookingBtnAnimArrayIdx].length; i++) {
            bookingBtnAnimArray[bookingBtnAnimArrayIdx][i].style.color = "#777";
          }
          bookingBtnAnimArrayToggle[bookingBtnAnimArrayIdx] = "#777";
      }
      bookingBtnAnimArrayIdx++;
      if (bookingBtnAnimArrayIdx == bookingBtnAnimArray.length) {
          // reset counter
          bookingBtnAnimArrayIdx = 0;
      }
  }, 150);
}
