const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();

    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createAllUsers = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    res.status(400).json({
      message: "Masukan data yang valid!",
      data: null,
    });
  }

  try {
    await usersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new users success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;

  try {
    await usersModel.updateUser(body, idUsers);
    res.json({
      message: "UPDATE user success",
      body: {
        id: idUsers,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUsers } = req.params;

  try {
    await usersModel.deleteUser(idUsers);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createAllUsers,
  updateUsers,
  deleteUser,
};
