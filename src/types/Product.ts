export type Product = {
    id: string,
    name: string,
    description: string,
    price: string,
    category: string,
    images: unknown // ProductImage type, will fill in later
}

export default Product;