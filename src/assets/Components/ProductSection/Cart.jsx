import React from 'react'
import { toast } from 'react-toastify'
import { GiShoppingCart } from 'react-icons/gi'

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  const handleDelete = (item) => {
    setCart(cart.filter(c => c.id !== item.id))
    toast.success(`${item.name} removed from cart!`)
  }

  const handlePayment = () => {
    setCart([])
    toast.success('Payment successful!')
  }

  if (cart.length === 0)
    return (
      <div className='max-w-[600px] mx-auto p-6 mb-10 text-center px-4'>
        <p className='text-7xl mb-3 flex items-center justify-center'><GiShoppingCart /></p>
        <p className='text-gray-400'>Your cart is empty. Add some products!</p>
      </div>
    )

  return (
    <div className='max-w-[1200px] mx-auto p-4 md:p-6 mb-10'>
      <div className='bg-white rounded-2xl p-4 md:p-6 shadow-sm space-y-4'>
        <h2 className='text-xl font-bold'>Your Cart ({cart.length})</h2>

        {cart.map(item => (
          <div key={item.id} className='flex items-center justify-between bg-gray-50 rounded-xl px-3 md:px-4 py-3 gap-2'>
            <div className='flex items-center gap-3 min-w-0'>
              <span className='text-2xl flex-shrink-0'>{item.icon}</span>
              <div className='min-w-0'>
                <p className='font-semibold text-sm truncate'>{item.name}</p>
                <p className='text-gray-500 text-sm'>${item.price} / {item.period}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item)}
              className='text-pink-500 text-sm font-semibold hover:text-pink-700 flex-shrink-0'
            >
              Remove
            </button>
          </div>
        ))}

        <div className='flex justify-between items-center pt-2 border-t border-gray-100'>
          <span className='text-gray-500'>Total:</span>
          <span className='text-2xl font-bold'>${totalPrice.toFixed(2)}</span>
        </div>

        <button
          onClick={handlePayment}
          className='btn btn-block rounded-full bg-purple-600 text-white border-none'
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart