
import Header from '@/components/cart/header';

const Profile = () => {

    const Address = () => {
        return (
            <div className="w-full h-full flex relative border-b">
                <div className="w-4/5 h-auto p-3 flex flex-col justify-around">
                    <h3 className="text-lg text-gray-700">Rua, 123</h3>
                    <p className="text-sm">Complemento</p>
                    <p className="text-sm">Estado, Município 12345-000 (CEP)</p>
                    <p className="text-sm">Nome Completo - (00) 90000-0000</p>
                </div>
                <div className="absolute top-3 right-5 cursor-pointer">
                    Edit
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="w-auto flex flex-col items-center justify-evenly">
                <div className="my-6 text-gray-800">
                    <h1 className="text-xl font-medium">Meus Dados</h1>
                    <div className="my-6">
                        <h2 className="my-3">
                            Dados pessoais
                        </h2>
                        <div className="w-800px h-100px border rounded-md bg-white text-gray-500 font-light">
                            <div className="w-full h-2/4 border-b px-6 flex items-center">
                                <div className="w-2/5 text-gray-700">
                                    <span>
                                        Nome completo
                                    </span>
                                </div>
                                <div className="w-3/5">
                                    <span>
                                        Fulano de tal
                                    </span>
                                </div>
                            </div>
                            <div className="w-full h-2/4 flex items-center px-6">
                                <div className="w-2/5 text-gray-700">
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
                        <div className="w-800px h-140px border rounded-md bg-white text-gray-500 font-light">
                            <Address />
                            <Address />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;