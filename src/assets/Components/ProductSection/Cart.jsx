import React from 'react';

const cartItems = [
    { id: 1, icon: '📝', name: 'AI Writing Pro', price: 29 },
    { id: 2, icon: '🎨', name: 'Design Templates Pack', price: 49 },
];

const Cart = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='max-w-[1200px] mx-auto p-6'>
            <div className='bg-white rounded-2xl p-6 space-y-4'>

                {/* Title */}
                <h2 className='text-xl font-bold'>Your Cart</h2>

                {/* Cart Items */}
                {cartItems.map(item => (
                    <div key={item.id} className='flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3'>
                        <div className='flex items-center gap-3'>
                            <span className='text-2xl'>{item.icon}</span>
                            <div>
                                <p className='font-semibold text-sm'>{item.name}</p>
                                <p className='text-gray-500 text-sm'>${item.price}</p>
                            </div>
                        </div>
                        <button className='text-pink-500 text-sm font-semibold hover:text-pink-700'>
                            Remove
                        </button>
                    </div>
                ))}

                {/* Total */}
                <div className='flex justify-between items-center pt-2'>
                    <span className='text-gray-500'>Total:</span>
                    <span className='text-2xl font-bold'>${total}</span>
                </div>

                {/* Checkout Button */}
                <button className='btn btn-block rounded-full bg-purple-600 hover:bg-purple-700 text-white border-none'>
                    Proceed To Checkout
                </button>

            </div>
        </div>
    );
};

export default Cart;