import React from 'react';
import user from '../../../assets/user.png';
import rocket from '../../../assets/rocket.png';
import pack from '../../../assets/package.png';

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='text-center mt-10 space-y-5'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] mb-5'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3 max-w-[1200px] mx-auto gap-6 py-10'>
                <div className="card bg-base-100 w-96 shadow-sm items-center px-10 py-15 space-y-5 relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">01</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={user} />
                    </div>
                    <h1 className='text-2xl font-semibold'>Create Account</h1>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm items-center px-10 py-15 space-y-5 relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">02</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={pack} />
                    </div>
                    <h1 className='text-2xl font-semibold'>Choose Products</h1>
                    <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm items-center px-10 py-15 space-y-5 relative">
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-9 h-9 rounded-full flex items-center justify-center">03</span>
                    <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center">
                        <img className='w-[40px] h-[40px]' src={rocket} />
                    </div>
                    <h1 className='text-2xl font-semibold'>Start Creating</h1>
                    <p className='text-[#627382] text-center'>Download and start using your tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;