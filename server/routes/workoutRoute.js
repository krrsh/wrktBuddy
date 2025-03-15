const express = require('express')

const router = express.Router();

//importing getworkoutData from controllers
const {getworkoutData, getSingleWorkoutData, postworkoutData, updateWorkoutData, deleteWorkoutData} = require('../controllers/workoutControllers');

//importing middleware for auth
const authUser = require('../middleware/userMiddleware');

//auth token mmiddleware
router.use(authUser)

//get records
router.get('/', getworkoutData)
router.get('/:id', getSingleWorkoutData)
router.post('/', postworkoutData)
router.patch('/:id', updateWorkoutData)
router.delete('/:id', deleteWorkoutData)


module.exports = router;