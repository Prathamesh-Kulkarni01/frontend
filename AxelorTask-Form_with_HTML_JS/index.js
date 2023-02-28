
const username=document.getElementById("Username");
const password=document.getElementById("password");
const tost=document.getElementById("tost");


username.value="";
password.value="";
 function InvalidMsg(){
 
   username.setCustomValidity('');
     password.setCustomValidity('');
   console.log(username.value);
    if (username.value==="") {
       username.setCustomValidity('Username Required');
        }
   
   if (password.value === "") {
            password.setCustomValidity('Password required !' );
      return false;
        }else{
            if (password.value.length < 8) {
            password.setCustomValidity('Minimum 8 digit long password required !');
      return false;
        }
          console.log(password.value.search(/[0-9]/));
          if (password.value.search(/[0-9]/) <0){
            password.setCustomValidity('Password must contain atleast one digit !');
      return false;
        }
        
        }
        username.setCustomValidity('');
           password.setCustomValidity('');
        
alert("Login Sucessfull...!");
        return true;
 }
