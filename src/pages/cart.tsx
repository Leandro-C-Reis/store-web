
import Header from '@/components/cart/header';
import Product from '@/components/cart/product';

const Cart = () => {
    return (
        <div className="w-screen h-auto bg-gray-100">
            <Header />
            <div className="h-auto w-full flex justify-center">
                <div className="w-800px h-auto bg-gray-400 mr-3 grid grid-cols-1">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="w-350px h-600px bg-gray-400">

                </div>
            </div>
        </div>
    );
}

export default Cart;