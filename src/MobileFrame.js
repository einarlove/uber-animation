import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  min-height: 100vh;
  background: #fafafa;
`

const Inner = styled.div`
  background: white;
  position: relative;
  margin: auto;
  flex: auto;
  width: 100%;
  height: 100%;
  max-width: 320px;
  max-height: 568px;
  box-shadow: 0 2px 60px 0 rgba(0, 0, 0, .1);
  border-radius: 2px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <Container>
    <Inner>{children}</Inner>
  </Container>
)
