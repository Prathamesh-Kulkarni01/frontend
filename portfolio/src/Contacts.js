import React from 'react'
import ContactForm from './components/ContactForm'
import ExtraInfo from './components/ExtraInfo'
import TopImg from './components/TopImg'

const Contacts = () => {
  return (
    <div>
         <div class="page_body">
          
            <TopImg img="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg"></TopImg>
                <h1 class="name">Contact Me !</h1>
             
                <div class="page_body" >
                <ExtraInfo></ExtraInfo>
                <ContactForm></ContactForm>
               
      
      </div>
      </div>
    </div>
  )
}

export default Contacts


