export interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
    thumbnail: string,
    status: true,
    location: string
}

export interface ProductDetail extends Product {
    description: string
}