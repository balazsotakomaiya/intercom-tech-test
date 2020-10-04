import ImportCustomers from './Service/ImportCustomers';
import Location from "./Entity/Location";
import FilterInvitedCustomers from "./Service/FilterInvitedCustomers";

const dublinOffice = new Location(53.339428, -6.257664);

console.log('👋 Hello there, future Intercom colleague!');

new ImportCustomers('./data/customers.txt')
    .import()
    .then(customers => {
        console.log(`✅  Successfully imported ${customers.length} customers.`);
        console.log(`👉  Here's a list of all the customers within 100km's of your Dublin office:`);

        FilterInvitedCustomers(customers, dublinOffice)
            .forEach(customer => console.log(`> ${customer.name} (${customer.userId})`))
    });

