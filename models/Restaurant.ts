export interface Restaurant {
    name: string;
    description: string;
    rating: number;
    reviewsCount: number;
    hours: string;
    deliveryFee: string;
    deliveryTime: string;
    priceFrom: string;
    isFavorite?: boolean;
}