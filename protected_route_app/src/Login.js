import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (user.username === "admin" && user.password === "admin") {
      localStorage.setItem("user", true);
      navigate("/");
    } else {
      alert("Credentials wrong");
    }
  };
  return (
    <div
    className="container">
      <input
        placeholder="username"
        onChange={(e) =>
          setUser((data) => ({ ...data, username: e.target.value }))
        }
      ></input>
      <input
        placeholder="password"
        onChange={(e) =>
          setUser((data) => ({ ...data, password: e.target.value }))
        }
      ></input>
      <button onClick={handleSubmit}> Login</button>
    </div>
  );
};

export default Login;
