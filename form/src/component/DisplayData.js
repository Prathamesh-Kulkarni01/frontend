import React from "react";


const DisplayData = (props) => {
  console.log(props.data);
  return (
    <div style={props.data.name===''?{display:"none"}:{}} className="display">
      <h3 style={{marginLeft:"80px"}}>Login Sucessfull</h3>  
      <div>
        <h4>Name   :</h4>
        <p>{props.data.name}</p>
      </div>
      <div>
        <h4>City     :</h4>
        <p>{props.data.city}</p>
      </div>
      <div>
        <h4>Server :</h4>
        <p>{props.data.server}</p>
      </div>
      <div>
        <h4>Role   :</h4>
        <p>{props.data.role}</p>
      </div>
      <div>
        <h4>Service :</h4>
        <div>
    {
        props.data.service.map(val=>{
            return(
                <p  key={val}>{val}</p>
               
            )
        })
    }
    </div>
        </div>
    </div>
  );
};

export default DisplayData;
