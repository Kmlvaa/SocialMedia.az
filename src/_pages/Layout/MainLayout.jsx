import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div className='flex flex-row bg-[#101010] w-full h-screen text-[#FDFDFD] '>
            <section className='w-1/4'>
                <Sidebar />
            </section>
            <section className='bg-[#1a1a1a] w-full h-full rounded-3xl m-5 p-5 border border-[#2c2c2c]'>
                <Outlet />
            </section>
        </div>
    )
}
