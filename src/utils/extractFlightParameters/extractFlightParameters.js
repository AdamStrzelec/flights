export const extractFlightParameters = (data) => {
    const regex = /B[0-9]{13}N[0-9]{8}EA[0-9]{10}/;
    return data.split('\n').filter(item => regex.test(item));
}
