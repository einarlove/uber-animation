import React from 'react'
import styled from 'styled-components'
import IOSStatusBar from './IOSStatusBar'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Header = styled.header`
  background-color: black;
  height: 45px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const upArrow = (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
  </svg>
)

const CloseButton = styled.div`
  fill: white;
  padding: 12px;
`

const HeaderTitle = styled.div`
  color: white;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  line-height: .5;
`

const Cards = styled.div`
  background-color: black;
`

const Card = styled.div`
`


export default () => (
  <Container>
    <IOSStatusBar white background="black" />
    <Header>
      <CloseButton>{upArrow}</CloseButton>
      <HeaderTitle>Messages</HeaderTitle>
    </Header>

    <Cards>
      <Card />
      <Card />
    </Cards>
  </Container>
)
