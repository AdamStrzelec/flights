import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getFlightData = (flightUrl) => axios.get(
    `${API_URL}/flight?url=${flightUrl}`
    )