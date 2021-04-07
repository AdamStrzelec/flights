import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputDataPanel = ({ handleClick }) => {

    const [inputValue, setInputValue] = useState('');

    return(
        <div className="input-data-wrapper">
            <input 
                type="text" 
                placeholder={'Wprowadź link IGC'}
                name="igc_link_input"
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button onClick={()=>handleClick(inputValue)}>Pobierz dane</button>
        </div>
    )
}

InputDataPanel.propTypes = {
    handleClick: PropTypes.func
}

export default InputDataPanel;