const { getAll, addContact } = require("../services/contactServices");

const getAllCtrl = async (req, res) => {
  const result = await getAll();
  res.json(result);
};

const addContactCtrl = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

module.exports = {
  getAllCtrl,
  addContactCtrl,
};
