import Link from 'next/link';
import Options from './user-options';

import UserIcon from '@/public/assets/user';
import { useEffect, useState } from 'react';

const Header = () => {
    const [user, setUser] = useState<any>();
    
    useEffect(() => {
        const userLocal = JSON.parse(localStorage.getItem('user'));
        setUser(userLocal);
    }, []);

    if (user)
    {
        return (
            <header className="w-full h-80px px-24 flex items-center justify-between sticky top-0 z-10" style={{ backgroundColor: '#6781DE' }}>
                <div className="text-gray-100 flex">
                    <details className="relative">
                        <summary className="inline outline-none cursor-pointer">
                            <UserIcon className="w-24px h-24px fill-current" />
                        </summary>
                        <section className="absolute w-auto h-auto p-4 bg-white border rounded border-gray-500 text-gray-500">
                            <Options />
                        </section>
                    </details>
                    <h1 className="ml-6 text-lg font-medium">
                        Bem vindo {user.name}
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

    return (
        <header className="w-full h-80px px-24 flex items-center justify-between sticky top-0 z-10" style={{ backgroundColor: '#6781DE' }}>
        </header>
    );
}

export default Header;