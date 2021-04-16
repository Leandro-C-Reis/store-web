import Link from 'next/link';

import CartIcon from '@/public/assets/cart';
import UserIcon from '@/public/assets/user';
import SearchIcon from '@/public/assets/search';

const Logged = () => {
    return (
        <header
            className="w-full h-100px bg-white m-0 p-0 border-b border-gray-400 flex font-ubuntu z-10 sticky top-0">
            <div className="container bg-white mx-auto px-10 flex items-center justify-evenly">
                <Link href="/">
                    <a className="bg-white w-300px h-60px border text-center">
                        logo
                    </a>
                </Link>
                <div className="bg-white w-5/12 h-50px border rounded-2xl border-gray-300 flex justify-between items-center text-gray-500">
                    <input className="ml-6 w-5/6 outline-none" placeholder="Encontre seus produtos..." />
                    <SearchIcon className="fill-current w-24px h-24px mr-6 cursor-pointer" />
                </div>
                <div className="bg-white h-auto w-1/12 flex align-center justify-evenly text-gray-500 relative">
                    <Link href='/cart'>
                        <a className="flex align-center justify-center">
                            <CartIcon className="fill-current mx-2 w-24px h-24px" />
                        </a>
                    </Link>
                    <div className="absolute w-20px h-15px bg-blue-700 top-0 inset-x-1/3 rounded-full">
                        <h1 className="text-white font-medium text-center text-xs" >
                            9+
                        </h1>
                    </div>

                    <details className="relative">
                        <summary className="outline-none w-auto h-auto inline cursor-pointer">
                            <div className="flex align-center justify-center ml-2">
                                <UserIcon className="fill-current mx-2 w-24px h-24px" />
                            </div>
                        </summary>
                        <section className="border border-gray-500 rounded bg-white p-4 absolute right-0">
                            <div>
                                <Link href="/profile">
                                    <a>Configurações</a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/">
                                    <a>Suporte</a>
                                </Link>
                            </div>
                            <button>
                                Sair
                            </button>
                        </section>
                    </details>
                </div>
            </div>
        </header>
    );
}

export default Logged;