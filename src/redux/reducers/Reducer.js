import { AVAILABLE,  EDIT_DATA, MISSING, MISSING_URGENT } from "../action-types";

const initalState = [
    {
      id: 1,
      productName: "Chicken Tikka",
      brand: "Hormel Black Labelmany",
      price: "60.67",
      quantity: "1",
      total: 0,
      status: "",
    },
    {
      id: 2,
      productName: "Chiken Malai",
      brand: "Hormel Black Labelmany",
      price: "61.67",
      quantity: "2",
      total: 0,
      status: "",
    },
    {
      id: 3,
      productName: "Chicken Kadai",
      brand: "Hormel Black Labelmany",
      price: "62.67",
      quantity: "3",
      total: 0,
      status: "",
    },
    {
      id: 4,
      productName: "Chicken Bhuna",
      brand: "Hormel Black Labelmany",
      price: "63.67",
      quantity: "4",
      total: 0,
      status: "",
    },
    {
      id: 5,
      productName: "Chicken Biryani",
      brand: "Hormel Black Labelmany",
      price: "64.67",
      quantity: "5",
      total: 0,
      status: "",
    },
    {
      id: 6,
      productName: "Chicken 65",
      brand: "Hormel Black Labelmany",
      price: "65.67",
      quantity: "6",
      total: 0,
      status: "",
    },
    {
      id: 7,
      productName: "Chicken Korma",
      brand: "Hormel Black Labelmany",
      price: "66.67",
      quantity: "1",
      total: 0,
      status: "",
    },
    {
      id: 8,
      productName: "Chicken Curry",
      brand: "Hormel Black Labelmany",
      price: "67.67",
      quantity: "2",
      total: 0,
      status: "",
    },
    {
      id: 9,
      productName: "Chicken Tikka",
      brand: "Hormel Black  Labelmany",
      price: "68.67",
      quantity: "3",
      total: 0,
      status: "",
    },
    {
      id: 10,
      productName: "Egg Fried",
      brand: "Hormel Black Labelmany",
      price: "69.67",
      quantity: "4",
      total: 0,
      status: "",
    },
  ]

  export const Reducer = (state = initalState,{type,payload})=>{
    switch(type){
        case AVAILABLE:
            return state.map((item)=>{
              if(item.id===payload){
                return {...item,status:"Approved"}
              }else{
                return item
              }
               
            });
        case MISSING:
          return state.map((item)=>{
            if(item.id===payload){
              return {...item,status:"Missing"}
            }else{
              return item
            }
             
          });
        case MISSING_URGENT:
          return state.map((item)=>{
            if(item.id===payload){
              return {...item,status:"Missing-Urgent"}
            }else{
              return item
            }
             
          });
          case EDIT_DATA:
            return state.map((item)=>{
              if(item.id === payload.id){
                return {...item,...payload}
              }else{
                return item
              }
            });
        default :
        return state;
    }
  }
