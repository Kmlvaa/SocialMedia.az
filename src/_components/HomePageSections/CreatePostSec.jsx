import { LuImage } from "react-icons/lu";
import { FaHashtag } from "react-icons/fa";

export default function CreatePostSec() {
    return (
        <div className='rounded-lg bg-black w-full h-32 my-5 p-5'>
            <div className='flex flex-row items-center gap-3'>
                <div className='rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 p-[2px] w-8 h-8'>
                    <img src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740' alt='Profile Photo' className='rounded-full object-cover' />
                </div>
                <div className='w-full'>
                    <input className='border-custom-gray1 border bg-[#101010] text-custom-gray-light p-2 text-xs w-full rounded-lg' placeholder='What is happening?' />
                </div>
            </div>
            <div className="mt-8 flex flex-row justify-between">
                <div className="flex flex-row items-center gap-5">
                    <div className="flex flex-row gap-1 items-center">
                        <LuImage className="text-custom-gray-light" />
                        <p className="text-custom-gray-light text-xs">Media Content</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <FaHashtag className="text-custom-gray-light" />
                        <p className="text-custom-gray-light text-xs">Hashtags</p>
                    </div>
                </div>
                <button className="text-xs rounded-md bg-red-700 py-1 px-4 hover:bg-red-500">Post</button>
            </div>
        </div>
    )
}
