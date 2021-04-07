import React, { useState } from 'react';
import InputDataPanel from '../InputDataPanel/InputDataPanel';
import { getData } from '../../utils/getData/getData';

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
        </>
    )
}

export default FlightsContainer;