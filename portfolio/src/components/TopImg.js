import React from "react";

const TopImg = (props) => {
  return (
    <div>
      <div className="image_wrapper">
        <div className="image_holder">
          <img
            alt="Profile"
            width="150px"
            height="150px"
            src={props.img}
            className="profile image"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default TopImg;
