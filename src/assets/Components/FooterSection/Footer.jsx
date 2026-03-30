import React from 'react';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#0D1117] text-white py-16 px-6'>

            <div className='max-w-[1100px] mx-auto'>

                {/* Top */}
                <div className='grid grid-cols-6 gap-10 pb-10 border-b border-gray-700'>

                    <div className='col-span-2 space-y-4'>
                        <h1 className='text-3xl font-bold'>DigiTools</h1>
                        <p className='text-gray-400 text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Product</h3>
                        <p className='text-gray-400 text-sm'>Features</p>
                        <p className='text-gray-400 text-sm'>Pricing</p>
                        <p className='text-gray-400 text-sm'>Templates</p>
                        <p className='text-gray-400 text-sm'>Integrations</p>
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Company</h3>
                        <p className='text-gray-400 text-sm'>About</p>
                        <p className='text-gray-400 text-sm'>Blog</p>
                        <p className='text-gray-400 text-sm'>Careers</p>
                        <p className='text-gray-400 text-sm'>Press</p>
                    </div>

                    <div className='space-y-3'>
                        <h3 className='font-semibold'>Resources</h3>
                        <p className='text-gray-400 text-sm'>Documentation</p>
                        <p className='text-gray-400 text-sm'>Help Center</p>
                        <p className='text-gray-400 text-sm'>Community</p>
                        <p className='text-gray-400 text-sm'>Contact</p>
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
                <div className='flex justify-between items-center pt-6'>
                    <p className='text-gray-500 text-sm'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6 text-gray-500 text-sm'>
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