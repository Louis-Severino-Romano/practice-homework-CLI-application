/*
 * Uncomment and write down the value
 * const contactsPath = ;
 */
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');


// TODO: document each function
async function listContacts() {
    // ...your code
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Failed to list contacts:', error.message);
    }
  }
  
  async function getContactById(contactId) {
    // ...your code
    try {
        const contacts = await listContacts();
        return contacts.find(contact => contact.id === contactId) || null;
    } catch (error) {
        console.error('Failed to get contact:', error.message);
    }
  }
  
  async function removeContact(contactId) {
    // ...your code
    try {
        let contacts = await listContacts();
        contacts = contacts.filter(contact => contact.id !== contactId);

        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        console.log(`Contact with ID ${contactId} has been removed.`);
    } catch (error) {
        console.error('Failed to remove contact:', error.message);
    }
  }
  
  async function addContact(name, email, phone) {
    // ...your code
    
    try {
        const contacts = await listContacts();
        const newContact = {
            id: (contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1),
            name,
            email,
            phone
        };

        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
        console.log(`Contact ${name} has been added.`);
    } catch (error) {
        console.error('Failed to add contact:', error.message);
    }
   
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};