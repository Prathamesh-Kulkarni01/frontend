import React from "react";
import ExtraInfo from "./components/ExtraInfo";
import TopImg from "./components/TopImg";
import WorkItem from "./components/WorkItem";

const Work = () => {
  const WorkData = [
    {
      Role: "React Develor Intern",
      Company: "Axelor India Private Limited",
      Duration: "02/2023-05/2023(3 Month)",
    },
    {
      Role: "Android Develor Intern",
      Company: "Wedmist TechPrivate Limited",
      Duration: "05/2022-11/2022(6 Month)",
    },
    {
      Role: "Web Develor Intern",
      Company: "Upclic Labs Private Limited",
      Duration: " 03/2021-04/2021(2 Month)",
    },
  ];

  return (
    <div>
      <div className="page_body">
        <TopImg img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"></TopImg>
        <h1 className="name">Work Experiance</h1>

        {WorkData.map(( val) => {
          return (
            <WorkItem
              key={val.Company}
              role={val.Role}
              comp={val.Company}
              dur={val.Duration}
            ></WorkItem>
          );
        })}

        <ExtraInfo></ExtraInfo>
      </div>
    </div>
  );
};

export default Work;
