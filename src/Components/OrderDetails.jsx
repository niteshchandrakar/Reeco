import React, { useEffect, useState } from 'react'
import { IoFastFoodOutline } from "react-icons/io5"
import { PiBowlFoodLight } from "react-icons/pi";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
const OrderDetails = () => {
  const orders = useSelector((store) => store.Reducer)
  const[amount,setAmount]=useState(0)

  useEffect(()=>{
    const totalQuantity = orders.reduce((acc, item) => {
      return acc + parseInt(item.quantity*item.price);
    }, 0)
setAmount(totalQuantity)
  },[orders,amount])
  return (
    <OrderContainer>
      <DetailsContainer>
        <Title>Supplier</Title>
        <Description>East coast fruits & vegetables</Description>
      </DetailsContainer>
      <DetailsContainer>
        <Title>Shipping Date</Title>
        <Description>Thu, Feb 10</Description>
      </DetailsContainer>
      <DetailsContainer>
        <Title>Total</Title>
        <Description>{amount}</Description>
      </DetailsContainer>
      <DetailsContainer>
        <Title>Category</Title>
        <Description>
        <IoFastFoodOutline />
        <MdOutlineFastfood />
        <MdOutlineFoodBank />
        <PiBowlFoodLight />
        </Description>
      </DetailsContainer>
      <DetailsContainer>
        <Title>Department</Title>
        <Description>300-444-678</Description>
      </DetailsContainer>
      <DetailsContainer>
        <Title>Status</Title>
        <Description>Awaiting your approval</Description>
      </DetailsContainer>
      
    </OrderContainer>
  )
}

export default OrderDetails

const OrderContainer=styled.div`
border-radius: 10px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px 60px;
padding: 15px 40px;
`

const DetailsContainer=styled.div`
border-right: 1px solid gray;
padding-right: 50px;
`


const Title=styled.p`
color: gray;
font-size: 18px;
font-weight: bold;

`
const Description=styled.p`
font-size: 19px;
font-weight: bold;`