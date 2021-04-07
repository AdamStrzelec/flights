const degreesToDecimal = (str) => {
    const deg = parseInt(str.substr(0,2));
    const min = parseFloat(str.substr(2,2)+'.'+str.substr(4));
    const dec = (min * 60) / (3600);
    return deg+dec;
  }

//extracting from flight params lan and lng and reduce their count
export const getGeolocations = (flightParams) => {
    const geolocations = [];
    flightParams.forEach((param, i) => {
        if(i%20===0){
            geolocations.push({
                lat: parseFloat(degreesToDecimal(param.substr(7,7))),
                lng: parseFloat(degreesToDecimal(param.substr(16,7)))
            })
        }
    })
    return geolocations;
}