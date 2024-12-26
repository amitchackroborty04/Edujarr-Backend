const FeaturedCourse = require("../model/FeaturedCourse");
const cloudinary = require("cloudinary");
const fs = require("fs");
async function cardController(req, res) {
  try {
    let { courseName, studentNumber, price } = req.body;
     
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "featuredcourse",
    });
    
    fs.unlink(req.file.path, () => {
      console.log("file deleted");
    });

    let newcourse = new FeaturedCourse({
        courseName,
        studentNumber,
        image:result.secure_url,
        price,
      });
      await newcourse.save();
      res.send(newcourse);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
module.exports = cardController;
