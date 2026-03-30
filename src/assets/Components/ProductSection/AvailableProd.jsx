import { use } from 'react'
import { BiCheck } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'

const tagStyles = {
    'popular':     'bg-purple-100 text-purple-600',
    'new':         'bg-green-100 text-green-600',
    'best seller': 'bg-yellow-100 text-yellow-600',
    'free':        'bg-blue-100 text-blue-600',
}

const AvailableProd = ({ playerPromise, cart, addToCart }) => {
    const products = use(playerPromise)

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-3 mb-10'>
            {products.map(product => {
                const inCart = cart.some(p => p.id === product.id)
                return (
                    <div className="card bg-base-100 w-96 shadow-sm p-4 relative" key={product.id}>
                        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType]}`}>
                            {product.tag}
                        </span>
                        <h1 className='text-5xl pl-4 pt-5'>{product.icon}</h1>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className='text-gray-500 text-sm'>{product.description}</p>
                            <div className='flex items-end gap-1 border-b border-gray-200 pb-3'>
                                <span className='text-2xl font-bold'>${product.price}</span>
                                <span className='text-gray-500 text-sm mb-1'>/{product.period}</span>
                            </div>
                            <ul className='space-y-2 mt-2'>
                                {product.features.map(f => (
                                    <li key={f} className='flex items-center gap-2 text-sm text-gray-500'>
                                        <BiCheck className='w-4 h-4 text-purple-500' /> {f}
                                    </li>
                                ))}
                            </ul>
                            <div className='card-actions mt-4'>
                                <button
                                    onClick={() => { addToCart(product); toast.success(`${product.name} added to cart!`) }}
                                    disabled={inCart}
                                    className={`btn rounded-2xl text-white border-none w-full ${inCart ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-purple-600'}`}
                                >
                                    {inCart ? '✓ Added' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AvailableProd