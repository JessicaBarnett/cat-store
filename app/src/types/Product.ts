export type Product = {
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    images: string[],
    brand?: string,
    kind?: string,
    concern?: string, // veterinary products
    consistency?: string // food products
}

export default Product;