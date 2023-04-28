import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parse } from "cookie";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const cookies = parse(document.cookie);
  const userCookieValue = cookies.user;

  const handleSubmit = () => {
    if (user.username.trim() === "admin" && user.password.trim() === "admin") {
      document.cookie = "user=admin";
      navigate("/");
    } else {
      alert("Credentials wrong");
    }
  };
  useEffect(() => {
    if (userCookieValue === "admin") navigate("/");
  }, [navigate, userCookieValue]);

  return (
    <div className="container">
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
