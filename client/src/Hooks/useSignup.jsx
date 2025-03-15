import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    console.log(email, password);
    if (email.trim() === "" || password.trim() === "") {
      setError("Enter the Required field!");
      return;
    }
    // else
    const response = await fetch(`https://wrktbuddy.onrender.com/api/users/signup`, {
    // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    // const text = await response.text();
    // const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      setError(data.Error);
      return;
    }

    if (response.ok) {
      setError(null);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  return { signup, error };
};
