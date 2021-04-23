// import 'tailwindcss/tailwind.css';
import '../styles/index.css';
import { useEffect } from 'react';
import Router from 'next/router';
import jwt from 'jsonwebtoken';

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const dec = jwt.decode(token);
            const expires = new Date(dec.exp * 1000);
            const now = Date.now();

            if (expires <= now) {
                localStorage.clear();

                if (Router.pathname == '/') {
                    Router.reload();
                }
                Router.push('/');
            }
        }
    });

    return <Component {...pageProps} />
}