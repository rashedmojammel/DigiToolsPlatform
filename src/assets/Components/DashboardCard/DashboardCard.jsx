import React from 'react';
import circle from '../../../assets/Group5.png'
import { CiPlay1 } from "react-icons/ci";
import banner from '../../../assets/banner.png'
const DashboardCard = () => {
    return (
        <div className='flex items-center justify-between max-w-[1200px] mx-auto mt-15 gap-10'>

            <div className='space-y-5 '>
                <div className='bg-[#E1E7FF] rounded-2xl px-3 inline-block'>
                    <p className='flex items-center gap-2 '><span><img className="flex " src={circle}></img></span>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-7xl font-bold'>
                    Supercharge Your<br></br>Digital Workflow
                </h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br></br>
                  software—all in one place. Start creating faster today.<br></br>Explore Products</p>
                <div className='flex gap-2'>
                   
  <button className="btn rounded-full text-white px-6 py-3 border-none
    bg-gradient-to-r from-purple-600 to-indigo-500">
    Explore Products
  </button>

  <button className="btn rounded-full px-6 py-3 
    border-2 border-purple-600 text-purple-600 
    bg-transparent flex items-center gap-2">
    
    <CiPlay1 className="text-lg" />
    Watch Demo
  </button>

                </div>
           

            </div>
            <div>
                <img  className="w-[500px] h-[590px]"src={banner}></img>

            </div>
            
        </div>
    );
};

export default DashboardCard;