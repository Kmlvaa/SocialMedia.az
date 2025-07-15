import React from 'react'
import useUser from '../../hooks/useUser'

export default function SidebarProfileSec() {

    const { user, loading } = useUser();
    return (
        <section className='Profile-info flex flex-col items-center justify-center'>
            <div className='rounded-full border-4 border-[#2c2c2c] w-16 h-16'>
                <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740' alt='Profile Photo' className='rounded-full object-cover' />
            </div>
            <div className='text-center'>
                {user ? (
                    <h2>{user.firstName} {user.lastName}</h2>
                ) : <h2>Jhon Wilston</h2>}
                <p className='text-xs text-[#5b5b5c]'>Software Engineer</p>
                <p className='py-2'>Guiding the next generation through the journey of health and knowledge</p>
                <div className='flex flex-row items-center justify-center gap-5 w-full'>
                    <div className='flex flex-col items-center justify-center w-16'>
                        <p>368</p>
                        <p className='text-xs text-[#5b5b5c]'>Posts</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-16'>
                        <p>184k</p>
                        <p className='text-xs text-[#5b5b5c]'>Followers</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-16'>
                        <p>1M</p>
                        <p className='text-xs text-[#5b5b5c]'>Followings</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
