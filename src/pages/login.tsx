import Link from 'next/link';
import Router from 'next/router';
import api from '@/services/store-api';

import Back from '@/public/assets/arrows/left';
import Loading from '@/public/assets/loading';

const Login = () => {

    async function handleLogin(e) {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        const loading = document.getElementById('loading');
        loading.className = loading.className.replace(' hidden', '');

        const response = await api.post('/login', {
            email,
            password
        });

        loading.className += ' hidden';

        if (!response.data?.token) {
            handleShowMessage(response.data.message);
            return;
        }

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        Router.push('/');
    }

    function handleShowMessage(message: string) {
        const Message = document.getElementById('message');
        Message.innerText = message;
        Message.className = Message.className.replace('hidden', '');

        setTimeout(() => {
            Message.style.opacity = '0';

            setTimeout(() => {
                Message.className += ' hidden';
                Message.style.opacity = '1';
            }, 1200);

        }, 5000);
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100 relative">
            <Link href="/">
                <a>
                    <Back className="fill-current text-gray-600 w-50px h-50px" />
                </a>
            </Link>
            <div className="flex items-center justify-evenly w-500px h-300px bg-white border-2 border-gray-500 rounded-lg">
                <form className="w-full h-full flex flex-col items-center justify-evenly"
                    onSubmit={(e) => handleLogin(e)}>
                    <input type="email" placeholder="Email" className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" />
                    <input type="password" placeholder="Senha" className="border-2 border-gray-500 rounded-md w-300px px-3 py-1 text-base" />
                    <button className="rounded-full w-300px h-30px bg-dblue text-gray-100 text-base font-medium" style={{ outline: 'none' }}>
                        ENTRAR
                    </button>
                    <Link href="/signup">
                        <a className="italic text-blue-600">
                            Não sou cadastrado-{`>`}
                        </a>
                    </Link>
                </form>
            </div>
            <span id="message" className="absolute top-3 right-3 transition-all border bg-red-400 px-3 py-2 text-white rounded duration-1000 hidden">
            </span>

            <div id="loading" className="w-screen h-screen z-10 absolute bg-gray-300 bg-opacity-60 flex items-center justify-center hidden">
                <Loading className="text-blue-400 stroke-current w-30px h-30px" />
            </div>
        </div>
    );
}

export default Login;