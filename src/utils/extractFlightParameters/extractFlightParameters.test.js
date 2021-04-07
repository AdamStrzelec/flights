import { extractFlightParameters } from './extractFlightParameters';

const mockedData = `
HOCCLCOMPETITION CLASS: Paraglider (Standard) 
HPSITSITE: Unknown
HFDTE090620
B1309045309619N01642080EA0005700082
LXSX1.18
B1309055309622N01642081EA0006400083
LXSX1.10
B1309065309625N01642082EA0007200090
LXSX0.97
B1309075309628N01642083EA0007900098
`;

test('display extracted flight parameters array', () => {
    expect(extractFlightParameters(mockedData).length).toBe(4);
});