'use strict';

var Contacts = require('./lib/contacts');
var assert = require('assert');

marionette('Contacts > Search', function() {
  var client = marionette.client(Contacts.config);
  var subject;
  var selectors;

  setup(function() {
    subject = new Contacts(client);
    subject.launch();

    selectors = Contacts.Selectors;
  });

  suite('Search Mode', function() {
    test.skip('Can enter and exit search mode', function() {

      subject.addContact();

      client.helper.waitForElement(selectors.searchLabel)
        .click();

      client.helper.waitForElement(selectors.searchInput)
        .sendKeys('testme');

      client.helper.waitForElement(selectors.searchCancel)
        .click();

      var listView = client.helper.waitForElement(selectors.list);
      assert.ok(listView.displayed(), 'List view is shown.');
    });

    test.skip('Search text is displayed correctly', function() {
      var details = details || {
        givenName: 'A%%&'
      };

      subject.addContact(details);
      client.helper.waitForElement(selectors.searchLabel).click();

      client.helper.waitForElement(selectors.searchInput).sendKeys('a');
      client.helper.waitForElement(selectors.searchResultFirst).text(
        function(error, textContent) {
          assert.equal('A%%&', textContent);
      });
    });
  });

});
