import React from 'react'
import styled from 'styled-components'
import IOSStatusBar from './IOSStatusBar'
import { TimelineMax, Sine } from 'gsap'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  pointer-events: none;
`

const Header = styled.header`
  height: 45px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: none;
`

const upArrow = (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
  </svg>
)

const HeaderTitle = styled.div`
  color: white;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.4px;
  margin-top: -3px;
`

const Cards = styled.div`
  background-color: black;
  overflow: scroll;
  pointer-events: auto;
`

const Card = styled.div`
  width: 100%;
  padding-bottom: ${props => props.ratio * 100}%;
  background-image: url("${props => props.background}");
  background-size: 100%;
  margin-bottom: 8px;
`

const MenuButton = styled.div`
  fill: white;
  padding: 12px;
  pointer-events: auto;
`
export default class extends React.Component {
  state = {
    minimized: true,
  }

  componentDidMount() {
    this.cardsNode.addEventListener('scroll', this.onScroll)

    this.timeline = new TimelineMax({
      paused: true,
    })
      .set(this.cardsNode, {
        clipPath: 'inset(0px -1px)',
      })
      .set(this.titleNode, {
        force3D: false,
        transformOrigin: 'left center',
      })

      .addLabel('expanded')
        .to(this.titleNode, 1, {
          scale: 1.28,
          x: -34,
          y: 55,
        }, 0)
        .to(this.cardsNode, 1, {
          y: 60,
        }, 0)

      .addLabel('semi-expanded')
        .to(this.titleNode, 0.6, {
          opacity: 0,
          y: 130,
        }, 1)
        .to(this.node, .8, {
          backgroundColor: 'transparent',
        }, 1.2)
        .to(this.cardsNode, 1, {
          y: this.cardsNode.offsetHeight - 65,
          borderRadius: 4,
          clipPath: 'inset(0 8px)',
        }, 1)
      .addLabel('minimized')

    this.timeline.seek('minimized')

    // setInterval(() => {
    //   this.setState({ minimized: !this.state.minimized })
    // }, 2000)
  }

  onScroll = () => {
  }

  expand = () => {
    this.timeline.timeScale(2.5)
    this.timeline.tweenTo('semi-expanded', {
      ease: Sine.easeOut,
      onComplete: () => this.setState({ minimized: false }),
    })
  }

  minimize = () => {
    this.timeline.timeScale(1.5)
    this.timeline.tweenTo('minimized', {
      ease: Sine.easeOut,
      onComplete: () => this.setState({ minimized: true })
    })
  }

  onClick = () => {
    if (!this.isMinimized()) {
      this.minimize()
    }
  }

  isMinimized() {
    return this.timeline && this.timeline.currentLabel() === 'minimized'
  }

  onCardsClick = () => {
    if (this.isMinimized()) {
      this.expand()
    }
  }

  render() {
    return (
      <Container
        innerRef={ref => this.node = ref}
        onClick={this.onClick}
        minimized={this.state.minimized}
      >
        <IOSStatusBar white />
        <Header>
          <MenuButton>{upArrow}</MenuButton>
          <HeaderTitle innerRef={ref => this.titleNode = ref}>Messages</HeaderTitle>
        </Header>

        <Cards innerRef={ref => this.cardsNode = ref} onClick={this.onCardsClick}>
          <Card background="/free-rides-card.png" ratio={552 / 640} />
          <Card background="/shortcut-card.png" ratio={682 / 640} />
        </Cards>
      </Container>
    )
  }
}
