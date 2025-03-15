import React, { useContext, useEffect } from "react";
import axios from "axios";
import { data } from "../Context/Workoutcontext";
import deleteBtn from "../assests/delete.png";
import editBtn from "../assests/edit.png";
import { useAuthContext } from "../Hooks/useAuthContext";

const Records = () => {
  const { workoutData, getWorkouts, setEditState, setInput } = useContext(data);

  const {user} = useAuthContext();

  //Get records
  useEffect(() => {
    if(user){
      getWorkouts();
    }
  }, [user, getWorkouts]);

  //Delete records
  const handleDelete = async (id) => {
    await axios.delete(`https://wrktbuddy.onrender.com/api/workouts/${id}`, {headers:{
    // await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/workouts/${id}`, {headers:{
      "Authorization" : `Bearer ${user.token}`
    }});
    getWorkouts();
  };

  //Edit records
  const handleEdit = (id) => {
    setEditState(true);
    const selectedData = workoutData.find((item) => item._id === id);
    setInput((prev) => ({
      ...prev,
      title: selectedData.title,
      reps: selectedData.reps,
      load: selectedData.load,
      _id: id,
    }));
  };

  return (
    <div className="font-roboto flex flex-col p-2 gap-4 lg:w-[40%] items-center my-10">
      {workoutData && workoutData.length > 0 ? (
        <h1 className="text-teal-800 mb-8 text-4xl font-bold">WORKOUTS</h1>
      ) : (
        <h1 className="mb-8 text-lg sm:text-3xl font-bold text-red-600 lg:mt-[200px]">
          ADD WORKOUT DETAILS
        </h1>
      )}
      {workoutData &&
        workoutData.map((item) => {
          return (
            <div
              key={item._id}
              className="bg-white h-[100px] sm:h-[150px] rounded px-4 flex justify-between items-center gap-2 w-[100%] sm:w-[70%] lg:w-[100%] "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
              }}
            >
              <div className=" flex  flex-col gap-2 pl-6">
                <div className=" sm:text-2xl font-bold text-cyan-700">
                  {item.title}
                </div>
                <div className="text-xs sm:text-md font-semibold">Reps : {item.reps}</div>
                <div className="text-xs sm:text-md font-semibold">Load : {item.load}</div>
              </div>
              <div className="flex gap-4">
                <img
                  onClick={() => handleEdit(item._id)}
                  src={editBtn}
                  alt="editBtn"
                  className="size-8 cursor-pointer hover:scale-105 ease-in-out"
                />
                <img
                  onClick={() => handleDelete(item._id)}
                  src={deleteBtn}
                  alt="dltBtn"
                  className="size-8 cursor-pointer hover:scale-105 ease-in-out"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
