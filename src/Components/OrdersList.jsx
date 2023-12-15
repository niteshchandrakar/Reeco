import React, { useState } from "react";
import { TfiCheck } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import PopupMissing from "./PopupMissing";
import { useSelector, useDispatch } from "react-redux";
import { available, missing, missingUrgent } from "../redux/actions";
import EditModule from "./EditModule";
import avacad from "./avacad.jpg";
import styled from "styled-components";
const OrdersList = () => {
  const [popup, setPopup] = useState(false);
  const [editModule, setEditModule] = useState(false);
  const [id, setId] = useState(null);
  const [missingData, setMissingData] = useState(null);
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.Reducer);
const[color,setColor]=useState("")
  
  const handleTick = (id) => {
    dispatch(available(id));
  };
  const handleX = (id) => {
    setPopup(true);
    setId(id);
    setMissingData(orders.filter((item) => item.id === id));
  };
  const handleNo = () => {
    dispatch(missing(id));
    setPopup(false);
  };
  const handleYes = () => {
    dispatch(missingUrgent(id));
    setPopup(false);
  };
  const handleEdit = (id) => {
    setEditModule(true);
    setMissingData(orders.filter((item) => item.id === id));
  };
  const handleCancel = () => {
    setEditModule(false);
  };
  const handleSend = () => {
    setEditModule(false);
  };
  return (
    <div>
      <Table>
        <thead>
          <Tr style={{borderBottom: "1px solid gray"}}>
            <Th></Th>
            <Th>Product Name</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </thead>
        <tbody>
          {orders.map((item) => {
            let color=""
            if(item.status=="Missing"){
              color="#F66D44"
              
            }else if(item.status=="Missing-Urgent"){
             color="Red"
            }else if(item.status=="Missing Product" ||item.status=="Quality is not the same" 
            || item.status=="Price is not the same" ||item.status=="other" 
            ){
            color="#3DCA72"
            }
            return (
              <tr key={item.id}>
                <Td>
                  <Image style={{padding:"0"}} src={avacad} alt="image" />
                </Td>
                <Td>{item.productName}</Td>
                <Td>{item.brand}</Td>
                <Td>${item.price}/6*1LB</Td>
                <Td>{item.quantity}x6*1LB</Td>
                <Td>${item.price*item.quantity}</Td>
                <Td  >
                 <text style={{backgroundColor:item.status=="Approved"?"green":color, padding:"6px", borderRadius:"10px"}}>{item.status}</text>
                 
                </Td>
                <Tdbutton>
                  <TfiCheck
                    style={{color:item.status=="Approved"?"green":""}}
                    
                    onClick={() => handleTick(item.id)}
                  />
                  
                  <TfiClose
            
              style={{color:color}}
                    
                    onClick={() => handleX(item.id)}
                  />
                  <p  onClick={() => handleEdit(item.id)}>
                    Edit
                  </p>
                </Tdbutton>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {popup && (
        <PopupMisssingContainer>
          <PopupMissing
            setPopup={setPopup}
            missingData={missingData}
            handleYes={handleYes}
            handleNo={handleNo}
          />
        </PopupMisssingContainer>
      )}
      {editModule && (
        <EditModulee>
          <EditModule
            handleCancel={handleCancel}
            missingData={missingData}
            handleSend={handleSend}
          />
        </EditModulee>
      )}
    </div>
  );
};

export default OrdersList;

const Table=styled.table`
border-top: 1px solid gray;

width: 100%;
text-align: center;
`
const Tr=styled.tr`
font-size: 20px; 
  border:1px solid gray;
  border-radius: 5px;
  border-bottom: 1px solid gray;
`

const Td=styled.td`
padding: 0px 0px;
  border-bottom: 1px solid gray;
`
const Tdbutton=styled.td`
padding: 15px 0px;
border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const Image=styled.img`
height: 45px;
`

const PopupMisssingContainer=styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const EditModulee=styled.div`
background-color: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Th=styled.th`
border-bottom: 1px solid gray;
`
