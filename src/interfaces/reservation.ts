interface Seller {
    image: string;
    name: string;
}

export interface IReservation {
    image: string;
    title: string;
    seller: Seller;
    hours: string | number;
    price: string | number;
    paymentType: string;
}
