import React from 'react'
import { FiPrinter } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPrint } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SearchContainer = () => {
  return (
    <SearchMain>
      <SearchBarContainer>
        <Input placeholder='Search...'/><FaSearch />
      </SearchBarContainer>
      <SearchBarBtn>
        <Button>Add Item</Button>
          <FiPrinter/>
      </SearchBarBtn>
    </SearchMain>
  )
}

export default SearchContainer

const SearchMain=styled.div`
display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
const SearchBarContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid gray;
border-radius: 15px;
padding: 8px 20px;
width: 27%;
background-color: white;
`

const SearchBarBtn=styled.div`
display: flex;
gap: 90px;
`
const Input=styled.input`
border: none;
width: 95%;
outline: none;
`
const Button=styled.div`
background-color:white;
border: 1px solid rgb(2, 57, 2);
padding: 5px 18px;
color: rgb(2, 57, 2);
font-size: 16px;
border-radius: 14px;
font-weight: bold;
`