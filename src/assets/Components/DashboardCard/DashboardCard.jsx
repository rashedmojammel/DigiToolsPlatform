import React from 'react';
import circle from '../../../assets/Group5.png'
import { CiPlay1 } from "react-icons/ci";
import banner from '../../../assets/banner.png'

const DashboardCard = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto gap-8 md:gap-10 my-10 md:my-15 px-4 md:px-0'>

            <div className='space-y-4 md:space-y-5 text-center md:text-left'>
                <div className='bg-[#E1E7FF] rounded-2xl px-3 inline-block'>
                    <p className='flex items-center gap-2 text-sm'>
                        <span><img className="flex" src={circle} alt="" /></span>
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight'>
                    Supercharge Your<br />Digital Workflow
                </h1>
                <p className='text-[#627382] text-sm md:text-base'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>
                <div className='flex gap-2 justify-center md:justify-start flex-wrap'>
                    <button className="btn rounded-full text-white px-6 py-3 border-none bg-gradient-to-r from-purple-600 to-indigo-500">
                        Explore Products
                    </button>
                    <button className="btn rounded-full px-6 py-3 border-2 border-purple-600 text-purple-600 bg-transparent flex items-center gap-2">
                        <CiPlay1 className="text-lg" />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='w-full md:w-auto flex justify-center'>
                <img className="w-[280px] sm:w-[360px] md:w-[500px] h-auto" src={banner} alt="banner" />
            </div>

        </div>
    );
};

export default DashboardCard;