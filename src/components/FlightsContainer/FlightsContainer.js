import React, { useState } from 'react';
import InputDataPanel from '../InputDataPanel/InputDataPanel';
import { getData } from '../../utils/getData/getData';
import Map from '../Map/Map';

const FlightsContainer = () => {

    const [isLoadingData, setIsLoadingData] = useState(false);
    const [geolocations, setGeolocations] = useState([]);
    
    const handleData = (inputUrl) => {
        setIsLoadingData(true);
        getData(inputUrl, setIsLoadingData, setGeolocations)
    }

    return(
        <>
            <InputDataPanel handleClick={handleData}/>
            <Map geolocations={geolocations}/>
        </>
    )
}

export default FlightsContainer;