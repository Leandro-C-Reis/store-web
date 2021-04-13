import Header from '@/components/header';

import CreditCard from '@/public/assets/card';
import NoImage from '@/public/assets/no-image';

const Product = () => {

    return (
        <div className="w-screen h-screen bg-gray-100">
            <Header />
            <div className="flex justify-evenly">
                <div className="w-500px h-450px bg-white border-2 rounded-lg border-gray-300">
                    Images
                </div>
                <div className="bg-white border-2 w-300px h-auto">
                    <h1>Titulo</h1>
                    <span>
                        Avaliações
                    </span>
                    <p>
                        Descrição
                    </p>
                    <span>Unidades disponíveis: 1</span>
                </div>
                <div className="w-300px h-450px bg-white border-2 rounded-lg border-gray-300 
                flex flex-col items-start justify-evenly p-6">
                    <h1 className="text-gray-600 text-5xl">
                        R$ 000,00
                    </h1>
                    <h4 className="text-gray-400 text-xs">
                        Preço a vista
                    </h4>
                    <h4 className="text-gray-500 text-sm">
                        R$ 000,00 (5% de desconto no boleto)
                    </h4>
                    <span className="w-240px h-0 border-t border-gray-400"></span>
                    <div className="text-gray-500 text-sm flex">
                        <CreditCard className="fill-current w-20px h-20px mr-1"/> 
                        <h4>
                            12 parcelas de R$ 00,00 sem juros
                        </h4>
                    </div>
                    <input className="border-2 rounded outline-none w-240px h-30px text-sm pl-2" type="text" placeholder="Cupom de desconto..." />
                    <button className="w-240px h-60px bg-yellow-500 text-white rounded" style={{ outline: 'none' }}>COMPRAR</button>
                </div>
            </div>
        </div>
    );
}

export default Product;