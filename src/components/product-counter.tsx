import { useState } from 'react';

import Up from '@/public/assets/arrows/up';
import Down from '@/public/assets/arrows/down';

const ProductCounter = ({ max }) => {
    const [quantity, setQuantity] = useState(1);

    function handleChangeQuantity(sum: boolean) {
        if (sum && quantity < max) {
            return setQuantity(quantity + 1);
        }

        if (!sum && quantity > 1) {
            return setQuantity(quantity - 1);
        }
    }

    return (
        <div className="border border-gray-400 w-70px h-50px rounded-md flex text-gray-500 bg-gray-100">
            <div className="w-2/4 h-full flex items-center justify-center font-poppins font-bold text-sm">
                <h1>
                    {quantity}
                </h1>
            </div>
            <div className="w-2/4 h-full flex flex-col justify-evenly">
                <button onClick={() => handleChangeQuantity(true)} style={{ outline: 'none' }}>
                    <Up className="w-10px h-10px stroke-current ml-1" />
                </button>
                <button onClick={() => handleChangeQuantity(false)} style={{ outline: 'none' }}>
                    <Down className="w-10px h-10px stroke-current ml-1" />
                </button>
            </div>
        </div>
    );
}

export default ProductCounter;