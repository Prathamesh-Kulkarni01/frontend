import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setNameErr("");
    setPasswordErr("");
    if (name === "") {
      console.log(name);
      setNameErr("Username Required");

      return false;
    }

    if (password === "") {
      setPasswordErr("Password required !");

      return false;
    } else {
      if (password.length < 7) {
        setPasswordErr("Minimum 8 digit long password required !");

        return false;
      }
      console.log(password.search(/[0-9]/));
      if (Number(password.search(/[0-9]/)) < 1) {
        setPasswordErr("Password must contain atleast one digit !");

        return false;
      }
    }

    return true;
  };
  return (
    <div className="App">
      HTML Css Create form task -1
      <form>
        <div class="main">
          <div>
            <lable class="lable" for="#Username">
              Username:{" "}
            </lable>
            <input
              id="Username"
              type="text"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <div>
            <lable class="lable">City of Employment </lable>
            <input id="city" list="cityList" name="city"></input>

            <datalist id="cityList">
              <option value="Pune" />
              <option value="Surat" />
              <option value="Bengluru" />
            </datalist>
          </div>
          <div>
            <lable for="#web_server">Web server</lable>
            <select id="web_server">
              <option value="--Choose a server--">--Choose a server--</option>
              <option value="--Choose a server--">France</option>
              <option value="--Choose a server--">Surat</option>
              <option value="--Choose a server--">Bengluru</option>
            </select>
          </div>
          <fildset class="radio_wrapper">
            <div class="radio_lable">
              <lable>Please specify your role</lable>
            </div>
            <div class="radio_group">
              <div class="radio_btn">
                <input type="radio" id="Engineer" value="" name="role"></input>
                <label for="#Engineer">Admin</label>
              </div>
              <div class="radio_btn">
                <input type="radio" id="Engineer" value="" name="role"></input>
                <label for="#Engineer">Engineer</label>
              </div>
              <div class="radio_btn">
                <input type="radio" id="Engineer" value="" name="role"></input>
                <label for="#Engineer">Manager</label>
              </div>
              <div class="radio_btn">
                <input type="radio" id="Engineer" value="" name="role"></input>
                <label for="#Engineer">Guest</label>
              </div>
            </div>
          </fildset>
          <br></br>
          <fildset class="radio_wrapper">
            <div class="radio_lable">
              <lable>Single Sign-on to the following</lable>
            </div>
            <div class="radio_group">
              <div class="radio_btn">
                <input
                  type="checkbox"
                  id="Engineer"
                  value=""
                  name="role"
                ></input>
                <label for="#Engineer">Mail</label>
              </div>
              <div class="radio_btn">
                <input
                  type="checkbox"
                  id="Engineer"
                  value=""
                  name="role"
                ></input>
                <label for="#Engineer">Payroll</label>
              </div>
              <div class="radio_btn">
                <input
                  type="checkbox"
                  id="Engineer"
                  value=""
                  name="role"
                ></input>
                <label for="#Engineer">Self-service</label>
              </div>
            </div>
          </fildset>

          <div class="btn_holder">
            <button class="btn" onClick={(e) => onSubmit(e)}>
              {" "}
              Login
            </button>

            <button class="btn"> Reset</button>
          </div>
          <h1 id="tost">Login Sucessfull</h1>
        </div>
      </form>
    </div>
  );
}
