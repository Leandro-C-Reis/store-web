import Logged from './logged';
import UnLogged from './unlogged';


const Header = ({ user }) => {

    return (
        <>
        {
            user?.name ? <Logged /> : <UnLogged />
        }
        </>
    );
}

export default Header;