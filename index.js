const contacts = require('./contacts.js');

// Example usage:
contacts.listContacts().then(console.log);
contacts.getContactById("2").then(console.log);
contacts.addContact('John Doe', 'john@example.com', '555-555-5555');
contacts.removeContact("2");