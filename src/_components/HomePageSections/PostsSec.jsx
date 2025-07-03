import React, { useState } from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default function PostsSec() {

    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='my-5'>
            {data.map((post) => {
                return (
                    <div className='bg-black my-5 rounded-lg p-5 text-xs'>
                        <header className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-2 items-center justify-start'>
                                <div className='rounded-full w-8 h-8 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 p-[2px]'>
                                    <img src={post.pp} className='rounded-full object-cover' />
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-xs'>{post.user}</h4>
                                    <p className='text-custom-gray-light text-[10px]'>{post.date}</p>
                                </div>
                            </div>
                            <div>
                                <HiOutlineDotsHorizontal />
                            </div>
                        </header>
                        <main className='rounded-lg w-full h-80 my-5'>
                            <img src={post.image} alt='user post' className='rounded-lg object-cover h-80 w-full' />
                        </main>
                        <footer>
                            <p>{post.content}</p>
                            <div className='mb-6 mt-2'>
                                {post.hashtags?.map((tag, index) => (
                                    <span key={index} className="text-blue-500 mr-2">
                                        {tag.startsWith('#') ? tag : `#${tag}`}
                                    </span>
                                ))}
                            </div>
                            <div className='w-full h-px bg-custom-gray1'></div>
                            <div className='flex flex-row items-center justify-start gap-5 mt-3'>
                                <div className='flex flex-row items-center gap-1 justify-center'>
                                    <div className='cursor-pointer' onClick={() => {setIsLiked(!isLiked)}}>
                                        {isLiked ? <FaHeart className='w-4 h-4'/> : <FaRegHeart className='w-4 h-4'/>}
                                    </div>
                                    <span>{post.likes}</span>
                                </div>
                                <div className='flex flex-row items-center gap-1 justify-center'>
                                    <div className='cursor-pointer'><FaRegComment className='w-4 h-4'/></div>
                                    <span>{post.comments}</span>
                                </div>
                                <div className='flex flex-row items-center gap-1 justify-center'>
                                    <div className='cursor-pointer'><IoShareSocialOutline className='w-4 h-4'/></div>
                                    <span>{post.shares}</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                );
            })}
        </div>
    )
}

const data = [
    {
        id: 1,
        user: 'kmlva',
        content: 'hello friends..',
        date: '03/07/2025 7:21 pm',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
        hashtags: ['#blender', 'render', 'design'],
        likes: '11k',
        comments: '23k',
        shares: '300',
        image: 'https://wallpapercat.com/w/full/a/8/7/5815535-3840x2160-desktop-hd-4k-wallpaper-image.jpg'
    },
    {
        id: 2,
        user: 'user2393',
        content: 'hello friends..hello friends..hello friends..hello friends..hello friends..hello friends..hello friends..hello friends..',
        date: '14/06/2025 8:45 am',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLturnt6kCYAJvqYY3TVT3hdMXWMTv0yB9WBmzuktKpSEO8BpE-bShilDuqcEQe-yUtA&usqp=CAU',
        hashtags: ['#blender', 'render', 'design'],
        likes: '11k',
        comments: '23k',
        shares: '267',
        image: 'https://images8.alphacoders.com/932/932379.jpg'
    },
]
