import { useState, useEffect } from 'react';

import Card from './product-card';
import Left from '@/public/assets/arrows/left';
import Right from '@/public/assets/arrows/right';

const ProductList = ({ Title, Icon, Items, Id }) => {
    const [translated, setTranslated] = useState(0);
    const MAX_ITEMS = 6;
    const ITEM_LEN = 200;
    const items = 11;

    function handleNext() {
        if (translated < (items - MAX_ITEMS) * ITEM_LEN)
        {   
            setTranslated(translated + ITEM_LEN);
        }
    }

    function handlePrev() {
        if (translated > 0)
        {
            setTranslated(translated - ITEM_LEN);
        }
    }

    useEffect(() => {
        const li = document.getElementById(Id);
        const Left = document.getElementById(`left-${Id}`);
        const Right = document.getElementById(`right-${Id}`);

        li.style.transform = `translateX(-${translated}px)`;

        if (translated == 0)
        {
            Left.style.opacity = '0';
            Left.style.cursor = 'auto';
        }
        else if (translated >= (items - MAX_ITEMS) * ITEM_LEN)
        {
            Right.style.opacity = '0';
            Right.style.cursor = 'auto'
        }
        else {
            Left.style.opacity = '1';
            Right.style.opacity = '1';
            Left.style.cursor = 'pointer';
            Right.style.cursor = 'pointer';
        }


    }, [translated]);

    return (
        <div className="w-full h-96 bg-gray-100 text-gray-600">
            <div className="flex items-center p-2 relative">
                <Icon className="w-18px h-18px fill-current ml-12 mr-1" />
                <div>{Title}</div>
            </div>
            <div className="flex items-center w-full overflow-hidden">
                <button id={`left-${Id}`} className="transition-all" onClick={handlePrev} style={{ outline: 'none' }}>
                    <Left className="w-50px h-50px fill-current" />
                </button>
                <ul className="w-max overflow-hidden h-350px">
                    <li className="w-max transition-all transform flex space-x-5" id={Id}>
                        <Card item={1}/>
                        <Card item={2}/>
                        <Card item={3}/>
                        <Card item={4}/>
                        <Card item={5}/>
                        <Card item={6}/>
                        <Card item={7}/>
                        <Card item={8}/>
                        <Card item={9}/>
                        <Card item={10}/>
                        <Card item={11}/>
                    </li>
                </ul>
                <button id={`right-${Id}`} className="transition-all" onClick={handleNext} style={{ outline: 'none' }}>
                    <Right className="w-50px h-50px fill-current" />
                </button>
            </div>
        </div>
    );
}

export default ProductList;