import React, { useState } from "react";
import avacad from "./avacad.jpg";
import { useDispatch } from "react-redux";
import { editData } from "../redux/actions";
import styled from "styled-components";

const EditModule = ({ handleCancel, handleSend, missingData }) => {
  const dispatch = useDispatch();
  const { price, quantity, total } = missingData[0];
  const [editPrice, setEditPrice] = useState(price);
  const [editQuantity, setEditQuantity] = useState(quantity);
  const [editTotal, setEditTotal] = useState(total);
  const [reason,setReason] = useState("")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setEditPrice(value);
    } else if (name === "quantity") {
      setEditQuantity(value);
    } else if (name === "total") {
      setEditTotal(value);
    }
  };
  const handleSendBtn = () => {
    handleSend();
    dispatch(
      editData({
        ...missingData[0],
        price: editPrice,
        quantity: editQuantity,
        total: editTotal,
        status:reason
      })
    );
  };
  const handleIncrement = ()=>{
    setEditQuantity(prev=>(Number(prev)+1))
  }
  const handleDecrement = ()=>{
    setEditQuantity(prev=>(Number(prev)-1))
  }
  const handleReason = (e)=>{
    setReason(e.target.innerHTML)
  }
  return (
    <ModuleEdit >
      {missingData && (
        <>
          <Description>{missingData[0].productName}</Description>
          <Title>{missingData[0].brand}</Title>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src={avacad}
                alt=""
                style={{ height: "130px", width: "130px" }}
              />
            </div>
            <div style={{textAlign:"center",margin:"auto"}}>
              <div style={{ display: "flex", gap:"30px",margin:"10px"}}>
                <label htmlFor="">Price($)</label>
                <div>
                  <Input
                  
                    name="price"
                    type="text"
                    value={editPrice}
                    onChange={handleInputChange}
                  />
                  x6*1LB
                </div>
              </div>
              <div style={{ display: "flex",gap:"30px",margin:"10px" }}>
                <label htmlFor="">Quantity</label>
                <div>
                  {" "}
                  <Buttonplus onClick={handleDecrement}>-</Buttonplus>{" "}
                  <Input
                    name="quantity"
                    type="text"
                    value={editQuantity}
                    onChange={handleInputChange}
                  />{" "}
                  <Buttonplus onClick={handleIncrement}>+</Buttonplus> x6*1LB
                </div>
              </div>
              <div style={{ display: "flex",gap:"30px",margin:"10px" }} >
                <label htmlFor="" style={{marginRight:"90px"}}>Total</label>
                <Description
                  type="text"
                  name="total"
                  value={editPrice*editQuantity}
                  onChange={handleInputChange}
                >{editPrice*editQuantity}</Description>
              </div>
            </div>
          </div>
          <div>
            <p>Choose reason (Optional)</p>
            <Ul>
              <Li style={{backgroundColor:reason=="Missing Product"?"#3DCA72":""}} onClick={handleReason}>Missing Product</Li>
              <Li style={{backgroundColor:reason=="Quality is not the same"?"#3DCA72":""}} onClick={handleReason}>Quality is not the same</Li>
              <Li style={{backgroundColor:reason=="Price is not the same"?"#3DCA72":""}} onClick={handleReason}>Price is not the same</Li>
              <Li style={{backgroundColor:reason=="other"?"#3DCA72":""}} onClick={handleReason}>other</Li>
            </Ul>
          </div>
          <div style={{display:"flex" ,margin:"10px"}}>
          <Cancelbtn onClick={handleCancel}>Cancel</Cancelbtn>
          <Buttonsend onClick={handleSendBtn}>Send</Buttonsend>
          </div>
          
        </>
      )}
    </ModuleEdit>
  );
};

export default EditModule;

const ModuleEdit =styled.div`

background-color: white;
width: 60%;
height: 60%;
border-radius: 20px;
padding:30px
`

const Ul=styled.ul`
display: flex;
  gap: 10px;
`

const Li=styled.li`
list-style: none;
border: 1px solid rgb(2, 57, 2);
border-radius: 10px;
padding: 5px 8px;
cursor: pointer;
`
const Title=styled.p`
color: gray;
font-size: 18px;
font-weight: bold;
`
const Description=styled.p`
font-size: 19px;
font-weight: bold;`

const Buttonsend=styled.button`
background-color: rgb(2, 57, 2);
  border: none;
  padding: 8px 18px;
  color: white;
  font-size: 16px;
  border-radius: 14px;
  font-weight: bold;
  width:90px;
`
const Buttonplus=styled.button`
background-color: rgb(2, 57, 2);
  border: none;
  padding:5px;
  color: white;
  font-size: 16px;
  border-radius: 14px;
  font-weight: bold;
  width:30px;
`
const Cancelbtn=styled.button`
background-color:white;
border: 1px solid rgb(2, 57, 2);
padding: 5px 18px;
color: rgb(2, 57, 2);
font-size: 16px;
border-radius: 14px;
font-weight: bold;`

const Input=styled.input`
border-radius:20px;
height:30px;
text-align:center;
`
