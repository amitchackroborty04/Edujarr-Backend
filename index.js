const express = require("express");
const app = express();
require("dotenv").config();
const routers = require("./routers");
const dbconfig = require("./conflig/dbconfig");
dbconfig();
app.use(express.json());
app.use(routers);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
