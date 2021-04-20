import Link from 'next/link';
import Router from 'next/router';

const Options = () => {
    function handleLogout()
    {
        localStorage.clear();
        Router.push('/');
    }

    return (
        <>
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
            <button onClick={() => handleLogout()}>
                Sair
            </button>
        </>
    );
}

export default Options;