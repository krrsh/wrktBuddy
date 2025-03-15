import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Workoutcontext from "./Context/Workoutcontext";
// import Homepage from "./Pages/Homepage";
// import Navbar from "./Components/Navbar";
// import Signuppage from "./Pages/Signuppage";
// import Loginpage from "./Pages/Loginpage";
import AuthContext from "./Context/AuthContext";
import App from "./App";
// import { useAuthContext } from "./Hooks/useAuthContext";

const Index = () => {

//   const {user} = useAuthContext();
  return (
    <AuthContext>
      <App/>
    </AuthContext>
  );
};

export default Index;
