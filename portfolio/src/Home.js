import React from 'react'
import ExtraInfo from './components/ExtraInfo'
import TopImg from './components/TopImg'

const Home = () => {
  return (
    <div>
<div class="page_body">
       
        <TopImg img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" class="profile image"></TopImg>
            <h1 class="name">Hi! I am Prathamesh !</h1>
           <ExtraInfo></ExtraInfo>
            <br></br>
            <ExtraInfo></ExtraInfo>
          
      </div>


    </div>
  )
}

export default Home