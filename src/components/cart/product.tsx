
import ProductCounter from '@/components/product-counter';
import Close from '@/public/assets/close';

const Product = () => {
    return (
        <div className="w-700px h-75px bg-white border border-gray-400 rounded flex items-center justify-between px-5">
            <div className="flex h-full items-center">
                <div className="w-40px h-50px bg-gray-300">

                </div>
                <div className="h-full ml-6 flex flex-col justify-around">
                    <div className="flex items-center font-medium italic">
                        <h1>
                            Titulo
                        </h1>
                        <span className="mx-3">
                            {'>'}
                        </span>
                        <h1>
                            Categoria
                        </h1>
                    </div>
                    <div className="text-xs flex items-center">
                        <p>
                            Descrição asbdsadadasdasdsad ...
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex h-full items-center">
                <div className="h-full flex flex-col items-end justify-around mr-6">
                    <h1 className="bsolute right-0 top-0 font-medium">
                        R$ 000,00
                    </h1>
                    <p className="bsolute right-0 bottom-0 text-xs">
                        Unidades disponíveis: 1
                    </p>
                </div>
                <div className="flex items-center h-full">
                    <div className="mr-5">
                        <ProductCounter />
                    </div>
                    <span className="cursor-pointer">
                        <Close className="w-15px h-15px fill-current text-red-500" />
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Product;