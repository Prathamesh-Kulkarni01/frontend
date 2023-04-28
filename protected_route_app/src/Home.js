import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
        <h2>Hello Admin ! Welcome to Dashboard</h2>
      <button
        onClick={() => {
          document.cookie = "user=null"
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
