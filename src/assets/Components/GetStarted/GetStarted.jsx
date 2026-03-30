import React from 'react';
import user from '../../../assets/user.png';
import rocket from '../../../assets/rocket.png';
import pack from '../../../assets/package.png';

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] px-4 md:px-0'>
            <div className='text-center pt-10 space-y-4 md:space-y-5'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] mb-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-6 py-10 justify-items-center'>

                <div className="card bg-base-100 w-full max-w-sm shadow-sm items-center px-8 py-12 space-y-5 relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">01</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={user} alt="Create Account" />
                    </div>
                    <h1 className='text-2xl font-semibold'>Create Account</h1>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-sm items-center px-8 py-12 space-y-5 relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">02</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={pack} alt="Choose Products" />
                    </div>
                    <h1 className='text-2xl font-semibold'>Choose Products</h1>
                    <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-sm items-center px-8 py-12 space-y-5 relative sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">03</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={rocket} alt="Start Creating" />
                    </div>
                    <h1 className='text-2xl font-semibold'>Start Creating</h1>
                    <p className='text-[#627382] text-center'>Download and start using your tools immediately.</p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;