const { default: mongoose } = require("mongoose");


function dbconfig() {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbconfig;
