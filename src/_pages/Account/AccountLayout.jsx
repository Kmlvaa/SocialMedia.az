import React from 'react'
import { Outlet } from 'react-router'

export default function AccountLayout() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Outlet />
        </div>
    )
}
