import Link from 'next/link';

import CreditCardIcon from '@/public/assets/card';
import NoImage from '@/public/assets/no-image';

const Card = () => {

    return (
        <Link href="/product">
            <a className="w-200px h-270px bg-white rounded-md shadow flex flex-col items-center justify-evenly hover:shadow-lg cursor-pointer">
                <div className="w-90px h-110px bg-gray-300 flex items-center justify-center">
                    <NoImage className="w-24px h-24px fill-current text-gray-100" />
                </div>
                <div className="h-auto flex flex-col items-center justify-between text-gray-600 font-normal">
                    <h3 className="text-xs text-gray-500">
                        Categoria
                </h3>
                    <div className="text-xl">
                        Titulo
                </div>
                    <div className="text-xs flex items-center">
                        <p className="text-gray-400">
                            A partir de
                    </p>
                        <h4 className="text-blue-700 text-sm px-1">
                            R$
                    </h4>
                        <h3 className="text-blue-700 font-medium text-lg">
                            000,00
                    </h3>
                    </div>
                    <div className="text-xs flex items-center">
                        <div>
                            <CreditCardIcon className="w-18px h-18px fill-current" />
                        </div>
                        <p>
                            12x de R$ 00,00 sem juros
                    </p>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Card;