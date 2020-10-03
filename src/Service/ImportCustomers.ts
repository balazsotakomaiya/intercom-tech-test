import Customer from "../Entity/Customer";
import readline from 'readline';
import * as fs from "fs";

export default class ImportCustomers {
    private path: string;

    private customers: Array<Customer> = [];

    constructor(path: string) {
        this.path = path;

        return this;
    }

    private static jsonToCustomer(json: string): Customer {
        const { latitude, longitude, user_id, name } = JSON.parse(json);

        return new Customer(latitude, longitude, user_id, name);
    }

    public async import(): Promise<Array<Customer>> {
        const readFile = readline.createInterface({
            input: fs.createReadStream(this.path),
            output: process.stdout,
            terminal: false
        });

        for await (const line of readFile) {
            this.customers.push(ImportCustomers.jsonToCustomer(line));
        }

        return this.customers;
    }
}
