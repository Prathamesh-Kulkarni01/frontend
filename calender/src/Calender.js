import logo from "./logo.svg";
import "./App.css";
import { useEffect, useInsertionEffect, useState } from "react";

function App() {
  var date = new Date();
  var YearNow = date.getFullYear();
  var DayNow = date.getDate();
  var MonthNow = date.getMonth();
  console.log(DayNow);
  // const [selectedDate, setselectedDate] = useState(DayNow)
  const [selectedM, setselectedMonth] = useState(MonthNow);

  const [selectedY, setselectedYear] = useState(YearNow);
  const [inputDate, setInputDate] = useState(
    date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, 0)
  );

  const [NoOfDays, setNoOfDays] = useState(0);
  const [MonthStartsOn, setMonthStartsOn] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    getDays();
    return () => {};
  }, [NoOfDays, MonthStartsOn, inputDate]);

 

  const getDays = () => {
    var selectedMonth = inputDate.substring(
      inputDate.length - 2,
      inputDate.length - 0
    );
    setselectedMonth(selectedMonth);
    //extracting year and month from selected date
    var selectedYear = inputDate.substring(0, 4);
    setselectedYear(selectedY);
    var dayCount = new Date(selectedYear, selectedMonth, 0).getDate();

    //Calculating No of Days in this Month
    var day = new Date(selectedYear + "-" + selectedMonth + "-01").getDay();
    setNoOfDays(dayCount);
    setMonthStartsOn(day);

    console.log("kjgkh", parseInt(NoOfDays / 7));
  };

  return (
    <div className="App">
      <div class="main">
        <div class="top">
          <div style={{ flexDirection: "column" }} class="center">
            <h2 style={{ marginTop: "60px" }}>Select Date </h2>
            <input
              id="dateIp"
              type="month"
              placeholder="YYYY"
              min="2017"
              max="2100"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            ></input>
          </div>
        </div>
        <div style={{ marginTop: "10px" }} class="conteiner">
          <table id="table" class="table">
            <tr id="ll" class="tr">
              <th class="th">Sun</th>
              <th class="th">Mon</th>
              <th class="th">Tue</th>
              <th class="th">Wed</th>
              <th class="th">Thu</th>
              <th class="th">Fri</th>
              <th class="th">Sat</th>
            </tr>
            <tr class="tr"></tr>
            {[...Array(parseInt((NoOfDays + MonthStartsOn) / 7))].map(
          (key, week) => {
            return (
              <tr class="tr">
                {[...Array(7)].map((key2, day) => {
                  console.log("Check", Number(MonthNow));
                  return (
                    <>
                      {week * 7 + day + 1 <= MonthStartsOn ? (
                        <td class="th"> </td>
                      ) : (
                        <td
                          style={
                            Number(DayNow) ===
                              Number(week * 7 + day + 1 - MonthStartsOn) &&
                            Number(MonthNow + 1) === Number(selectedM) &&
                            selectedY === YearNow
                              ? { backgroundColor: "lightblue" }
                              : {}
                          }
                        >
                          {week * 7 + day + 1 - MonthStartsOn}
                        </td>
                      )}
                    </>
                  );
                })}
              </tr>
            );
          }
        )}
            
          
            <tr class="tr">
              {[...Array(parseInt(NoOfDays + MonthStartsOn) % 7)].map(
                (key2, day) => {
                  return (
                    <>
                      <td class="th">
                        {parseInt((NoOfDays + MonthStartsOn) / 7) * 7 +
                          day -
                          MonthStartsOn +
                          1}
                      </td>
                    </>
                  );
                }
              )}
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
