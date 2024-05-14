const express = require('express')
const router = express.Router();
const { User, sequelize } = require("../models");


router.get("/loginRoute", (req, res) =>  {
  res.send("hello world");
});

router.post("/loginRoute",async (req, res) => {
  const data = req.body;
  await User.create(data);
  res.json(data);
});


module.exports = router;
