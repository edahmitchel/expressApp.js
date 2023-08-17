const express = require("express");
const { sendEmail } = require("./utils/sendmail");
const cor = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res.status(401).json("please input all fields");
  }
  sendEmail(email, "login successful", "interview sessino");
};
app.post("/api/login", login);

app.listen(PORT, () => {
  console.log("app started on port" + PORT);
});
