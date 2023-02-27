import React from 'react'

const TopImg = (props) => {
  return (
    <div>
         <div class="image_wrapper">
              <div class="image_holder">
                <img alt="Profile" width="150px" height="150px" src={props.img}class="profile image">
      
              </img>
            </div>
            </div>
    </div>
  )
}

export default TopImg