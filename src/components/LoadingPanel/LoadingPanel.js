import React from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";

const LoadingPanel = ({ isLoadingData }) => {

    return(
        <div>
            {isLoadingData ? 
                <div className="loading-panel-wrapper">
                    <Loader 
                        type="Circles"
                        color="#E5E7E9"
                        height={100}
                        width={100}
                    />
                    <h3>Pobieranie danych</h3>
                </div>
            :<></>}
        </div>
    )
}

LoadingPanel.propTypes = {
    isLoadingData: PropTypes.bool
}

export default LoadingPanel;