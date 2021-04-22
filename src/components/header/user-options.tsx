import Link from 'next/link';
import Router from 'next/router';

const Options = () => {
    function handleLogout() {
        localStorage.clear();

        if (Router.route === '/') {
            return Router.reload();
        }

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
            <button onClick={() => handleLogout()} style={{ outline: 'none' }} >
                Sair
            </button>
        </>
    );
}

export default Options;