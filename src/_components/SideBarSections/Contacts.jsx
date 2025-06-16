import React from 'react'

export default function Contacts() {
    return (
        <div className='h-36 '>
            <div className='flex flex-row items-center justify-between mb-3'>
                <h2 className='font-semibold'>Close friends</h2>
                <p className='text-[#5b5b5c] text-sm cursor-pointer'>View all</p>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='rounded-full border-4 border-[#2c2c2c] w-12 h-12'>
                        <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740' alt='Profile Photo' className='rounded-full object-cover' />
                    </div>
                    <h3>Jhonny Hilbert</h3>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='rounded-full border-4 border-[#2c2c2c] w-12 h-12'>
                        <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740' alt='Profile Photo' className='rounded-full object-cover' />
                    </div>
                    <h3>Jhonny Hilbert</h3>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='rounded-full border-4 border-[#2c2c2c] w-12 h-12'>
                        <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740' alt='Profile Photo' className='rounded-full object-cover' />
                    </div>
                    <h3>Jhonny Hilbert</h3>
                </div>
            </div>
        </div>
    )
}
