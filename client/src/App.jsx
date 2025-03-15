import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Workoutcontext from "./Context/Workoutcontext";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
// import AuthContext from "./Context/AuthContext";
import { useAuthContext } from "./Hooks/useAuthContext";

const App = () => {

  const {user} = useAuthContext();
  return (
      <Workoutcontext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Homepage /> : <Navigate to='/signup'/>} />
            <Route path="/signup" element={!user ? <Signuppage /> : <Navigate to='/'/>} />
            <Route path="/login" element={!user ? <Loginpage /> : <Navigate to='/'/>} />
          </Routes>
        </Router>
      </Workoutcontext>
  );
};

export default App;