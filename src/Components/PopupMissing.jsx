import React from "react";
import { TfiClose } from "react-icons/tfi";
import styled from "styled-components";
const PopupMissing = ({ handleNo, handleYes, setPopup, missingData }) => {
  return (
    <Misspopup>
      <MissingTitle>
        <Description>Missing product</Description>
        <TfiClose
          className="icon"
          
          onClick={() => {
            setPopup(false);
          }}
        />
      </MissingTitle>
      <Title>Is {missingData && missingData[0].productName} urgent?</Title>
      <MissingButton>
        <Buttonplus onClick={handleNo}>No</Buttonplus>
        <Buttonplus onClick={handleYes}>Yes</Buttonplus>
      </MissingButton>
    </Misspopup>
  );
};

export default PopupMissing;

const Misspopup=styled.div`
position: relative;
background-color: azure;

display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px 25px;
`

const MissingTitle=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const MissingButton=styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 40px;
`


const Description=styled.p`
font-size: 19px;
font-weight: bold;
margin:5px;
margin-right:40px;
`

const Buttonplus=styled.button`
background-color: rgb(2, 57, 2);
  border: none;
  padding:5px;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
  width:40px;
`

const Title=styled.p`
color: gray;
font-size: 18px;
margin-bottom:30px;
`