const express = require("express");
const router = express.Router();
const apirouters = require("./api");

router.use("/api", apirouters);
module.exports = router;