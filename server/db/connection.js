const mongoose = require("mongoose");
require("dotenv").config();  // Load environment variables

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully!"))
.catch((err) => console.log("❌ MongoDB Connection Error:", err));










// const mongoose = require('mongoose');

// mongoose.connect('').then(()=>{
//     console.log("Connection established")
// }).catch((err)=>{
//     console.log("Not connected to DB, Error : ", err)
// })
