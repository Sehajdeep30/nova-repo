const mongoose = require('mongoose');
const mongoURI="mongodb+srv://dhruvpandey0597:dhruvpandey56@cluster0.m50ucvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectToMongo=()=>{mongoose.connect(mongoURI)};
module.exports=connectToMongo;