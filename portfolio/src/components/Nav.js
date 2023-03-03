import React, { useState } from "react";
import { Link} from "react-router-dom";

import { HiOutlineMenu } from "@react-icons/all-files/hi/HiOutlineMenu";

import "./nav.css";

const Nav = () => {
  const [Nav, setNav] = useState(false);
  return (
    <div className="nav">
      <a href="/" className="logo">
        Prathamesh
      </a>
      <div className="nav-link-container">
        <ul className="navlinks">
          <a href="/about" className="links">
            About
          </a>
          <a href="/work" className="links">
            {" "}
            Work
          </a>

          <a href="/blogs" className="links">
            Blog
          </a>
          <a href="/contacts" className="links">
            Contact
          </a>
        </ul>
      </div>

      {/* <!-- Side Nav For Mobile --> */}
      <div id="menu" className=" nav-link-container" onClick={() => setNav(true)}>
        <p href="#" className="icon">
          <HiOutlineMenu> </HiOutlineMenu>
        </p>
      </div>
      <div
        style={Nav ? { display: "block", transform: "translate(0%)" } : {}}
        id="mobile_nav"
      >
        <h2
          id="close"
          style={{
            backgroundColor: "seagreen",
            color: "seashell",
            padding: "16px",
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            textAlign: "center",
            float: "right",
            margin: "10px",
          }}
          onClick={() => setNav(false)}
        >
          X
        </h2>
        <div className="">
          <ul className="navlink">
            {/* <a href"="/about" className="links ">About</a> */}
            <Link to="/ " className="links mobLink" onClick={() => setNav(false)}>
              About
            </Link>
            {/* <Link to="Work.js" className="links"> Work</Link> */}
            <hr></hr>
            <Link
              to="/work"
              className="links mobLink"
              onClick={() => setNav(false)}
            >
              {" "}
              Work
            </Link>

            <hr></hr>
            <Link
              to="/blogs"
              className="links mobLink"
              onClick={() => setNav(false)}
            >
              Blog
            </Link>
            <hr></hr>
            <Link
              to="/contacts"
              className="links mobLink"
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
