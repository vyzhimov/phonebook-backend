const express = require("express");

const router = express.Router();

const {
  getAllCtrl,
  addContactCtrl,
} = require("../../controllers/contactsControllers");

const contactValidator = require("../../middlewares/validation/contactValidation");

router.get("/", getAllCtrl);

router.post("/", contactValidator, addContactCtrl);

router.delete("/:contactId");

router.put("/:contactId");

module.exports = router;
