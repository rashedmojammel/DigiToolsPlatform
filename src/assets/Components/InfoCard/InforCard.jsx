import React from 'react';

const InforCard = () => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-500 p-8 md:p-10'>
            <div className="flex flex-col sm:flex-row text-center text-white gap-8 sm:gap-0 sm:space-x-10">

                <div className="sm:px-8 sm:border-r border-white/30 space-y-3">
                    <h1 className="text-5xl md:text-6xl font-bold">50K+</h1>
                    <p>Active Users</p>
                </div>

                <div className="sm:px-8 sm:border-r border-white/30 space-y-3">
                    <h1 className="text-5xl md:text-6xl font-bold">200+</h1>
                    <p>Premium Tools</p>
                </div>

                <div className="sm:px-8 space-y-3">
                    <h1 className="text-5xl md:text-6xl font-bold">4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default InforCard;