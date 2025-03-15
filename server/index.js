require('dotenv').config();

const express = require('express');
require('./db/connection')
const cors = require('cors')

const app = express();

const port = process.env.PORT || 3000;

///middleware
app.use(express.json())
app.use(cors())

//Importing Routes
const workoutRoutes = require('./routes/workoutRoute')
const userRoutes = require('./routes/userRoute')

//Routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)


app.listen(port, ()=>{
    console.log(`Server running on the port : ${port}`);
})