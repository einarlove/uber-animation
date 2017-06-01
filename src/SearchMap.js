import React from 'react'
import styled from 'styled-components'
import Map from './Map'

const Container = styled.div`
  position: relative;
  flex: auto;
  display: flex;
  flex-direction: column;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`

const Search = styled.div`
  position: relative;
  height: 56px;
  margin: 96px 0;
  width: 350px;
  max-width: 85%;
  align-self: center;
  pointer-events: auto;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  background: white;
  box-sizing: border-box;
  border: 0;
  font: inherit;
  border-radius: 2px;
  box-shadow: 0px 10px 25px 0 rgba(0, 0, 0, 0.2);
  text-indent: 2.2em;
  font-size: 18px;
  appearance: none;
  -webkit-font-smoothing: antialiased;

  &:focus {
    outline: none;
  }
`

const DestinationMarker = styled.div`
  position: absolute;
  left: 1.25em;
  top: 50%;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  background-color: black;
`

export default () => (
  <Container>
    <Map />
    <Overlay>
      <Search>
        <DestinationMarker />
        <Input placeholder="Where to?" />
      </Search>
    </Overlay>
  </Container>
)
