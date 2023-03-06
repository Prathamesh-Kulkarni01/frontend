import { useState } from "react";
import DisplayData from "./component/DisplayData";
import "./styles.css";
import uuid from 'react-uuid';
export default function App() {

  const [formData, setFormData] = useState({
    name:"",
    password:"",
    city:"",
    server:"",
    role:"",
    service:[]

  })

const checkList=["Mail","Payroll","Self-service"]
const radioList=["Admin","Engineer","Manager","Guest"]
  

  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [display, setDisplay] = useState(undefined)





  const onSubmit = (e) => {
    e.preventDefault();
    setNameErr("");
    setPasswordErr("");
    if (formData.name=== "") {
      console.log(name);
      setNameErr("Username Required");
    }else{
      setNameErr("");
    }

    if (formData.password === "") {
      setPasswordErr("Password required !");

      return false;
    } else {
      if (formData.password.length < 8) {
        setPasswordErr("Minimum 8 digit long password required !");

        return false;
      }
      console.log(formData.password.search(/[0-9]/));
      if (Number(formData.password.search(/[0-9]/)) < 1) {
        setPasswordErr("Password must contain atleast one digit !");

        return false;
      }
    }
setDisplay(true);
    return true;
  };


  const handleCheck = (event) => {
    var updatedList = [...formData.service];
    if (event.target.checked) {
      updatedList = [...formData.service, event.target.value];
    } else {
      updatedList.splice(formData.service.indexOf(event.target.value), 1);
    }
    console.log(event.target.value,event.target.checked);
    setFormData({...formData,service:updatedList});
    
  };

  return (
    <div className="App">
      React Create form task
      <form>
        <div class="main">
          <div>
            <lable class="lable" for="#Username">
              Username:{" "}
            </lable>
            <input
              id="Username"
              type="text"
              onChange={(e) => setFormData({...formData,name:e.target.value})}
            />
            {nameErr !== "" && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  display: "block",
                  width: "100%",
                  margin: "0px 110px"
                }}
              >
                {nameErr}
              </span>
            )}
          </div>
          <div>
            <lable class="lable" for="#password">
              Password:{" "}
            </lable>
            <input
              id="password"
              type="password"
              onChange={(e) => setFormData({...formData,password:e.target.value})}
            />
            {passwordErr !== "" && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                  display: "block",
                  width: "100%",
                  margin: "0px 110px"
                }}
              >
                {passwordErr}
              </span>
            )}
          </div>
          <div style={{display: "flex",marginLeft:"-0.5px", alignItems:"center"}}>
      <lable class="lable">City of Employment </lable>
      <div>
        <input id="city" type="text" onChange={(e) => setFormData({...formData,city:e.target.value})}/>
      </div>
    </div>
          <div>
            <lable for="#web_server">Web server</lable>
            <select id="web_server" onChange={(e) => setFormData({...formData,server:e.target.value})}>
              <option value="">--Choose a server--</option>
              <option value="France">France</option>
              <option value="Surat">Surat</option>
              <option value="Bengluru">Bengluru</option>
            </select>
          </div>
          <div style={{margin:"20px 0px"}}  class="radio_wrapper"  onChange={(e) => setFormData({...formData,role:e.target.value})}>
            <div class="radio_lable">
              <lable>Please specify your role</lable>
            </div>
            <div class="radio_group">
              {
                radioList.map(val=>{
                  return(
                  <div  class="radio_btn">
                  <input key={val} type="radio" id="Engineer" value={val} name="role"></input>
                   <label for="#Engineer">{val}</label>
                 </div>
                  )
                })
              }
            </div>
          </div>
        
          <fildset style={{marginTop:" 10px"}} class="radio_wrapper">
            <div class="radio_lable">
              <lable>Single Sign-on to the following</lable>
            </div>
            <div class="radio_group">
{
  checkList.map(val=>{
    return(
      <div key={val} class="radio_btn">
      <input
        type="checkbox"
        id="Engineer"
        value={val}
        name="role"
        onChange={handleCheck}
      ></input>
      <label for="#Engineer">{val}</label>
    </div>
    )
  })
}
</div>

          </fildset>

          <div class="btn_holder">
            <button class="btn" onClick={(e) => onSubmit(e)}>
              {" "}
              Login
            </button>

            <button class="btn"> Reset</button>
          </div>
          <div style={{marginTop:"20px"}}>
          {
            display&&display===true&&  <DisplayData data={formData}></DisplayData>
          }
        </div>
        </div>
      </form>
    </div>
  );
}
