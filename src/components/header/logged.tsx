import Link from 'next/link';
import Router from 'next/router';

import Options from './user-options';
import CartIcon from '@/public/assets/cart';
import UserIcon from '@/public/assets/user';
import SearchIcon from '@/public/assets/search';

const Logged = () => {

    function handleFindProducts(e) {
        e.preventDefault();

        const query = e.target[0].value;
        ;
        Router.push(`/products?q=${query}`);
    }

    return (
        <header
            className="w-full h-100px bg-dblue m-0 p-0 border-b border-gray-400 flex font-ubuntu z-10 sticky top-0">
            <div className="container mx-auto px-10 flex items-center justify-evenly">
                <Link href="/">
                    <a className="bg-gray-100 rounded-md w-300px h-60px border text-center">
                        logo
                    </a>
                </Link>
                <form onSubmit={(e) => handleFindProducts(e)} className="bg-white w-5/12 h-50px border rounded-2xl border-gray-300 flex justify-between items-center text-gray-500">
                    <input className="ml-6 w-5/6 outline-none" placeholder="Encontre seus produtos..." />
                    <button style={{ outline: 'none' }}>
                        <SearchIcon className="fill-current w-24px h-24px mr-6 cursor-pointer" />
                    </button>
                </form>
                <div className="h-auto w-1/12 flex align-center justify-evenly text-white relative">
                    <Link href='/cart'>
                        <a className="flex align-center justify-center">
                            <CartIcon className="fill-current mx-2 w-24px h-24px" />
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a className="absolute w-20px h-15px bg-white top-0 inset-x-9 rounded-full">
                            <h1 className="text-blue-700 font-medium text-center text-xs" >
                                9+
                            </h1>
                        </a>
                    </Link>

                    <details className="relative">
                        <summary className="outline-none w-auto h-auto inline cursor-pointer">
                            <div className="flex align-center justify-center ml-2">
                                <UserIcon className="fill-current mx-2 w-24px h-24px" />
                            </div>
                        </summary>
                        <section className="border border-gray-500 rounded bg-white p-4 absolute right-0 text-gray-500">
                            <Options />
                        </section>
                    </details>
                </div>
            </div>
        </header>
    );
}

export default Logged;