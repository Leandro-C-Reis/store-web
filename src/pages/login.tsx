import Link from 'next/link';

import Back from '@/public/assets/arrows/left';

const Login = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <Link href="/">
                <a>
                    <Back className="fill-current text-gray-600 w-50px h-50px" />
                </a>
            </Link>
            <div className="flex flex-col items-center justify-evenly w-500px h-300px bg-white border-2 border-gray-500 rounded-lg">
                <input type="email" placeholder="Email" className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base"/>
                <input type="password" placeholder="Senha" className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base"/>
                <button className="rounded-full w-300px h-30px bg-dblue text-gray-100 text-base font-medium" style={{ outline: 'none' }}>
                    ENTRAR
                </button>
                <Link href="/signup">
                    <a className="italic text-blue-600">
                        Não sou cadastrado-{`>`}
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Login;