import { getFlightData } from '../../api/getFlightData';
import { extractFlightParameters } from '../extractFlightParameters/extractFlightParameters';
import { getGeolocations } from '../getGeolocations/getGeolocations';

export const getData = async (url, setIsLoadingData, setGeolocations) => {
    try{
        const data = await getFlightData(url).then(response => response.data);
        const flightParameters = extractFlightParameters(data);
        setGeolocations(getGeolocations(flightParameters));

        setIsLoadingData(false);
    }
    catch (error) {
        console.log(error);
    }

}