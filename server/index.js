const express = require("express");
const app = express();
const loginRoute = require("./routes/loginRoute");
const db = require("./models");

//Routes
app.use("/", loginRoute);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("we go");
  });
});
