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
    return {id: id, nameFirst: nameFirst, nameLast: nameLast};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
 
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // splits the full name and makes them all lowercase to avoid any case confusion
            let names = fullName.toLowerCase().split(' ');
            for (let key in contacts) {
                // compares lowercase first and last names to the split fullName
                if (contacts[key].nameFirst.toLowerCase() === names[0] && contacts[key].nameLast.toLowerCase() === names[1]) {
                    return contacts[key];
                }
            }
            return undefined;
        },
        removeContact: function(contact) {
            // pick the index from where to start splicing the array
            for (let i = 0; i < contacts.length; i++) {
                if (contact === contacts[i]) {
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            let result = "";
            for (let key in contacts) {
                result += contacts[key].nameFirst + " " + contacts[key].nameLast + "\n";
            }
            return result.substr(0, result.length - 1);
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
