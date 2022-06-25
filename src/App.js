import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home/index";

//import Navbar from './modules/home/Navbar.js';


const Container = styled.div`
  background-color: #dad7f7;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 30px ;
  font-family: font-family:Verdana, Arial, Tahoma, Serif;;
`;

const Navbar = styled.div`
width:60%;
margin-bottom:8px;

& ul{
  list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #6e4e8c;
    width:100%;
    border-radius:6px;
}
& li a{
  display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    flex-direction:row;
    font-size: 25px;

}
& li a:hover {
    background-color: #f89e55;
    font-weight:bold;
  }
`;

const About = styled.div`
margin-bottom:20px;
color:black;
width:30%;
text-align:center;
font-size:30px;

& h3{
font-weight:bold;
font-variant: small-caps;
margin-bottom:10px;
}

& p{
font-style:italic;
font-size:18px;

}

`;




const App = () => {
  return (
    <Container>
    <Navbar>
      <ul>
  <li><a class="active" href="#">OUTLAY</a></li>
 
</ul>
</Navbar>
<About>
  <h3>About Outlay</h3>
  <p>While some people may find looking at their 
  monthly credit or debit card statements enough
   to keep their spending in check, others need
    something more hands-on. You can opt to track 
   your transactions daily in a spreadsheet or to
    use technology like an expense tracker.</p>
</About>

      <HomeComponent />
    </Container>
  );
};

export default App;