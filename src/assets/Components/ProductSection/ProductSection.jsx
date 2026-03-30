import React, { Suspense, useState } from 'react';
import AvailableProd from './AvailableProd';
import Cart from './Cart';

const fetchProducts = async () => {
    const res = await fetch('/data.json');
    return res.json();
};

const playerPromise = fetchProducts();

const ProductSection = () => {
    const [active, setActive] = useState('products');

    return (
        <div>
            <div className='text-center py-12 space-y-4'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-sm'>
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>
                <div className='flex justify-center items-center gap-2'>
                    <button
                        onClick={() => setActive('products')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                            active === 'products'
                                ? 'bg-purple-600 text-white'
                                : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActive('cart')}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                            active === 'cart'
                                ? 'bg-purple-600 text-white'
                                : 'text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        Cart (2)
                    </button>
                </div>
            </div>
            {active === 'products' && (
                <Suspense fallback={<div className='text-center py-10'>Loading...</div>}>
                    <AvailableProd playerPromise={playerPromise} />
                </Suspense>
            )}
            {active === 'cart' && <Cart />}
        </div>
    );
};

export default ProductSection;