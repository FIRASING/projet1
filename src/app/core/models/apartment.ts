export class Apartment {
    id !: number;
    residenceId !: number;
    surface !: number;
    price !: number;
    status !: 'available' | 'sold';
}
