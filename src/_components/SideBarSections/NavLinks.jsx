import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export default function NavLinks() {
  return (
    <div className='w-full flex flex-col gap-1'>
      <div className='flex flex-row items-center justify-start gap-2 hover:bg-[#191b1b] py-2 px-4 rounded-lg bg-[#242627] cursor-pointer'>
        <IoHomeOutline className='text-yellow-400'/>
        <p>Feed</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 hover:bg-[#191b1b] py-2 px-4 rounded-lg cursor-pointer'>
        <BiMessageSquareDots className='text-blue-500'/>
        <p>Messages</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 hover:bg-[#191b1b] py-2 px-4 rounded-lg cursor-pointer'>
        <IoNotificationsOutline className='text-red-500'/>
        <p>Notifications</p>
      </div>
      <div className='flex flex-row items-center justify-start gap-2 hover:bg-[#191b1b] py-2 px-4 rounded-lg cursor-pointer'>
        <IoSettingsOutline className='text-green-500'/>
        <p>Settings</p>
      </div>
    </div>
  )
}
