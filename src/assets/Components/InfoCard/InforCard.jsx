import React from 'react';

const InforCard = () => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-purple-600 to-indigo-500 p-10'>
            <div className="flex text-center text-white space-x-10">
    <div className="px-8 border-r border-white/30 space-y-3">
        <h1 className="text-6xl font-bold">50K+</h1>
        <p>Active Users</p>
    </div>

    <div className="px-8 border-r border-white/30 space-y-3">
        <h1 className="text-6xl font-bold">200+</h1>
        <p>Premium Tools</p>
    </div>

    <div className="px-8 space-y-3">
        <h1 className="text-6xl font-bold">4.9</h1>
        <p>Rating</p>
    </div>
</div>

        </div>
    );
};

export default InforCard;