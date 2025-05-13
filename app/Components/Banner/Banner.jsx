"use client"
import { assets } from '@/public/assets/asstes'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-10 py-10'>
            {/* Left side */}
            <div className='w-full md:w-1/2'>
                <div className='flex flex-col items-start gap-5'>
                    <h1 className='text-primary'>Premium Barber Services in Denton</h1>
                    <h1 className='text-4xl md:text-4xl font-bold leading-tight'>
                        Classic Cuts, Modern Style <br />
                        <span className='text-primary'>Premium Barber Shop</span>
                    </h1>
                    <p className='text-gray-700'>
                        At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
                    </p>
                    {/* Buttons */}
                    <div className='flex flex-wrap gap-4'>
                        <button className='bg-primary text-white px-4 py-2 rounded'>Denton, TX</button>
                        <button className='bg-secondary text-white px-4 py-2 rounded'>Our Services</button>
                        <button className='bg-accent text-white px-4 py-2 rounded'>Book now</button>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className='w-full md:w-1/2 flex justify-end'>
                <Image
                    src={assets.hero}
                    alt="Hero Image"
                    className='w-full max-w-md object-contain'
                />
            </div>
        </div>
    )
}

export default Banner
