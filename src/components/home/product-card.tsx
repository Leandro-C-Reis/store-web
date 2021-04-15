import Link from 'next/link';

import CardIcon from '@/public/assets/card';
import NoImage from '@/public/assets/no-image';

const ProductCard = ({ className = '', item }) => {
    return (
        <Link as={'/product'} href="/product">
            <a className={`${className} w-180px h-300px border rounded-md p-2 flex flex-col items-center justify-center text-gray-400 bg-white shadow-md cursor-pointer hover:shadow-xl`}>
                <div className="flex align-center justify-center">
                    <div className="w-90px h-110px bg-gray-300 flex items-center justify-center">
                        <NoImage className="w-24px h-24px fill-current text-gray-50" />
                    </div>
                </div>
                <div className="mt-3 flex flex-col items-start justify-between h-28">
                    <h5 className="text-xs">Categoria</h5>
                    <h3 className="text-base text-gray-600">Titulo</h3>
                    <span className="text-xs flex items-center">
                        A partir de
                        <h4 className="text-base text-blue-700 ml-1">
                                R$
                        </h4>
                            <h3 className="text-lg text-blue-700 ml-1">
                                000,00
                        </h3>
                    </span>
                    <div className="text-gray-500 flex items-start text-xs">
                        <CardIcon className="w-18px h-18px fill-current" />
                        <span>12x de R$00,00 sem juros</span>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default ProductCard;