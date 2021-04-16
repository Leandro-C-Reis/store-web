
import Header from '@/components/cart/header';

const Profile = () => {

    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="w-auto flex flex-col items-center justify-evenly">
                <div className="my-6">
                    <h1>Meus Dados</h1>
                    <div className="my-6">
                        <h2 className="my-3">
                            Dados pessoais
                        </h2>
                        <div className="w-800px h-100px border rounded-md bg-white">
                            <div className="w-full h-2/4 border-b px-6 flex items-center">
                                <div className="w-2/5">
                                    <span className="">
                                        Nome completo
                                    </span>
                                </div>
                                <div className="w-3/5">
                                    <span className="">
                                        Fulano de tal
                                    </span>
                                </div>
                            </div>
                            <div className="w-full h-2/4 flex items-center px-6">
                                <div className="w-2/5">
                                    <span>
                                        Email
                                    </span>
                                </div>
                                <div className="w-2/5">
                                    <span>
                                        email@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-6">
                        <h2 className="my-3">
                            Endereços
                        </h2>
                        <div className="w-800px h-100px border rounded-md bg-white">
                            DATA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;