import React, { useState } from 'react';
import InputDataPanel from '../InputDataPanel/InputDataPanel';

const FlightsContainer = () => {

    const [isLoadingData, setLoadingData] = useState(false);
    
    const getData = (inputValue) => {
        
    }

    return(
        <>
            <InputDataPanel handleClick={getData}/>
        </>
    )
}

export default FlightsContainer;