import React from 'react'
import { GoogleMap, useJsApiLoader, Polyline, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const containerStyle = {
  width: '750px',
  height: '650px'
};

const Map = ({ geolocations }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_MAP_KEY}`
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
    
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className="map-wrapper">
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={geolocations.length>0 ? 
          {
            lat: (geolocations[0].lat+geolocations[geolocations.length-1].lat)/2,
            lng: (geolocations[0].lng+geolocations[geolocations.length-1].lng)/2
          }
             : 
          {
            lat: 51.11520,
            lng: 17.18142
          }}
        
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {geolocations.length>0 &&
          <>
            <Polyline 
              path = {geolocations}
              geodesic = {true}
              options = {{strokeColor: '#00FF00',strokeWeight: 2}}
              strokeOpacity = {1.0}
              strokeWeight = {2}
            />
            <Marker 
              position = {geolocations[0]}
              title = {'Start lotu'}
            />
            <Marker 
              position = {geolocations[geolocations.length-1]}
              title = {'Koniec lotu'}
            />
          </>
        }

        <></>
      </GoogleMap>
    </div>
  ) : <></>
}

Map.propTypes = {
  geolocations: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }))
}

export default React.memo(Map)