export default class Customer {
    public latitude: string;

    public longitude: string;

    public userId: number;

    public name: string;

    constructor(latitude: string, longitude: string, userId: number, name: string) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.userId = userId;
        this.name = name;
    }
}