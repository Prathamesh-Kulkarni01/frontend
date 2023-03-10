import moment from "moment";

import uniqid from "uniqid";

import React, { useState } from "react";

import "./App.css";

function App() {
  const [inputDate, setInputDate] = useState(
    moment().year() +
      "-" +
      (Number(moment().month()) + 1).toString().padStart(2, 0)
  );

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const selected = moment(inputDate);
  const selectedM = selected.month() + 1;
  const selectedY = selected.year();

  const noOfDays = selected.daysInMonth();
  const monthStartsOn = Number(moment(selected).startOf("month").format("d"));

  const totalDaysArray = [...Array(Math.ceil((noOfDays + monthStartsOn) / 7))];
  const weekArray = [...Array(7)];

  const changeMonth = (next) => {
    const selected = moment(inputDate);
    if (!next && selected.month() === 0) {
      selected.set("month", 11);
      selected.subtract(1, "Y");
    } else if (next && selected.month() === 11) {
      selected.set("month", 0);
      selected.add(1, "Y");
    } else {
      next ? selected.add(1, "M") : selected.subtract(1, "M");
    }
    changeDate(selected);
  };

  const changeYear = (increment) => {
    increment ? selected.add(1, "Y") : selected.subtract(1, "Y");
    changeDate();
  };

  const changeDate = (date = selected) => {
    setInputDate(
      date.year().toString() +
        "-" +
        (Number(date.month()) + 1).toString().padStart(2, 0)
    );
  };

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div style={{ flexDirection: "column" }} className="center">
            <h2 style={{ marginTop: "50px" }}>Select Date </h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: " center",
                cursor: "pointer",
              }}
            >
              <p
                onClick={() => changeMonth(false)}
                id="Y_left"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  padding: "10px",
                  borderRadius: "50%",
                  width: "15px",
                  margin: "auto",
                  cursor: "pointer",
                }}
              >
                &lt;
              </p>
              <input
                id="dateIp"
                type="month"
                placeholder="YYYY"
                min="2017"
                max="2100"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
              ></input>
              <p
                onClick={() => changeMonth(true)}
                id="Y_left"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  padding: "10px",
                  borderRadius: "50%",
                  width: "15px",
                  margin: "auto",
                  cursor: "pointer",
                }}
              >
                &gt;
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <p
              onClick={() => changeYear(false)}
              id="Y_left"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                padding: "3px",
                borderRadius: "50px",
                width: "50px",
                margin: "5px auto",
                cursor: "pointer",
              }}
            >
              &lt;&lt;&lt;
            </p>
            <p
              onClick={() => changeYear(true)}
              id="Y_left"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                padding: "3px",
                borderRadius: "50px",
                width: "50px",
                margin: "5px auto",
                cursor: "pointer",
              }}
            >
              &gt;&gt;&gt;
            </p>
          </div>
        </div>
        <div style={{ marginTop: "10px" }} className="conteiner">
          <table id="table" className="table">
            <thead id="ll" className="tr">
              <tr>
                {weekdays.map((val) => (
                  <th key={val} className="th">
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {totalDaysArray.map((key, week) => {
                return (
                  <tr key={uniqid()} className="tr">
                    {weekArray.map((key2, day) => {
                      var currentCellDate = moment(
                        selectedY +
                          "-" +
                          selectedM +
                          "-" +
                          Number(week * 7 + day + 1 - monthStartsOn)
                      );

                      return (
                        <React.Fragment key={uniqid()}>
                          {week * 7 + day + 1 <= monthStartsOn ||
                          week * 7 + day + 1 - monthStartsOn > noOfDays ? (
                            <td className="th"> </td>
                          ) : (
                            <td
                              key={uniqid()}
                              style={
                                currentCellDate.format("l") ===
                                moment().format("l")
                                  ? { backgroundColor: "lightblue" }
                                  : {}
                              }
                            >
                              {week * 7 + day + 1 - monthStartsOn}
                            </td>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
