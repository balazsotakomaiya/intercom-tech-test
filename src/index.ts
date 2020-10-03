import ImportCustomers from './Service/ImportCustomers';

console.log('👋 Hello there, future Intercom colleague!')
console.log('Reading customers.txt file...')

new ImportCustomers('./data/customers.txt')
    .import()
    .then(customers => {
        console.log(`✅  Successfully imported ${customers.length} customers.`)
    });

