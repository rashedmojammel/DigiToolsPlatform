import { use, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify'

const tagStyles = {
  'popular':     'bg-purple-100 text-purple-600',
  'new':         'bg-green-100 text-green-600',
  'best seller': 'bg-yellow-100 text-yellow-600',
  'free':        'bg-blue-100 text-blue-600',
}

const ProductCard = ({ product, cart, setCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (cart.length >= 6) {
      toast.error('Cart is full! Maximum 6 items allowed.')
      return
    }
    const isFound = cart.find(item => item.id === product.id)
    if (isFound) {
      toast.error(`${product.name} is already in cart!`)
      return
    }
    setIsAdded(true)
    setCart([...cart, product])
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="card bg-base-100 w-full shadow-sm p-4 relative" key={product.id}>
      <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType] ?? 'bg-gray-100 text-gray-600'}`}>
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
            onClick={handleAddToCart}
            className={`btn rounded-2xl text-white border-none w-full ${isAdded ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-purple-600'}`}
          >
            {isAdded ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

const AvailableProd = ({ playerPromise, cart, setCart }) => {
  const products = use(playerPromise)

  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 px-4 md:px-0'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  )
}

export default AvailableProd