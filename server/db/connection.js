const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krshna:kkrrsshh@cluster0.tlvv6.mongodb.net/mern-projj?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connection established")
}).catch((err)=>{
    console.log("Not connected to DB, Error : ", err)
})