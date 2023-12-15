import React from "react";
import { FaCaretRight } from "react-icons/fa6";
import styled from "styled-components";
const OrderMainDetails = () => {
  return (
    <OrdermaniContainer>
      <OrderId>
        Orders <FaCaretRight style={{paddingTop:"10px"}} />{" "}
        <text  href="/app">Order 32457</text>
      </OrderId>
      <OrdermainSub>
        <P>Order 32457ABC</P>
        <Orderbtn>
          <Backbtn>Back</Backbtn>
          <Buttonapprove>Approve order</Buttonapprove>
        </Orderbtn>
      </OrdermainSub>
    </OrdermaniContainer>
  );
};

export default OrderMainDetails;

const OrdermaniContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
height: 70px;
padding: 3px 30px 50px 60px;
margin-bottom: 20px;
`
const OrderId=styled.p`
color: gray;
  font-size: 20px;

`
const OrdermainSub=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
`
const P=styled.p`
font-size: 25px;
font-weight: bold;
`
const Orderbtn=styled.div`
display: flex;
margin-right: 50px;
gap: 25px;`

const Backbtn=styled.button`
background-color:white;
border: 1px solid rgb(2, 57, 2);
padding: 5px 18px;
color: rgb(2, 57, 2);
font-size: 16px;
border-radius: 14px;
font-weight: bold;`

const Buttonapprove=styled.div`
background-color: rgb(2, 57, 2);
  border: none;
  padding: 8px 18px;
  color: white;
  font-size: 16px;
  border-radius: 14px;
  font-weight: bold;
`