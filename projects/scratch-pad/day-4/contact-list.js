// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    var object = {
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast
    };
    return object;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contact = [];

    return {
        // we implemented the length api for you //
        addContact: function(id, nameFirst, nameLast) {
          var object = {
            'id': id,
            'nameFirst': nameFirst,
            'nameLast': nameLast
          };
          contact.push(object.id);
        },
        length: function() {
            return contact.length;
        }, 
        findContact: function(misc) {
          var i;
          misc = misc.split(" ");
          for (i = 0; i < contact.length; i++) {
            if (contact[i].nameFirst == misc[0] && contact[i].nameLast == misc[1]) {
              var found = contact[i];
              return found;
            }
          }
        },
        removeContact: function(found) {
          var j;
          for (j = 0; j < contact.length; j++) {
            if (contact[j] == found) {
              contact.splice(j, 1);
            }
          }
        },
        printAllContactNames: function() {
            var k;
            var names = [];
            var j = 0;
            for (k = 0; k < contact.length; k++) {
              names.push(contact[k]['nameFirst'] + ' ' + contact[k]['nameLast']);
              names.splice(j + 1, 0, "\n");
              j += 2;
            }
            if (names[names.length - 1] == "\n"){
              names.pop();
            }
            names = names.join("");
            return names;
        }
    };
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
