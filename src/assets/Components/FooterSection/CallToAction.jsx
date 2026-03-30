import React from 'react';

const CallToAction = () => {
    return (
        <div className='bg-gradient-to-r from-purple-600 to-indigo-500 p-10 text-center text-white space-y-5 '>
            <h1 className='text-4xl font-semibold pt-10'>Ready to Transform Your Workflow?</h1>
            <p className='text-[#c0c9d1]'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
<div className='flex items-center justify-center gap-3'>
  <button className="btn rounded-full text-white px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-purple-600 transition">
    Explore Products
  </button>
  <button className="btn rounded-full text-white px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-purple-600 transition">
    View Pricing
  </button>
</div>
              <p className='text-[#a9b2b9]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default CallToAction;