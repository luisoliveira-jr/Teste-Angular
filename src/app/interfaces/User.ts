export interface User {
    id?: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate?: string;
    phone: string;
    picture: string;
    /* location: {
        street: string;
        city: string;
        state: string;
        country: string;
        timezone: string;
    } */
}