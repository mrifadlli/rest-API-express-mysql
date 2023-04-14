require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");

const app = express();

// basic routing.
// app.method(path, handler);
// app.get("/", (req, res) => {
//   res.send("Hello Rico");
// });

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
