import React, { useState } from 'react';
import InputDataPanel from '../InputDataPanel/InputDataPanel';
import { getData } from '../../utils/getData/getData';
import Map from '../Map/Map';
import LoadingPanel from '../LoadingPanel/LoadingPanel';

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
            <LoadingPanel isLoadingData={isLoadingData}/>
        </>
    )
}

export default FlightsContainer;