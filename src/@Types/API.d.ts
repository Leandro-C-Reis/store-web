
export interface IAddress {
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

export interface IUser {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    addresses: [IAddress]
}

export interface IOrder {
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

export interface IProduct {
    id: string;
    title: string;
    value: number;
    description: string;
    created_at: string;
    updated_at: string;
    inventory?: IInventory;
    tags?: [ITag]
}

interface IInventory {
    id: string;
    amount: number;
}

interface ITag {
    id: string;
    tag: string;
    product_id: string;
}