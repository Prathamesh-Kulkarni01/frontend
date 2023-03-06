import React from "react";
import ExtraInfo from "./components/ExtraInfo";
import TopImg from "./components/TopImg";

const Home = () => {
  return (
    <div>
      <div className="page_body">
        <TopImg
          img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
          className="profile image"
        ></TopImg>
        <h1 className="name">Hi! I am Prathamesh !</h1>
        <ExtraInfo></ExtraInfo>
        <br></br>
        <ExtraInfo></ExtraInfo>
      </div>
    </div>
  );
};

export default Home;
