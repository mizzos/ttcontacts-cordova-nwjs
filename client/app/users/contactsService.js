(function () {
    "use strict";

    function ContactsService($cordovaContacts) {
        this.createContact = function(person) {
            var cordovaContact = {};
            cordovaContact.displayName = person.firstName + ' ' + person.firstName + ' (TT-C)';
            cordovaContact.name = {};
            cordovaContact.name.givenName = person.firstName;
            cordovaContact.name.familyName = person.lastName;
            cordovaContact.phoneNumbers = [];
            cordovaContact.phoneNumbers[0] = {type: 'work', value: person.phone, preference: true };
            cordovaContact.emails = [];
            cordovaContact.emails[0] = {type: 'work', value: person.email, preference: true };
            cordovaContact.note = 'From TT Contacts!';

            $cordovaContacts.save(cordovaContact).then(function(result) {
                $log('### Contact successfully saved.');
            }, function(err) {
                $log('### Error saving Contact: ' + err);
            });
        }
    }

    angular.module('users').service('contactsService', ContactsService);
})();
