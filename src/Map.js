import React from 'react'
import styled from 'styled-components'
import { withGoogleMap, GoogleMap } from 'react-google-maps'
import withScriptjs from "react-google-maps/lib/async/withScriptjs"
import googleMapsStyles from './googleMapsStyles.json'

const API_KEY = 'AIzaSyBKb4u5SsuO9FYYgf2OCp_mIFO7DC3In3A'

const Container = styled.div`
  position: relative;
  flex: auto;
`

const Map = withScriptjs(withGoogleMap(() => (
  <Container>
    <GoogleMap
      center={{lat: 59.92, lng: 10.74}}
      zoom={14}
      options={{
        styles: googleMapsStyles,
        disableDefaultUI: true,
      }}
    />
  </Container>
)))

const fillStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

Map.defaultProps = {
  containerElement: <div style={fillStyle} />,
  mapElement: <div style={fillStyle} />,
  loadingElement: <div />,
  googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`
}

export default Map
