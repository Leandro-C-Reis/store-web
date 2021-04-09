import CardIcon from '@/public/assets/card';
import NoImage from '@/public/assets/no-image';

const ProductCard = ({ className = ''}) => {
    return (
        <li className={`${className} w-160px h-270px border rounded-md p-6 flex flex-col items-center justify-center text-gray-400 bg-white shadow-md cursor-pointer`}>
            <div className="flex align-center justify-center">
                <div className="w-90px h-110px bg-gray-300 flex items-center justify-center">
                    <NoImage className="w-24px h-24px fill-current text-gray-50"/>
                </div>
            </div>
            <div className="mt-3">
                <h5 className="text-xs">Categoria</h5>
                <h3 className="text-base text-gray-600">Titulo</h3>
                <p className="text-xs flex items-center justify-between">
                    A partir de
                    <h4 className="text-sm text-yellow-500">
                        R$
                    </h4>
                    <h3 className="text-base text-yellow-500">
                        000,00
                    </h3>
                </p>
                <div className="text-gray-500 flex items-start text-xs">
                    <CardIcon className="w-18px h-18px fill-current" />
                    <span>12x de R$00,00 sem juros</span>
                </div>
            </div>
        </li>
    );
}

export default ProductCard;