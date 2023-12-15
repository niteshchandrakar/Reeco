import React from 'react'
import SearchContainer from './SearchContainer'
import OrdersList from './OrdersList'
import styled from 'styled-components'

const MainContainer = () => {
  return (
    <MainContainerr>
      <SearchContainer/>
      <OrdersList/>
    </MainContainerr>
  )
}

export default MainContainer

const MainContainerr=styled.div`
margin: 0px 60px;
  margin-top: 30px;
  padding: 40px;
  background-color: white;
  margin-bottom: 40px;
`
