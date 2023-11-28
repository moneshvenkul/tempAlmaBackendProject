const express = require('express');
const validateToken=require("../middleware/validateTokenHandler")
const router = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController")

router.use(validateToken);
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;