import Customer from "../Entity/Customer";
import Location from "../Entity/Location";
import CalculateDistance from "./CalculateDistance";

/**
 * Get a filtered list of the customers whom are less than a 100km's away from the office,
 * sorted by userId in ascending order.
 *
 * @param customers
 * @param office
 */
export default function (customers: Array<Customer>, office: Location): Array<Customer> {
    const customersToInvite: Array<Customer> = [];

    customers.forEach((customer) => {
        const distanceBetweenCustomerAndOffice = CalculateDistance(office, customer);

        if (distanceBetweenCustomerAndOffice < 100) {
            customersToInvite.push(customer)
        }
    })

    return customersToInvite.sort((a, b) => (a.userId > b.userId) ? 1 : -1);
}