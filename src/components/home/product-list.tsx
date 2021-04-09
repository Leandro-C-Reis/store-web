import 'tailwindcss/tailwind.css'

import Card from './product-card';
import Left from '@/public/assets/arrows/left';
import Right from '@/public/assets/arrows/right';

const ProductList = ({ Title, Icon, Items }) => {

    return (
        <div className="w-full h-96 bg-gray-100 text-gray-600">
            <div className="flex items-center p-2 relative">
                <Icon className="w-18px h-18px fill-current ml-16 mr-1" />
                <div>{Title}</div>
            </div>
            <div className="flex items-center">
                <Left className="w-50px h-50px fill-current cursor-pointer" />
                <ul className="flex justify-evenly items-center w-full" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
                <Right className="w-50px h-50px fill-current cursor-pointer" />
            </div>
        </div>
    );
}

export default ProductList;