const EC = protractor.ExpectedConditions;
const BcappConfig = require("../../bcapp-conf.js");

describe('PLACE ORDER TEST -', function() {
    it('ORDER PLACED SUCCESSFULLY', function() {
      console.log("Initializing tests.");
      browser.ignoreSynchronization = true;
      browser.waitForAngular(false);
      browser.get(BcappConfig.storeUrl);
      
      // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
       element(by.xpath('//li[@class="product"]//a[2]')).click();
       browser.wait(EC.urlContains('cart'), 10000);

       element(by.xpath('//a[@title="Click here to proceed to checkout"]')).click();
       browser.wait(EC.urlContains('checkout'), 10000);
  
      browser.wait(EC.elementToBeClickable($('#email')), 5000);
      element(by.id('email')).sendKeys('guest@guest.com');

      browser.wait(EC.elementToBeClickable($('#checkout-customer-continue')), 5000);
      element(by.id('checkout-customer-continue')).click();

      browser.wait(EC.elementToBeClickable($('#firstNameInput')), 5000);
      element(by.id('firstNameInput')).sendKeys('Isaias');

      browser.wait(EC.elementToBeClickable($('#lastNameInput')), 5000);
      element(by.id('lastNameInput')).sendKeys('Pina');

      browser.wait(EC.elementToBeClickable($('#addressLine1Input')), 5000);
      element(by.id('addressLine1Input')).sendKeys('Street 10234');

      browser.wait(EC.elementToBeClickable($('#cityInput')), 5000);
      element(by.id('cityInput')).sendKeys('Austin');

      browser.wait(EC.elementToBeClickable($('#countryCodeInput')), 5000);
      element(by.id('countryCodeInput')).click();
      element(by.xpath('//select[@id="countryCodeInput"]//option[contains(text(),"United States")]')).click();

      browser.wait(EC.elementToBeClickable($('#provinceCodeInput')), 5000);
      element(by.id('provinceCodeInput')).click();
      element(by.xpath('//select[@id="provinceCodeInput"]//option[contains(text(),"Texas")]')).click();

      browser.wait(EC.elementToBeClickable($('#postCodeInput')), 5000);
      element(by.id('postCodeInput')).sendKeys('78757');

      browser.wait(EC.elementToBeClickable($('.shippingOptionLabel')), 5000);
      //element(by.class('shippingOptionLabel')).sendKeys('78757')

      browser.wait(EC.elementToBeClickable(element(by.buttonText('Continue'))), 5000);
      element(by.buttonText('Continue')).click();

      browser.wait(EC.elementToBeClickable(element(by.id('ccNumber'))), 5000);
      element(by.id('ccNumber')).click();
      element(by.id('ccNumber')).sendKeys("4111111111111111");

      browser.wait(EC.elementToBeClickable($('#ccName')), 5000);
      element(by.id('ccName')).click();
      element(by.id('ccName')).sendKeys('test test');

      browser.wait(EC.elementToBeClickable($('#ccExpiry')), 5000);
      element(by.id('ccExpiry')).click();
      element(by.id('ccExpiry')).sendKeys('1120');

      browser.wait(EC.elementToBeClickable($('#ccCvv')), 5000);
      element(by.id('ccCvv')).click();
      element(by.id('ccCvv')).sendKeys('123');

      browser.wait(EC.elementToBeClickable(element(by.buttonText('Place Order'))), 5000);
      element(by.buttonText('Place Order')).click();

      browser.wait(EC.urlContains('order-confirmation'), 10000);
    });
  });