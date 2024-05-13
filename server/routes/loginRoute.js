const express = require('express')
const app = express()
const router = express.Router();



router.get("/loginRoute", (req, res) => {
  res.send("hello world");  
});

router.post("/loginRoute",async (req, res) => {
  const data = await req.body();
  await User.create(data);
});


module.exports = router;
