
export interface Address {
    id: string;
    user_id: string;
    zip_code: string;
    city: string;
    street: string;
    district: string;
    uf: string;
    number: string;
    complement: string;
    name: string;
    phone: string;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    addresses: [Address]
}

export interface Order {
    id: string;
    address_id: string;
    user_id: string;
    total_value: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    products: [{
        id: string;
        amount: number;
        product: Product;
    }]
}

export interface Product {
    id: string;
    title: string;
    value: number;
    description: string;
    created_at: string;
    updated_at: string;
    inventory?: Inventory;
    tags?: [Tag]
}

interface Inventory {
    id: string;
    amount: number;
}

interface Tag {
    id: string;
    tag: string;
    product_id: string;
}