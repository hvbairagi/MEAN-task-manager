// This file will handle connecttion logic to MongoDB

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb://localhost:27017/taskManager",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully :)");
  })
  .catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
  });

// to prevent deprecation warning
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
