import { useEffect, useState } from 'react';
import Router from 'next/router';

import { Address } from '@/@Types/API';
import api from '@/services/store-api';
import Header from '@/components/header/personal-header';

import LoadingIcon from '@/public/assets/loading';
import EditPencil from '@/public/assets/edit-pencil';

const Profile = () => {
    const [user, setUser] = useState<any>();

    async function getUser() {
        const token = localStorage.getItem('token');
        const userLocal = JSON.parse(localStorage.getItem('user'));

        if (!token || !userLocal) {
            Router.push('/login');
        }

        const response = await api.get(`/users/${userLocal.id}`, {
            headers: {
                token
            }
        });

        if (response.data.status) {
            localStorage.clear();
            Router.push('/login');
        }

        setUser(response.data);
    }

    useEffect(() => {
        getUser();
    }, []);

    const Address = ({ address }: { address: Address }) => {

        return (
            <div className="w-full h-full flex relative border-b">
                <div className="w-4/5 h-auto p-3 flex flex-col justify-around">
                    <h3 className="text-lg text-gray-700">{address.street}, 123</h3>
                    <p className="text-sm">Complemento</p>
                    <p className="text-sm">{address.uf}, {address.district} {address.zip_code} (CEP)</p>
                    <p className="text-sm">Nome Completo - (00) 90000-0000</p>
                </div>
                <div className="absolute top-3 right-5 cursor-pointer">
                    <EditPencil className="w-15px h-15px fill-current" />
                </div>
            </div>
        );
    }

    const Body = () => (
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
                                {user.name}
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
                                {user.email}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {
                user.addresses.length > 0 ? (
                    <div className="my-6">
                        <h2 className="my-3">
                            Endereços
                    </h2>
                        <div className="w-800px h-140px border rounded-md bg-white text-gray-500 font-light">
                            {
                                user.addresses.map((address: Address) => {
                                    return <Address address={address} />
                                })
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )

    const Loading = () => (
        <div className="w-40px h-40px absolute top-2/4">
            <LoadingIcon className="stroke-current text-blue-400" />
        </div>
    )

    return (
        <div className="h-screen bg-gray-100">
            <Header />
            <div className="w-auto flex flex-col items-center justify-evenly">
                {
                    user ? <Body /> : <Loading />
                }
            </div>
        </div>
    );
}

export default Profile;