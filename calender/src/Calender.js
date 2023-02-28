
import "./App.css";
import { useState } from "react";

function App() {



  
  const date = new Date();

  const yearNow = date.getFullYear();
  const dayNow = date.getDate();
  const monthNow = date.getMonth();
  const [inputDate, setInputDate] = useState(yearNow.toString() +"-" +(monthNow+ 1).toString().padStart(2, 0));
  const selected=new Date(inputDate);
  const selectedM = selected.getMonth()+1;
  const selectedY = selected.getFullYear();
  const noOfDays= new Date(selectedY, selectedM, 0).getDate();
  const monthStartsOn =new Date(selectedY + "-" + selectedM + "-01").getDay();

const weekdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

 const onMonthSwapped=(x)=>{

    let selected=new Date(inputDate);
    if(x===-1&&selected.getMonth()===0){
      selected.setMonth(11);
      selected.setFullYear(selected.getFullYear()-1);
      swappDate(selected,0,0);
    }else if(x===1&&selected.getMonth()===11){
      selected.setMonth(0);
      selected.setFullYear(selected.getFullYear()+1);
      swappDate(selected,0,0);
    }else{
      swappDate(selected,x,0);
    }
    
    }
    const onYearSwapped=(x)=>{
      let selected=new Date(inputDate);
    swappDate(selected,0,x);
   
    }
    
    const swappDate=(d,m,y)=>{
     setInputDate(
        (d.getFullYear()+y).toString() +
        "-" +
        ((d.getMonth() + 1)+m).toString().padStart(2, 0));
        
    }

  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div style={{ flexDirection: "column" }} className="center">
            <h2 style={{ marginTop: "50px" }}>Select Date </h2>
            <div style={{width: "100%",display: "flex",alignItems:"center",justifyContent:" center"}}>
            <p onClick={()=>onMonthSwapped(-1)}id="Y_left" style={{backgroundColor: "rgb(255, 255, 255)",padding: "10px", borderRadius: "50%",width: "15px",margin: "auto"}}>&lt;</p>
            <input
              id="dateIp"
              type="month"
              placeholder="YYYY"
              min="2017"
              max="2100"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            ></input>
                        <p onClick={()=>onMonthSwapped(1)} id="Y_left" style={{backgroundColor: "rgb(255, 255, 255)",padding: "10px", borderRadius: "50%",width: "15px",margin: "auto"}}>&gt;</p>
          </div>
          </div>
          <div style={{display: "flex"}}>
          <p onClick={()=>onYearSwapped(-1)} id="Y_left" style={{backgroundColor: "rgb(255, 255, 255)",padding: "3px", borderRadius: "50px",width: "50px",margin: "5px auto"}}>&lt;&lt;&lt;</p>
          <p onClick={()=>onYearSwapped(1)} id="Y_left" style={{backgroundColor: "rgb(255, 255, 255)",padding: "3px", borderRadius: "50px",width: "50px",margin: "5px auto"}}>&gt;&gt;&gt;</p>
        </div>
        </div>
        <div style={{ marginTop: "10px" }} className="conteiner">
          <table id="table" className="table">
            <thead id="ll" className="tr">
              {weekdays.map(val=> <th key={val} className="th">{val}</th>)}
            </thead>
            <tr className="tr"></tr>
            {[...Array(parseInt((noOfDays + monthStartsOn) / 7))].map(
          (key, week) => {
            return (
              <tbody className="tr">
                {[...Array(7)].map((key2, day) => {
                 
                  return (
                    <>
                      {week * 7 + day + 1 <= monthStartsOn ? (
                        <td className="th"> </td>
                      ) : (
                        <td
                          style={
                            Number(dayNow) ===
                              Number(week * 7 + day + 1 - monthStartsOn) &&
                            Number(monthNow + 1) === Number(selectedM) &&
                            selectedY === yearNow
                              ? { backgroundColor: "lightblue" }
                              : {}
                          }
                        >
                          {week * 7 + day + 1 - monthStartsOn}
                        </td>
                      )}
                    </>
                  );
                })}
              </tbody>
            );
          }
        )}
            
          
            <tr className="tr">
              {[...Array(parseInt(noOfDays + monthStartsOn) % 7)].map(
                (key2, day) => {
                  return (
                    <>
                      <td className="th">
                        {parseInt((noOfDays + monthStartsOn) / 7) * 7 +
                          day -
                          monthStartsOn +
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
