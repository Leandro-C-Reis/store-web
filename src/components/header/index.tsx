import { useEffect, useState } from 'react';
import Logged from './logged';
import UnLogged from './unlogged';

import LoadingIcon from '@/public/assets/loading';

const Loading = () => (
    <div className="h-100px w-full flex items-center justify-center">
        <div className="w-20px h-20px">
            <LoadingIcon className="stroke-current text-blue-300" />
        </div>
    </div>
)

const Header = () => {
    const [user, setUser] = useState();
    const [loaded, setLoaded] = useState(false);

    function a() {
        let user = JSON.parse(window.localStorage.getItem('user'));
        setUser(user);
        setLoaded(true);
    }

    useEffect(() => a(), []);

    return (
        <>
            {
                loaded ? <>
                    {
                        user ? <Logged /> : <UnLogged />
                    }
                </> : <Loading />
            }
        </>
    );
}

export default Header;