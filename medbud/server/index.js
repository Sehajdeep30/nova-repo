const connectToMongo=require('./db');
const express = require("express");
var cors =require('cors');
connectToMongo();
const app = express();
const port=5000
const loginRoute = require("./routes/loginRoute");

app.use(cors())
app.use(express.json())
//Routes
app.use("/auth", loginRoute);

app.listen(port,()=>{
  console.log(`Medbud server listeninng at https://localhost:${port}`)
})
