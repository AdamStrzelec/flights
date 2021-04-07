
//extracting from flight params lan and lng and reduce their count
export const getGeolocations = (flightParams) => {
    const geolocations = [];
    flightParams.forEach((param, i) => {
        if(i%10===0){
        geolocations.push({
        lat: parseFloat(param.substr(7,2)+'.'+param.substr(9,5)),
        lng: parseFloat(param.substr(16,2)+'.'+param.substr(18,5))
        })
        }
    })
    return geolocations;
}