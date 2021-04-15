import Card from './product-offer-card';

import Icon from '@/public/assets/more-seller';

const Offers = () => {

    return (
        <div className="w-full h-auto px-16 my-10">
            <div className="flex items-center p-2 text-gray-600">
                <Icon className="w-18px h-18px fill-current mr-1" />
                <div>
                    Produtos em Oferta
                </div>
            </div>
            <div className="h-auto grid grid-cols-4 gap-8">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Offers;