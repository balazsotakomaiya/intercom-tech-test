import ImportCustomers from "./ImportCustomers";
import Customer from "../Entity/Customer";

describe('Import Customers', () => {
    it('should convert a single raw JSON line to a customer',  function () {
        const customer = ImportCustomers.jsonToCustomer(
            '{"latitude": "53.807778", "user_id": 28, "name": "Charlie Halligan", "longitude": "-7.714444"}'
        );

        expect(customer).toEqual(
            new Customer(53.807778, -7.714444, 28, "Charlie Halligan")
        );
    });

    it('should import all customers', async function () {
        const customers = await new ImportCustomers('./data/customers.txt').import();

        expect(customers).toHaveLength(32);
        expect(customers[0]).toEqual(
            new Customer(52.986375, -6.043701, 12, "Christina McArdle")
        )
    });
})