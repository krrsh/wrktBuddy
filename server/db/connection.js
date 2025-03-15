const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krshna:pass123@cluster0.ath0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("Connection established")
}).catch((err)=>{
    console.log("Not connected to DB, Error : ", err)
})

