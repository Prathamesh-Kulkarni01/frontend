import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <div class="">
                 <div >
                    <div style={{display:"flex",flexDirection:"column",alignItems: "center",padding: "10px"}}>
                     
                        <input style={{borderRadius: "10px",padding: "10px",width: "320px",margin: "10px"}} id="Username" type="text" placeholder="Enter Your Mail" />
                        
                          <input style={{borderRadius: "10px",padding: "10px",width: "320px",height: "100px",margin: "10px"}} id="Username" type="text" placeholder="Leave your message here..."/>
                       
                      <button style={{borderRadius: "10px",padding: "10px",width: "200px"}}> Send</button>
                 </div>
                
            
              
         
          </div>
    
        </div>
    </div>
  )
}

export default ContactForm