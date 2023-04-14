const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM user";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO user (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (body, idUsers) => {
  const SQLQuery = ` UPDATE user 
                     SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id='${idUsers}' `;

  return dbPool.execute(SQLQuery);
};

const deleteUser = (idUsers) => {
  const SQLQuery = `DELETE FROM user WHERE id=${idUsers}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
