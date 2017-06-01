import React from 'react'
import styled from 'styled-components'
import MobileFrame from './MobileFrame'
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
  flex-direction: column;
  flex: auto;
`

const MoreContent = styled.div`
`
export default () => (
  <MobileFrame>
    <Container>
      <SearchMap />
      <ContentDrawer />
    </Container>
  </MobileFrame>
)


/*
 Note
 https://greensock.com/docs/#/HTML5/GSAP/Utils/Draggable/
 https://www.dropbox.com/work/personal?preview=Uber+animations.mov
*/
