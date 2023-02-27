import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenu } from '@react-icons/all-files/hi/HiOutlineMenu';
import './nav.css';


const Nav = () => {
    const [Nav, setNav] = useState(false)
  return (
    <div class="nav">
    <a href="/index.html" class="logo">Prathamesh</a>
      <div class="nav-link-container">
        <ul class="navlinks">
          <a href="/work.html" class="links"> Work</a>
          <a href="/about.html" class="links">About</a>
          <a href="/blog.html" class="links">Blog</a>
          <a href="/contacts.html" class="links">Contact</a>
        </ul>
      </div>

      {/* <!-- Side Nav For Mobile --> */}
      <div id="menu"class=" nav-link-container" onClick={()=>setNav(true)}>
        <p href='#'  class="icon" >
        
          <HiOutlineMenu > </HiOutlineMenu>
          
        </p>
  </div>
    <div style={Nav?{display:'block',transform: "translate(0%)"}:{}}  id="mobile_nav">
      <h2 id="close"style={{backgroundColor:"seagreen",color:"seashell",padding: "16px",width: "23px",height: "23px",borderRadius: "50%",textAlign: "center",float: "right",margin: "10px"}} onClick={()=>setNav(false)} >X</h2>
      <div   class="">
        <ul class="navlink">
  
          {/* <a href"="/about" class="links ">About</a> */}
          <Link to="/ "class="links mobLink" onClick={()=>setNav(false)}>About</Link>
          {/* <Link to="Work.js" class="links"> Work</Link> */}
          <hr></hr>
          <Link to="/work" class="links mobLink" onClick={()=>setNav(false)}> Work</Link>
         
          <hr></hr>
          <Link to="/blogs" class="links mobLink" onClick={()=>setNav(false)}>Blog</Link>
          <hr></hr>
          <Link to="/contacts" class="links mobLink" onClick={()=>setNav(false)}>Contact</Link>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Nav
