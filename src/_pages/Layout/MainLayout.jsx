import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div className='flex flex-row bg-[#101010] w-full h-full text-[#FDFDFD] overflow-x-hidden'>
            <aside className='w-96 fixed'>
                <Sidebar />
            </aside>
            <main className='bg-[#1a1a1a] w-full h-full rounded-3xl my-5 border border-[#2c2c2c] ml-96 overflow-x-hidden'>
                <Outlet />
            </main>
        </div>
    )
}
