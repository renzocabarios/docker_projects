const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.json({ message: " Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app lsitning on port ${port}`);
});
