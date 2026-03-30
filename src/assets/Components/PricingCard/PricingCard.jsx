import React from 'react';

const PricingCard = () => {
    return (
        <div className='mb-5 px-4 md:px-0'>
            <div className='text-center mt-10 space-y-4 md:space-y-5 pb-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 justify-items-center'>

                {/* Starter */}
                <div className="card w-full max-w-sm bg-base-100 shadow-sm">
                    <div className="card-body flex flex-col h-full">
                        <div>
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                        </div>
                        <h1><span className="text-4xl font-bold">$0</span>/month</h1>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map(f => (
                                <li key={f}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-4">
                            <button className="btn btn-primary btn-block text-white rounded-2xl border-none bg-gradient-to-r from-purple-600 to-indigo-500">Get Started Free</button>
                        </div>
                    </div>
                </div>

                {/* Pro */}
                <div className="card w-full max-w-sm bg-gradient-to-r from-purple-600 to-indigo-500 shadow-sm text-white relative mt-4 sm:mt-0">
                    <div className="card-body flex flex-col h-full">
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                            <span className='bg-[#FEF3C6] text-[#BB4D00] font-semibold px-4 py-1 rounded-full whitespace-nowrap'>Most Popular</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <h1><span className="text-4xl font-bold">$29</span>/month</h1>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map(f => (
                                <li key={f}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto pt-4">
                            <button className='btn btn-block rounded-2xl bg-white hover:bg-white border-none'>
                                <span className='bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent font-semibold'>Start Pro Trial</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enterprise */}
                <div className="card w-full max-w-sm bg-base-100 shadow-sm sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0">
                    <div className="card-body flex flex-col h-full">
                        <div>
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                        </div>
                        <h1><span className="text-4xl font-bold">$99</span>/month</h1>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map(f => (
                                <li key={f}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block text-white rounded-2xl border-none bg-gradient-to-r from-purple-600 to-indigo-500">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingCard;