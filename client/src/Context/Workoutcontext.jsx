import React, { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";


export const data = createContext();

const Workoutcontext = ({children}) => {

  const {user} = useAuthContext()

  //Get records state
  const [workoutData, setWorkoutData] = useState(null);

  const getWorkouts = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/workouts`, {headers:{
        "Authorization" : `Bearer ${user.token}`
      }})
      .then((response) => {
        setWorkoutData(response.data);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  //Create records Input state
    const [input, setInput] = useState({
      title:"",
      reps:"",
      load:""
    })


  //edit State
    const [editState, setEditState] = useState(false)

  return (
  <data.Provider value={{workoutData, setWorkoutData, getWorkouts, setEditState, editState, input, setInput}}>
    {children}
  </data.Provider>
  )
};

export default Workoutcontext;
