const Workout = require('../models/workoutModel')

//get all data
const getworkoutData = async(req, res)=>{
    try {
        const user_id = req.user._id
        const workoutData = await Workout.find({user_id}).sort({createdAt:-1})
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

//get single data by id
const getSingleWorkoutData = async(req, res)=>{
    try {
        const id = req.params.id;
        const workoutData = await Workout.findById({_id:id}).sort({createdAt:-1})
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


//post workoutdata
const postworkoutData = async(req, res)=>{
    try {
        const {title, reps, load} = req.body
        const user_id = req.user._id
        const workoutData = new Workout({title, reps, load, user_id});
        const data = await workoutData.save();
        res.status(201).json(data)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



//update workoutdata
const updateWorkoutData = async(req, res)=>{
    try {
        const id = req.params.id
        const workoutData = await Workout.findByIdAndUpdate({_id:id}, req.body, {new:true})
        res.status(202).json(workoutData)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



//delete workoutdata
const deleteWorkoutData = async(req, res)=>{
    try {
        const id = req.params.id
        const workoutData = await Workout.findByIdAndDelete({_id:id})
        res.status(204).json(workoutData)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports = {getworkoutData, getSingleWorkoutData, postworkoutData, updateWorkoutData, deleteWorkoutData}