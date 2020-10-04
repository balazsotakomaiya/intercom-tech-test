import Customer from "../Entity/Customer";
import FilterInvitedCustomers from "./FilterInvitedCustomers";
import Location from "../Entity/Location";

describe('Filter Invited Customers', () => {
    it('should return an empty array with an address too far away', function () {
        const dublinOffice = new Location(53.339428, -6.257664);

        const customers = [
            new Customer(53.473048, -2.252109, 1, 'Balazs'),
        ];

        expect(FilterInvitedCustomers(customers, dublinOffice)).toEqual([]);
    });

    it('should only return Ian Kehoe and Eoin Ahearn, in ascending order', function () {
        const dublinOffice = new Location(53.339428, -6.257664);

        const ian = new Customer(53.2451022, -6.238335, 4, 'Ian Kehoe');
        const eoin = new Customer(54.0894797, -6.18671, 8, 'Eoin Ahearn');

        const customers = [
            new Customer(53.473048, -2.252109, 1, 'Balazs'),
            ian,
            new Customer(51.503764, -0.127410, 10, 'Boris Johnson'),
            eoin,
        ];

        expect(FilterInvitedCustomers(customers, dublinOffice)).toEqual([ian, eoin]);
    });
})