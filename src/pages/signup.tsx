import Link from 'next/link';

import Back from '@/public/assets/arrows/left';

const SignUp = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <Link href="/">
                <a>
                    <Back className="fill-current text-gray-600 w-50px h-50px" />
                </a>
            </Link>
            <div className="flex flex-col items-center justify-evenly border-2 border-gray-500 rounded-lg w-500px h-350px bg-white">
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="text" placeholder="Nome" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="email" placeholder="Email" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="password" placeholder="Senha" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="password" placeholder="Confirme a senha" />
                <button className="rounded-full w-300px h-30px bg-green-600 text-gray-100 text-base font-medium" style={{ outline: 'none' }}>
                    REGISTRAR
                </button>
                <Link href="/login">
                    <a className="italic text-blue-600">
                        {'<'}- Fazer login
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default SignUp;