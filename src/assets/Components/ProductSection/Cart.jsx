import React from 'react';
import { toast } from 'react-toastify';

// const cartItems = [
//     { id: 1, icon: '📝', name: 'AI Writing Pro', price: 29 },
//     { id: 2, icon: '🎨', name: 'Design Templates Pack', price: 49 },
// ];

const Cart = ({ cart, removeFromCart, clearCart }) => {
    const total = cart.reduce((sum, p) => sum + p.price, 0)

    if (cart.length === 0)
        return (
            <div className='max-w-[600px] mx-auto p-6 mb-10 text-center'>
                <p className='text-5xl mb-3'>🛒</p>
                <p className='text-gray-400'>Your cart is empty. Add some products!</p>
            </div>
        )

    return (
        <div className='max-w-[1200px] mx-auto p-6 mb-10'>
            <div className='bg-white rounded-2xl p-6 shadow-sm space-y-4'>
                <h2 className='text-xl font-bold'>Your Cart ({cart.length})</h2>

                {cart.map(item => (
                    <div key={item.id} className='flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3'>
                        <div className='flex items-center gap-3'>
                            <span className='text-2xl'>{item.icon}</span>
                            <div>
                                <p className='font-semibold text-sm'>{item.name}</p>
                                <p className='text-gray-500 text-sm'>${item.price} / {item.period}</p>
                            </div>
                        </div>
                        <button
    onClick={() => {
        removeFromCart(item.id);
        toast.success(`${item.name} removed from cart!`);
    }}
    className='text-pink-500 text-sm font-semibold hover:text-pink-700'
>
    Remove
</button>
                    </div>
                ))}

                <div className='flex justify-between items-center pt-2 border-t border-gray-100'>
                    <span className='text-gray-500'>Total:</span>
                    <span className='text-2xl font-bold'>${total.toFixed(2)}</span>
                </div>

                <button
    onClick={() => {
        clearCart();
        toast.success(`Cart cleared successfully!`);
    }}
    className='btn btn-block rounded-full bg-purple-600 text-white border-none'
>
    Proceed To Checkout
</button>
            </div>
        </div>
    )
}


export default Cart;