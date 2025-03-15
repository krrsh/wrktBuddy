import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "../Context/Workoutcontext";
import { useAuthContext } from "../Hooks/useAuthContext";

const Form = () => {
  const {user} = useAuthContext();
  const {
    workoutData,
    getWorkouts,
    editState,
    setEditState,
    input,
    setInput,
    setWorkoutData,
  } = useContext(data);

  //create record
  const handleAdd = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/workouts",
      input , {headers:{
        "Authorization" : `Bearer ${user.token}`
      }}
    );
    setWorkoutData([...workoutData, response.data]);
    setInput({
      title: "",
      reps: "",
      load: "",
    });
    getWorkouts();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //edit record
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/api/workouts/${input._id}`, input, {headers:{
      "Authorization" : `Bearer ${user.token}`
    }});
    getWorkouts();
    setInput({
      title: "",
      reps: "",
      load: "",
    });
    setEditState(false);
  };

  return (
    <div>
      <div
        className="bg-white font-roboto p-6 rounded mx-10 flex flex-col justify-around items-center gap-4 mt-[50px] lg:mt-[150px]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        {editState ? (
          <h1 className="text-orange-500 text-2xl sm:text-4xl font-bold">Edit details</h1>
        ) : (
          <h1 className="text-teal-800 text-2xl sm:text-4xl font-bold">Add Workout</h1>
        )}
        <form className="flex flex-col items-center gap-4">
          <input
            value={input.title}
            onChange={handleChange}
            className="border-gray-300 border-2 p-2 rounded"
            type="text"
            name="title"
            placeholder="Enter Workout name"
          />
          <input
            value={input.reps}
            onChange={handleChange}
            className="border-gray-300 border-2 p-2 rounded"
            type="number"
            name="reps"
            placeholder="Enter no. of reps"
          />
          <input
            value={input.load}
            onChange={handleChange}
            className="border-gray-300 border-2 p-2 rounded"
            type="text"
            name="load"
            placeholder="Enter the load"
          />
          {editState ? (
            <button
              onClick={handleUpdate}
              className=" py-1 px-4 rounded hover:bg-amber-300 bg-amber-500 cursor-pointer"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className=" py-1 px-4 rounded hover:bg-teal-400 bg-teal-500 cursor-pointer"
            >
              Add
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
