import Link from 'next/link';
import Router from 'next/router';
import api from '@/services/store-api';

import Back from '@/public/assets/arrows/left';

const SignUp = () => {

    async function handleRegisterNewUser(e)
    {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirm = e.target[3].value;

        if (password != confirm)
        {
            return;
        }
        
        const response = await api.post('/users', {
            name,
            email,
            password
        });

        const { user } = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        if (user)
        {
            await handleLogin(email, password);
        }
    }

    async function handleLogin(email: string, password: string)
    {
        const response = await api.post('/login', {
            email,
            password
        });

        localStorage.setItem('token', response.data.token);
        Router.push('/');
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <Link href="/">
                <a>
                    <Back className="fill-current text-gray-600 w-50px h-50px" />
                </a>
            </Link>
            <form onSubmit={e => handleRegisterNewUser(e)} className="flex flex-col items-center justify-evenly border-2 border-gray-500 rounded-lg w-500px h-350px bg-white">
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="text" placeholder="Nome" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="email" placeholder="Email" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="password" placeholder="Senha" />
                <input className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" type="password" placeholder="Confirme a senha" />
                <button className="rounded-full w-300px h-30px bg-dblue text-gray-100 text-base font-medium" style={{ outline: 'none' }}>
                    REGISTRAR
                </button>
                <Link href="/login">
                    <a className="italic text-blue-600">
                        {'<'}- Fazer login
                    </a>
                </Link>
            </form>
        </div>
    );
}

export default SignUp;