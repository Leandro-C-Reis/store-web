import { useRouter } from 'next/router';

import Header from '@/components/header';
import ProductCard from '@/components/home/product-card';
import { useEffect, useState } from 'react';

const Products = () => {
    const [list, setList] = useState([]);

    const router = useRouter();
    const query = router.query;

    function handleGetMoreProducts() {
        const newList = list.map(item => item);

        for (let i = list.length; i < list.length + 12; i++) {
            newList.push(i);
        }

        return setList(newList);
    }

    useEffect(() => {
        setList([]);
    }, []);

    useEffect(() => {
        if (query.q !== undefined) {
            handleGetMoreProducts();
        }
    }, [query]);

    const Filter = () => {
        return (
            <div className="w-1/5">
                <div className="border rounded w-11/12 bg-white">
                    <div>
                        Preços
                    </div>
                </div>
            </div>
        );
    };

    const ProductsList = () => {
        return (
            <div className="w-auto flex flex-col items-center">
                <div className="w-full flex items-center justify-between text-gray-500">
                    <h1>
                        Você buscou por "{query.q}"
                    </h1>
                    <div className="flex w-3/12 items-center justify-evenly">
                        <h3>
                            Ordenação
                        </h3>
                        <details>
                            <summary className="inline cursor-pointer bg-white border rounded border-gray-500 px-4">
                                Filtrar
                            </summary>
                        </details>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-x-16 gap-y-10 my-10">
                    {
                        list.map((value) => {
                            return <ProductCard item="1" key={value} />
                        })
                    }
                </div>
                <button onClick={() => handleGetMoreProducts()} className="border rounded bg-dblue mb-10 p-2 text-white uppercase font-medium" style={{ outline: 'none' }} >
                    Buscar Mais
                </button>
            </div >
        );
    };

    return (
        <>
            <Header />
            <div className="w-full h-auto px-9 bg-gray-100 font-ubuntu">
                <div className="flex pt-20">
                    <Filter />
                    <ProductsList />
                </div>
            </div>
        </>
    );
}

export default Products;