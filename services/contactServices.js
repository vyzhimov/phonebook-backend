const Contact = require("../db/models/contact");

const getAll = async () => {
  const contacts = Contact.find();
  return contacts;
};

const addContact = async (contact) => {
  const newContact = await Contact.create(contact);
  return newContact;
};

module.exports = {
  getAll,
  addContact,
};
