import { useEffect, useState } from 'react';
import Router from 'next/router';

import { IAddress } from '@/@Types/API';
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

    function handleCancel() {
        const Edit = document.getElementById('edit');

        Edit.className += ' hidden'
    }

    function handleEdit() {
        const Edit = document.getElementById('edit');

        Edit.className = Edit.className.replace(' hidden', '');
    }

    useEffect(() => {
        getUser();
    }, []);

    const Address = ({ address }: { address: IAddress }) => {

        return (
            <div className="w-full h-full flex relative border-b">
                <div className="w-4/5 h-auto p-3 flex flex-col justify-around">
                    <h3 className="text-lg text-gray-700">{address.street}, 123</h3>
                    <p className="text-sm">Complemento</p>
                    <p className="text-sm">{address.uf}, {address.district} {address.zip_code} (CEP)</p>
                    <p className="text-sm">Nome Completo - (00) 90000-0000</p>
                </div>
                <button onClick={() => handleEdit()} className="absolute top-3 right-5 cursor-pointer" style={{ outline: 'none' }} >
                    <EditPencil className="w-15px h-15px fill-current" />
                </button>
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
                                user.addresses.map((address: IAddress, idx: number) => {
                                    return <Address address={address} key={idx} />
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

                <div id="edit" className="z-10 absolute top-0 h-screen w-screen bg-gray-300 bg-opacity-50 flex items-center justify-center hidden">
                    <div className="w-3/12 h-auto bg-white p-3 border-2 rounded-md border-gray-400">
                        <div className="flex flex-col">
                            <h1 className="text-sm my-2 text-gray-500">
                                Field Name:
                            </h1>
                            <input className="border rounded-md w-4/5 px-2 py-1 text-sm" type="text" placeholder="New value" />
                        </div>

                        <div className="w-full flex items-center justify-evenly text-white my-4">
                            <button onClick={() => handleCancel()} className="bg-red-400 rounded px-3 font-medium">Cancelar</button>
                            <button className="bg-green-400 rounded px-3 font-medium">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;