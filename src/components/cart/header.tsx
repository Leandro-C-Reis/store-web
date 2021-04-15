import Link from 'next/link';

import UserIcon from '@/public/assets/user';

const Header = () => {

    return (
        <header className="w-full h-80px px-24 flex items-center justify-between " style={{ backgroundColor: '#6781DE' }}>
            <div className="text-gray-100 flex">
                <details className="relative">
                    <summary className="inline outline-none cursor-pointer">
                        <UserIcon className="w-24px h-24px fill-current" />
                    </summary>
                    <section className="absolute w-auto h-auto p-4 bg-white border rounded border-gray-500 text-gray-500">
                        <div>
                            <Link href="/">
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
                <h1 className="ml-6 text-lg font-medium">
                    Bem vindo Usuário
                </h1>
            </div>
            <Link href="/">
                <a className="w-160px h-50px bg-white border">
                    Logo
                </a>
            </Link>
        </header>
    );
}

export default Header;