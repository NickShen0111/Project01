const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
