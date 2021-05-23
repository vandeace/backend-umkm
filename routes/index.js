const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");
const {
  update: updateDataUser,
  show: getUser,
} = require("../controllers/user");
const {
  create: addData,
  update: updateData,
  destroy: deleteData,
  show: getData,
} = require("../controllers/koperasi");

//========MIDDLEWARE=======================
const { protected } = require("../middlewares/auth");

//route user
router.post("/login", login);
router.post("/register", register);
router.post("/update", protected, updateDataUser);
router.get("/user", protected, getUser);

//route koperasi
router.get("/koperasi", protected, getData);
router.post("/koperasi", protected, addData);
router.post("/koperasi/:id", protected, updateData);
router.delete("/koperasi/:id", protected, deleteData);

module.exports = router;
