import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0D1117] text-white py-12 md:py-16 px-6'>
            <div className='max-w-[1100px] mx-auto'>

                {/* Top */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 pb-10 border-b border-gray-700'>

                    <div className='col-span-2 sm:col-span-3 md:col-span-2 space-y-4'>
                        <h1 className='text-3xl font-bold'>DigiTools</h1>
                        <p className='text-gray-400 text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Product</h3>
                        {['Features', 'Pricing', 'Templates', 'Integrations'].map(item => (
                            <p key={item} className='text-gray-400 text-sm'>{item}</p>
                        ))}
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Company</h3>
                        {['About', 'Blog', 'Careers', 'Press'].map(item => (
                            <p key={item} className='text-gray-400 text-sm'>{item}</p>
                        ))}
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Resources</h3>
                        {['Documentation', 'Help Center', 'Community', 'Contact'].map(item => (
                            <p key={item} className='text-gray-400 text-sm'>{item}</p>
                        ))}
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Social Links</h3>
                        <div className='flex gap-3'>
                            <button className='bg-white p-2 rounded-full'><BsYoutube className='w-4 h-4 text-black' /></button>
                            <button className='bg-white p-2 rounded-full'><FaFacebook className='w-4 h-4 text-black' /></button>
                            <button className='bg-white p-2 rounded-full'><BsTwitter className='w-4 h-4 text-black' /></button>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-center sm:text-left'>
                    <p className='text-gray-500 text-sm'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-gray-500 text-sm'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;