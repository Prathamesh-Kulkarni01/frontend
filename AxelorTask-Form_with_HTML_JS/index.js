
const username=document.getElementById("Username");
const password=document.getElementById("password");
const nameError=document.getElementById("nameError");
const passwordError=document.getElementById("passwordError");


 function InvalidMsg(e){
  nameError.innerText=""
  passwordError.innerHTML=''
   console.log(username.value);
    if (username.value==="") {
       nameError.innerText="Username Required !"
       
    }
   if (password.value === "") {
    passwordError.innerHTML='Password required !'
   
      return false;
        }else{
            if (password.value.length < 8) {

              passwordError.innerHTML='Minimum 8 digit long password required !';
      return false;
        }
     
          if (password.value.search(/[0-9]/) <0){
            passwordError.innerHTML="Password must contain atleast one digit !";
      return false
        }
        
        }
    
       
       
          alert("Login Sucessfull...!");
      
        
return true;
     
 }
