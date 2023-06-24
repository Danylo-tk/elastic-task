require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});