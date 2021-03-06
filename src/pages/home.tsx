import { useEffect, useState } from 'react';

import Header from '@/components/header/index';
import ProductList from '@/components/home/product-list';
import Offers from '@/components/home/offers';

import MoreSellerIcon from '@/public/assets/more-seller';

const Home = () => {
    return (
        <div className="bg-gray-100">
            <Header/>
            <Offers />
            <ProductList Id="1" Title="Mais Vendidos" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Id="2" Title="Melhores Avaliações" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Id="3" Title="Novos Produtos" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Id="4" Title="Queima de Etoque" Icon={MoreSellerIcon} Items={[]}/>
        </div>
    );
};

export default Home;