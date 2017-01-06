# Angular Testing

First install all dependencies with 
npm install

# To run local server:
npm run httpserver

# To run unit testing:
npm run unittest

# To run end2end testing:
first run local server then,
npm run e2etest

If e2e does not work, check chromedriver version via node_modules/protractor/node_modules/webdriver-manager/selenium/
then, in protractor.chromeOnly.conf.js, use that chromedriver.