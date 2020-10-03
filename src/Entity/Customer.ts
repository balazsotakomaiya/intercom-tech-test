import Location from './Location';

export default class Customer extends Location {
    public userId: number;

    public name: string;

    constructor(latitude: number, longitude: number, userId: number, name: string) {
        super(latitude, longitude)
        this.userId = userId;
        this.name = name;
    }
}