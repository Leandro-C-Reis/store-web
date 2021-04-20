
import Header from '@/components/header/personal-header';
import Product from '@/components/cart/product';

const Cart = () => {
    return (
        <>
            <div className="h-auto bg-gray-100">
                <Header />
                <div className="h-auto w-full flex justify-center">
                    <div className="w-800px h-0 bg-gray-400 mr-3 mt-6 grid grid-cols-1 gap-6">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="w-350px flex flex-col items-center">
                        <div className="w-300px h-150px bg-white rounded my-6 flex flex-col items-center justify-evenly border border-gray-400">
                            <h1 className="w-260px text-gray-400">
                                Entrega
                            </h1>
                            <input className="w-260px h-30px border text-sm rounded border-gray-300 p-3" type="text" placeholder="CEP" />
                            <button className="w-260px h-30px bg-orange rounded-full text-white font-medium text-sm" style={{ outline: 'none' }}>
                                CALCULAR FRETE
                            </button>
                        </div>
                        <div className="w-300px h-300px bg-white flex flex-col items-center justify-evenly border border-gray-400 rounded">
                            <div className="h-150px w-260px bg-gray-400 flex flex-col pl-5 justify-evenly rounded">
                                <div className="bg-gray-100 w-4/5 h-20px rounded"></div>
                                <div className="w-full h-20px rounded flex">
                                    <div className="bg-gray-100 w-1/5 h-20px rounded mr-5"></div>
                                    <div className="bg-gray-100 w-1/5 h-20px rounded"></div>
                                </div>
                                <div className="bg-gray-100 w-3/5 h-20px rounded"></div>
                                <div className="bg-gray-100 w-2/5 h-20px rounded"></div>
                            </div>
                            <input className="border-2 w-260px h-30px rounded-sm border-gray-300 p-3" type="text" placeholder="Cupom de desconto..." />
                            <button className="bg-orange w-260px h-30px rounded-full text-white font-medium text-sm" style={{ outline: 'none' }}>
                                FINALIZAR COMPRA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;