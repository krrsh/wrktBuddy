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
    const response = await fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

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
