# js-booking-hub

A fully responsive, single page web application that demonstrates my knowledge in Front End Development utilising plain Javascript (ES6 with Babel Transpiler) without relying on any Javascript based frameworks such as Angular.JS or React JS. The theme of this project is a simple online plane ticket booking hub ala Webjet, and SkyScanner. The web app itself is cross browser friendly as it has been tested on both Google Chrome, and Mozilla Firefox.

Highlights:
- Its single page application & Fully responsive.
- Its a full stack web app. I used Node.JS, and Express.JS to handle the backend side.
- Its 90-95% EcmaScript 6 code. I minimised my reliance on JQuery in this work because I believe that an expertise in plain Javascript is valued more than JQuery. Besides JS Libraries / Frameworks come and go, but the ol plain JavaScript just never fade away since 90s. I only used JQuery to utilise AJAX call, and datepicker widget in my work.

Some point of interests with regards to the structure of the code :
+ Backend folder => "locomote_test/routes/"

+ Frontend folder => "locomote_test/frontend/" 
 - I used SASS for CSS styling, and Babel Transpiler to compile ES6 code into ES5. 

+ HTML index file => "locomote_test/views/index.html

+ Unit Test folder => "locomote_test/unit_test/"

+ Sample API Data folder => "locomote_test/sample_data/" 
 - Normally these data should be stored in a Database system (like MongoDB), but for this test, I simply stored the data in JS files.

+ The compiled Frontend JS Files => "locomote_test/public/dist/" 
 - I used a mix of Gulp and Webpack build tools, to bundle, and compress the frontend files. Also the ES6, and SASS are compiled through Webpack as well. 

Applied technologies: 
- HTML5.
- CSS3 with SASS, and Twitter Bootstrap 3.
- Javascript (ES6 with Babel Transpiler).
- Jquery (minor exposure - for performing AJAX request, & utilising a single feature from Jquery UI library). 
- A mix of Gulp, and Webpack build tools.
- Node.JS, and Express.JS (to handle the backend part), RESTful Web Service, and JSON.
- MVC (Model View Controller) architecture.
- Heroku PASS Cloud Hosting Service. 
- Google Developer Tool / Firebug.
- Unit Testing.
