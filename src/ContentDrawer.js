import React from 'react'
import styled from 'styled-components'
import IOSStatusBar from './IOSStatusBar'
import { TimelineMax, TweenLite, Cubic, Linear } from 'gsap'
import registerScrollListener from './registerScrollListener'
import 'gsap/ScrollToPlugin'

const mapRange = (value, in_min, in_max, out_min, out_max) => (
  (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
)

const mapRangeLimit = (value, in_min, in_max, out_min, out_max) => (
  Math.max(out_min, Math.min(out_max, mapRange(value, in_min, in_max, out_min, out_max)))
)

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
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  pointer-events: auto;

  ${props => props.locked && `
    pointer-events: none;
  `}
`

const CardsInner = styled.div`
  overflow: hidden;
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
    whiteStatusBar: false,
    locked: true,
  }

  componentDidMount() {
    registerScrollListener(this.onScroll, this.cardsNode)
    this.cardsInnerNode.addEventListener('touchstart', this.onTouchStart)

    this.totalScrollLength = this.cardsNode.offsetHeight - 60
    this.semiExpandedAnchor = this.totalScrollLength - 55

    this.timeline = new TimelineMax({ paused: true })
      .set(this.cardsInnerNode, {
        transformOrigin: 'center top',
        marginTop: this.totalScrollLength,
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
        ease: Linear.easeNone,
      }, 0)

      .addLabel('semi-expanded')
      .addCallback(() => this.setState({ minimized: false }))

      .to(this.node, .4, {
        backgroundColor: 'transparent',
      }, 1.6)
      .to(this.titleNode, 1, {
        opacity: 0,
        y: 130,
      }, 1)
      .to(this.cardsInnerNode, 1, {
        borderRadius: 4,
        scale: 0.95,
      }, 1)
      .addCallback(() =>
        this.setState({ whiteStatusBar: true })
      , 1.6)
      .addCallback(() =>
        this.setState({ whiteStatusBar: false })
      , 1.7)

      .addLabel('minimized')
      .addCallback(() => this.setState({
        minimized: true,
        locked: true,
      }))

    this.timeline.seek('semi-expanded', true)
  }

  onScroll = () => {
    const scrollTop = this.cardsNode.scrollTop

    const expandTween = mapRangeLimit(
      scrollTop, this.totalScrollLength, this.semiExpandedAnchor,
      this.timeline.getLabelTime('expanded'), this.timeline.getLabelTime('semi-expanded')
    )
    const semiExpandTween = mapRangeLimit(
      scrollTop, this.semiExpandedAnchor, 0,
      0, this.timeline.getLabelTime('minimized') - this.timeline.getLabelTime('semi-expanded')
    )

    this.timeline.seek(expandTween + semiExpandTween, false)
  }

  expand = () => {
    TweenLite.to(this.cardsNode, .5, {
      scrollTo: { y: this.semiExpandedAnchor },
      ease: Cubic.easeOut,
    })
  }

  minimize = () => {
    const duration = 0.4 + ((this.cardsNode.scrollTop - this.semiExpandedAnchor) / 100 * 0.2)
    TweenLite.to(this.cardsNode, duration, {
      scrollTo: { y: 0 },
      ease: Cubic.easeOut,
    })
  }

  isMinimized() {
    return this.timeline && this.timeline.currentLabel() === 'minimized'
  }

  onClick = () => {
    if (!this.isMinimized()) {
      this.minimize()
    }
  }


  onCardsClick = () => {
    if (this.isMinimized()) {
      this.expand()
    }
  }

  onTouchStart = () => {
    if (this.state.minimized) {
      this.setState({ locked: false })
    }
  }

  unlock = () => {
    this.setState({ locked: false })
  }

  lock = () => {
    if (this.state.minimized) {
      this.setState({ locked: true })
    }
  }

  render() {
    return (
      <Container innerRef={ref => this.node = ref} onClick={this.onClick}>
        <IOSStatusBar white={this.state.whiteStatusBar} />
        <Header>
          <MenuButton>{upArrow}</MenuButton>
          <HeaderTitle innerRef={ref => this.titleNode = ref}>Messages</HeaderTitle>
        </Header>

        <Cards
          innerRef={ref => this.cardsNode = ref}
          onClick={this.onCardsClick}
          locked={this.state.locked}
        >
          <CardsInner
            innerRef={ref => this.cardsInnerNode = ref}
            onTouchStart={this.unlock}
            onMouseOver={this.unlock}
            onMouseLeave={this.lock}
            onTouchLeave={this.lock}
          >
            <Card background="/free-rides-card.png" ratio={552 / 640} />
            <Card background="/shortcut-card.png" ratio={682 / 640} />
          </CardsInner>
        </Cards>
      </Container>
    )
  }
}
