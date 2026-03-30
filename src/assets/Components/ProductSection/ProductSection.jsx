import { Suspense, useState } from 'react'
import AvailableProd from './AvailableProd'
import Cart from './Cart'

const playerPromise = fetch('/data.json').then(r => r.json())

const ProductSection = ({ cart, addToCart, removeFromCart, clearCart }) => {
    const [active, setActive] = useState('products')

    const tab = (label, key) => (
        <button
            onClick={() => setActive(key)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${active === key ? 'bg-purple-600 text-white' : 'text-gray-500'}`}
        >
            {label}
        </button>
    )

    return (
        <div>
            <div className='text-center py-12 space-y-4'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-sm'>
                    Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.
                </p>
                <div className='flex justify-center gap-2'>
                    {tab('Products', 'products')}
                    {tab(`Cart (${cart.length})`, 'cart')}
                </div>
            </div>

            {active === 'products' && (
                <Suspense fallback={<div className='text-center py-10'>Loading...</div>}>
                    <AvailableProd playerPromise={playerPromise} cart={cart} addToCart={addToCart} />
                </Suspense>
            )}
            {active === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
        </div>
    )
}

export default ProductSection