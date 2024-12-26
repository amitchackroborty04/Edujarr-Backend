const express = require("express");
const router = express.Router();
const CardRouter = require("./FeaturedCourse");

router.use("/featuredcourse", CardRouter);

module.exports = router;