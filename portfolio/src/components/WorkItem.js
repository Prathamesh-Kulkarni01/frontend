import React from "react";

const WorkItem = (props) => {
  return (
    <div>
      <div className="about_body ">
        <p>
          {" "}
          <strong>Role:</strong> {props.role}
        </p>
        <p>
          {" "}
          <strong>Company:</strong> {props.comp}
        </p>
        <p>
          <span />
          <strong>Duration:</strong>{props.dur}
        </p>
      </div>
      <br></br>
    </div>
  );
};

export default WorkItem;
