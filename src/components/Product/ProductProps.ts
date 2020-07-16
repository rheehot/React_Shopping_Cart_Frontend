export type ProductItemProps = {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon?: boolean;
};

export type ProductPriceProps = {
    availableCoupon: boolean;
    color: string;
};
