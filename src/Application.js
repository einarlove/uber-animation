import React from 'react'
import styled from 'styled-components'
import SearchMap from './SearchMap'
import ContentDrawer from './ContentDrawer'

const Container = styled.div`
  font-family: ff-clan-web-pro, Roboto, arial;

  @font-face {
    font-family: ff-clan-web-pro;
    font-style: normal;
    font-weight: 300;
    src: url(https://uber-design-herokuapp-com.global.ssl.fastly.net/03b64805a8cd2d53fadc5814445c2fb5.woff2) format("woff2"),
         url(https://uber-design-herokuapp-com.global.ssl.fastly.net/341462317dd033a9d3d14a14a55e9d09.woff) format("woff")
  }
  @font-face {
    font-family: ff-clan-web-pro;
    font-style: normal;
    font-weight: 400;
    src: url(https://uber-design-herokuapp-com.global.ssl.fastly.net/ca614426b50ca7d007056aa00954764b.woff2) format("woff2"),
         url(https://uber-design-herokuapp-com.global.ssl.fastly.net/a9e39356639e85c045725ab277a8d423.woff) format("woff")
  }
  @font-face {
    font-family: ff-clan-web-pro;
    font-style: normal;
    font-weight: 500;
    src: url(https://uber-design-herokuapp-com.global.ssl.fastly.net/ca104da8af9a2e0771e8fe2b31f8ec1e.woff2) format("woff2"),
         url(https://uber-design-herokuapp-com.global.ssl.fastly.net/f39b50d5fd213136c91b31d423ab89f1.woff) format("woff")
  }
  @font-face {
    font-family: ff-clan-web-pro;
    font-style: normal;
    font-weight: 700;
    src: url(https://uber-design-herokuapp-com.global.ssl.fastly.net/ad875b9818771a1350232d99278c40e8.woff2) format("woff2"),
         url(https://uber-design-herokuapp-com.global.ssl.fastly.net/49e5932ee0897877dbf33c945b7e408f.woff)
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  background: #fafafa;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`
const MobileView = styled.div`
  background: white;
  position: relative;
  width: 320px;
  height: 568px;
  box-shadow: 0 2px 80px 0 rgba(0, 0, 0, .1);
  border-radius: 2px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    height: 100vh;
    box-shadow: none;
  }
`


const Description = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 3em;
  line-height: 2.1;
  color: #222;

  @media (max-width: 600px) {
    font-size: .875em;
    padding: 3em 1.5em;
  }


  .kicker {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.5px;
    margin-bottom: .4em;
  }

  h1 {
    font-weight: 300;
    margin: 0;
    font-size: 2.5em;
    line-height: 1.2;

    @media (max-width: 340px) {
      font-size: 2.2em;
    }
  }

  h2 {
    margin: 1em 0 0;
    font-size: 0.875em;
    text-transform: uppercase;
    letter-spacing: .5px;
  }

  h1 + p {
    margin-top: 1.2em;
  }

  ul {
    margin: .1em 0 1em;
    padding-left: 2em;
    list-style: square;
  }

  li {
    line-height: 1.6;
    margin-top: .6em;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #333;
  }
`

export default () => (
  <Container>
    <MobileView>
      <SearchMap />
      <ContentDrawer />
    </MobileView>

    <Description>
      <div className="kicker">Work in progress</div>
      <h1>Uber animations</h1>
      <p>The Uber app have some pretty neat animations on interaction. Lets try to recreate them.</p>

      <h2>Caveats</h2>
      <ul>
        <li>Only tested on Chrome and Safari</li>
        <li>Chained by the web technologies</li>
        <li>Assumes your scrollbars are hidden</li>
      </ul>

      <p>You can view the source on <a href="https://github.com/einarlove/uber-animation">github</a>.</p>
    </Description>
  </Container>
)
