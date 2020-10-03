import CalculateDistance from "./CalculateDistance";
import Location from "../Entity/Location";

describe('Calculate Distance', () => {
    it('should be able to calculate the distance between two locations', function () {
        const dublinOffice = new Location(53.339428, -6.257664);
        const myApartmentBuilding = new Location(53.473048, -2.252109);

        // tl:dr – I'm not invited.
        expect(CalculateDistance(dublinOffice, myApartmentBuilding)).toBe(265.8982650806486);
    });
})