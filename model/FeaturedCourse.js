const { default: mongoose } = require("mongoose");

const FeaturedCourse = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    studentNumber: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model("featuredcourse", FeaturedCourse);