const express = require("express");
const cardController = require("../../../controlar/cardController");
const router = express.Router();
const cloudinary = require("cloudinary"); 
const multer = require("multer");
const path = require("path");

cloudinary.config({ 
    cloud_name: 'dimsoyj8h', 
    api_key: '186846631676266', 
    api_secret: 'b23hqgN-Ua8yDTniMcDKaJGJs_g' 
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

router.post("/addfeaturedcourse", upload.single("image"), cardController);

module.exports = router;
