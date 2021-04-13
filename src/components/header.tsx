import Link from 'next/link';

import CartIcon from '@/public/assets/cart';
import PersonIcon from '@/public/assets/person';
import SearchIcon from '@/public/assets/search';

const Header = () => {
    return (
        <header
            className="w-full h-100px bg-white m-0 p-0 border-b border-gray-400 flex font-ubuntu z-10 sticky top-0">
            <div className="container bg-white mx-auto px-10 flex items-center justify-evenly">
                <Link href="/">
                    <a className="bg-white w-300px h-60px border text-center">
                        logo
                    </a>
                </Link>
                <div className="bg-white w-500px h-50px border rounded-2xl border-gray-300 flex justify-between items-center text-gray-500">
                    <input className="ml-6 w-5/6 outline-none" placeholder="Encontre seus produtos..."/>
                    <SearchIcon className="fill-current w-24px h-24px mr-6 cursor-pointer" />
                </div>
                <div className="bg-white h-auto w-auto flex align-center text-gray-500">
                    <Link href='/'>
                        <a className="flex align-center justify-center">
                            <CartIcon className="fill-current mx-2 w-24px h-24px" />
                            <span>
                                Meu Carrinho
                            </span>
                        </a>
                    </Link>
                    <Link href="/">
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
};

export default Header;