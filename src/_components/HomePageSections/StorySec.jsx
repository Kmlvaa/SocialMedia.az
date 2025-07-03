import { GoPlus } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function StorySec() {
    return (
        <div className="flex flex-row gap-4 items-center">
            <div className='flex flex-col items-center justify-center gap-2 w-20'>
                <div className='rounded-full border border-dashed border-custom-gray-light w-14 h-14 flex items-center justify-center'>
                    <GoPlus className="text-custom-gray-light" />
                </div>
                <p className="text-xs">Add story</p>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={7}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {stories.map((story) => {
                    return (
                        <SwiperSlide>
                            <div id={story.id} className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                                <div className='rounded-full w-14 h-14 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 p-[2px]'>
                                    <img src={story.image} alt='Profile Photo' className='rounded-full object-cover' />
                                </div>
                                <p className="text-xs">{story.name}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

const stories = [
    {
        id: 1,
        name: 'Stephan',
        image: 'https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740'
    },
    {
        id: 2,
        name: 'Julia',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLturnt6kCYAJvqYY3TVT3hdMXWMTv0yB9WBmzuktKpSEO8BpE-bShilDuqcEQe-yUtA&usqp=CAU'
    },
    {
        id: 1,
        name: 'Edgar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU'
    },
    {
        id: 1,
        name: 'Stephan',
        image: 'https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740'
    },
    {
        id: 2,
        name: 'Julia',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLturnt6kCYAJvqYY3TVT3hdMXWMTv0yB9WBmzuktKpSEO8BpE-bShilDuqcEQe-yUtA&usqp=CAU'
    },
    {
        id: 1,
        name: 'Edgar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU'
    },
    {
        id: 1,
        name: 'Stephan',
        image: 'https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740'
    },
    {
        id: 2,
        name: 'Julia',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtLturnt6kCYAJvqYY3TVT3hdMXWMTv0yB9WBmzuktKpSEO8BpE-bShilDuqcEQe-yUtA&usqp=CAU'
    },
    {
        id: 1,
        name: 'Edgar',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU'
    },
]