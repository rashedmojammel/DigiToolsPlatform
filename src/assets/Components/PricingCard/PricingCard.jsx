import React from 'react';

const PricingCard = () => {
    return (
        <div className='mb-5'>
           <div className='text-center mt-10 space-y-5 pb-8'>
                <h1 className='text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] mb-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 items-stretch'>
                <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body flex flex-col h-full">
    {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
    <div className="">
      <h2 className="text-3xl font-bold">Starter</h2>
      <p>Perfect for getting started</p>
    </div>
    <h1><span className="text-4xl font-bold">$0</span>/month</h1>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
   <div className="mt-auto">
      <button className="btn btn-primary btn-block text-white rounded-2xl border-none
    bg-gradient-to-r from-purple-600 to-indigo-500">Get Started Free</button>
    </div>
  </div>
</div>
  <div className="card w-96  bg-gradient-to-r from-purple-600 to-indigo-500 shadow-sm text-white">
  <div className="card-body flex flex-col h-full">
    <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                        <span className='bg-[#FEF3C6] text-[#BB4D00] font-semibold px-4 py-1 rounded-full'>
                            Most Popular
                        </span>
                    </div>
    <div className="">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p>Best for professionals</p>
    </div>
    <h1><span className="text-4xl font-bold">$29</span>/month</h1>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-auto">
      <button className='btn btn-block rounded-2xl bg-white hover:bg-white border-none'>
                        <span className='bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent font-semibold'>
                            Start Pro Trial
                        </span>
                    </button>
    </div>
  </div>
</div>
  <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body flex flex-col h-full">
    {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
    <div className="">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p>For teams and businesses</p>
    </div>
    <h1><span className="text-4xl font-bold">$99</span>/month</h1>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block text-white rounded-2xl border-none
    bg-gradient-to-r from-purple-600 to-indigo-500">Contact Sales</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default PricingCard;