import React, { useState } from 'react'

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-6 relative">
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <a className="btn btn-ghost text-xl md:text-2xl font-bold text-[#4f39f6]">DigiTools</a>

        {/* Desktop Nav */}
        <ul className='hidden md:flex space-x-6'>
          <li className='cursor-pointer hover:text-purple-600 transition'>Products</li>
          <li className='cursor-pointer hover:text-purple-600 transition'>Feature</li>
          <li className='cursor-pointer hover:text-purple-600 transition'>Pricing</li>
          <li className='cursor-pointer hover:text-purple-600 transition'>Testimonials</li>
          <li className='cursor-pointer hover:text-purple-600 transition'>FaQ</li>
        </ul>

        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cart.length > 0 && (
              <span className="badge badge-sm indicator-item bg-purple-600 text-white border-none">{cart.length}</span>
            )}
          </div>
          <h1 className='hidden md:block'>Login</h1>
          <button className="hidden md:block btn bg-[#4f39f6] rounded-3xl text-white">Get Started</button>

          {/* Hamburger */}
          <button
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base-100 shadow-md z-50 px-6 py-4 space-y-3">
          {['Products', 'Feature', 'Pricing', 'Testimonials', 'FaQ'].map(item => (
            <p key={item} className='cursor-pointer hover:text-purple-600 transition py-1 border-b border-gray-100'>{item}</p>
          ))}
          <div className='flex gap-3 pt-2'>
            <button className='btn btn-outline btn-sm rounded-3xl flex-1'>Login</button>
            <button className="btn bg-[#4f39f6] btn-sm rounded-3xl text-white flex-1">Get Started</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar