import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "styled-components";
const Header = () => {
  return (
    <Headercontainer>
      <Titlecontainer>
        <HeaderTitle>Reeco</HeaderTitle>
        <Ul>
          <Li>Store</Li>
          <Li>Orders</Li>
          <Li>Analytics</Li>
        </Ul>
      </Titlecontainer>
      <Profilecontainer>
        <FiShoppingCart
          className="icon cart"
          style={{ margin: "0 70px 0 0" }}
          
        />
        <p>
          Hello, James
          <RiArrowDropDownLine   />
        </p>
      </Profilecontainer>
      
    </Headercontainer>
  );
};

export default Header;

const Headercontainer=styled.div`
background-color: rgb(2, 57, 2);
color: white;
display: flex;
align-items: center;
justify-content: space-around;
height: 50px;
`
const HeaderTitle=styled.p`
font-size: 38px;
  font-weight: bold;
  
`

const Titlecontainer=styled.div`
display: flex;
align-items: baseline;
justify-content: space-evenly;
margin-left: -200px;
`
const Profilecontainer=styled.div`
display: flex;
align-items: center;
gap: 20px;
margin: 0 -210px 0 0;
`
const Ul=styled.ul`
margin-left: 45px;
  display: flex;
  gap: 30px;
`
const Li=styled.li`
list-style:none;
font-size: 20px;
font-weight: bold;
padding: 0px 25px;
`
