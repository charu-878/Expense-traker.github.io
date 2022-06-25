import styled, {css} from "styled-components";
import React from "react";
import './navbar.css';



function Navbar() {
    return (
        <>
            <Navbar>
      <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
      </Navbar>
        </>
    )
};


export default Navbar;