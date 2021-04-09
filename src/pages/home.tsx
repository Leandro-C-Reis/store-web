import 'tailwindcss/tailwind.css';

import Header from '@/components/header';
import ProductList from '@/components/home/product-list';

import MoreSellerIcon from '@/public/assets/more-seller';

const Home = () => {

    return (
        <div className="bg-gray-100">
            <Header/>
            <ProductList Title="Mais Vendidos" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Title="Melhores Avaliações" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Title="Novos Produtos" Icon={MoreSellerIcon} Items={[]}/>
            <ProductList Title="Queima de Etoque" Icon={MoreSellerIcon} Items={[]}/>
        </div>
    );
};

export default Home;