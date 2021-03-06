import Link from 'next/link';
import Router from 'next/router';

import PersonIcon from '@/public/assets/person';
import SearchIcon from '@/public/assets/search';

const UnLogged = () => {

    function handleFindProducts(e) {
        e.preventDefault();

        const query = e.target[0].value;

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
                <form onSubmit={(e) => handleFindProducts(e)} className="bg-white w-500px h-50px border rounded-2xl border-gray-300 flex justify-between items-center text-gray-500">
                    <input className="ml-6 w-5/6 outline-none" placeholder="Encontre seus produtos..." />
                    <SearchIcon className="fill-current w-24px h-24px mr-6 cursor-pointer" />
                </form>
                <div className="h-auto w-auto flex align-center text-white">
                    <Link href="/login">
                        <a className="flex align-center justify-center ml-2">
                            <PersonIcon className="fill-current mx-2 w-24px h-24px" />
                            <span>
                                Login | Cadastrar
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default UnLogged;