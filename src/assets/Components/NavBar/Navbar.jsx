import React from 'react';

const Navbar = ({ cartCount }) => (
    <div className='max-w-[1200px] mx-auto'>
        <div className="flex justify-between navbar bg-base-100 shadow-sm">
            <a className="btn btn-ghost text-2xl font-bold text-[#4f39f6]">DigiTools</a>

            <ul className='flex space-x-6'>
                <li>Products</li><li>Feature</li><li>Pricing</li><li>Testimonials</li><li>FaQ</li>
            </ul>

            <div className="flex items-center gap-4">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                        <span className="badge badge-sm indicator-item bg-purple-600 text-white border-none">{cartCount}</span>
                    )}
                </div>
                <h1>Login</h1>
                <button className="btn bg-[#4f39f6] rounded-3xl text-white">Get Started</button>
            </div>
        </div>
    </div>
)

// export default Navbar
export default Navbar;