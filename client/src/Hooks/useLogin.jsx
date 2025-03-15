import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    console.log(email, password);
    if (email.trim() === "" || password.trim() === "") {
      setError("Enter the Required field!");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
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

  return { login, error };
};
