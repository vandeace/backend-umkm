const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");
const {
  create: addData,
  update: updateData,
} = require("../controllers/koperasi");

//========MIDDLEWARE=======================
const { protected } = require("../middlewares/auth");

router.post("/login", login);
router.post("/register", register);

router.post("/koperasi", protected, addData);
router.post("/koperasi/:id", protected, updateData);

module.exports = router;
