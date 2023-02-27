
const name=document.getElementById("Username");
const password=document.getElementById("password");
const tost=document.getElementById("tost");

tost.style.display="none"
name.value="";
password.value="";
 function InvalidMsg(){
   
   name.setCustomValidity('');
     password.setCustomValidity('');
   console.log(name.value);
    if (name.value==="") {
       console.log(name.value);
            name.setCustomValidity('Username Required');
    
      return false;
        }
   
   if (password.value === "") {
            password.setCustomValidity('Password required !' );
    
      return false;
        }else{
            if (password.value.length < 7) {
            password.setCustomValidity('Minimum 8 digit long password required !');
    
      return false;
        }
          console.log(password.value.search(/[0-9]/));
          if (password.value.search(/[0-9]/) <0){
            password.setCustomValidity('Password must contain atleast one digit !');
    
      return false;
        }
        
        }
  name.setCustomValidity('');
           password.setCustomValidity('');
        
  tost.style.display="block"
        return true;
 }
