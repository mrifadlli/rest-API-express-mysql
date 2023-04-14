const express = require("express");

const usersController = require("../controller/users");

const router = express.Router();

// CREATE - POST
router.post("/", usersController.createAllUsers);

// READ - GET
router.get("/", usersController.getAllUsers);

// UPDATE - PATCH
router.patch("/:idUsers", usersController.updateUsers);

// DELETE - DELETE
router.delete("/:idUsers", usersController.deleteUser)

module.exports = router;
