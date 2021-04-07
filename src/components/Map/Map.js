import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const center = {
  lat: 51.11520,
  lng: 17.18142
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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {geolocations.length>0 &&
          <Polyline 
            path = {geolocations}
            geodesic = {true}
            options={{strokeColor: '#00FF00',strokeWeight: 2}}
            strokeOpacity = {1.0}
            strokeWeight = {2}
          />
        }

        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)