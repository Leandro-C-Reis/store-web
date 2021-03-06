import Link from 'next/link';
import Router from 'next/router';

import { IProduct } from '@/@Types/API';
import Header from '@/components/header/index';
import ProductCounter from '@/components/product-counter';
import NoImage from '@/public/assets/no-image';

const Product = () => {

    function handleSelectImage(element: any) {
        const classNameActive = element.className.replace(/bg-\w*-\w*/g, 'bg-blue-700');
        const className = element.className.replace(/bg-\w*-\w*/g, 'bg-gray-300');
        const elements = document.getElementsByName('selector');

        elements.forEach(e => {
            e.className = className;
        });

        element.className = classNameActive;

        const images = document.getElementById('images');
        images.style.transform = `translateX(-${270 * element.id}px)`;
    }

    function handleAddItem() {
        const cartStr = localStorage.getItem('cart');

        const product: IProduct = {
            id: `${Math.random()}`,
            description: 'description',
            title: 'title',
            created_at: 'xxxx-xx-xxx',
            updated_at: 'xxxx-xx-xxx',
            value: Math.floor(Math.random() * (990 - 50) + 50),
            inventory: {
                amount: Math.floor(Math.random() * (10 - 1) + 1),
                id: `${Math.random()}`
            }
        }

        if (!cartStr) {
            localStorage.setItem('cart', JSON.stringify([product]));
        }
        else {
            const cart = JSON.parse(cartStr);

            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        Router.push('/cart');
    }

    return (
        <div className="bg-gray-100">
            <Header />
            <div className="flex h-screen">
                <div className="w-7/12 flex justify-end">
                    <div className="h-full w-7/12 flex flex-col justify-center pr-16">
                        <h4 className="my-3 text-sm">
                            Categoria
                        </h4 >
                        <h1 className="my-3 text-3xl">
                            Titulo
                        </h1>
                        <span className="my-3 text-sm">
                            Avalia????es
                        </span>
                        <p className="my-3 text-lg font-light">
                            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop
                        </p>
                        <h3 className="my-3 text-sm">
                            Unidade dispon??veis: 1
                        </h3>
                        <h3 className="my-3 text-sm">
                            {"D??vidas? "}
                            <Link href="/">
                                <a className="my-3 text-blue-700">
                                    Entre em contato
                                </a>
                            </Link>
                        </h3>
                    </div>
                </div>

                <div className="w-5/12 bg-white px-14 py-10 flex flex-col justify-end">
                    <div className="h-full w-270px flex flex-col items-center justify-around">
                        <div className="self-start bg-gray-300 w-full h-350px overflow-hidden">
                            <div className="w-max h-full grid grid-cols-3 grid-rows-none transition-all" id="images">
                                <div className="w-270px h-full flex items-center justify-center">
                                    <NoImage className="fill-current text-white w-50px h-50px" />
                                </div>
                                <div className="w-270px h-full flex items-center justify-center">
                                    <NoImage className="fill-current text-white w-50px h-50px" />
                                </div>
                                <div className="w-270px h-full flex items-center justify-center">
                                    <NoImage className="fill-current text-white w-50px h-50px" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={(e) => handleSelectImage(e.target)} id="0" name="selector" className="w-10px h-10px rounded-full mx-1 bg-blue-700" style={{ outline: 'none' }}></button>
                            <button onClick={(e) => handleSelectImage(e.target)} id="1" name="selector" className="w-10px h-10px rounded-full mx-1 bg-gray-300" style={{ outline: 'none' }}></button>
                            <button onClick={(e) => handleSelectImage(e.target)} id="2" name="selector" className="w-10px h-10px rounded-full mx-1 bg-gray-300" style={{ outline: 'none' }}></button>
                        </div>
                    </div>
                    <div className="w-400px h-150px border border-gray-400 rounded">
                        <div className="w-full h-2/4 flex items-center pl-8">
                            <input className="border rounded-sm border-gray-400 w-240px h-30px pl-4 text-sm"
                                type="text" placeholder="Cupom de desconto..." />
                        </div>
                        <div className="w-full h-2/4 flex items-center justify-between px-8">
                            <button onClick={() => handleAddItem()} className="bg-blue-700 text-white w-240px h-50px rounded-md" style={{ outline: 'none' }} >COMPRAR</button>
                            <ProductCounter max={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;