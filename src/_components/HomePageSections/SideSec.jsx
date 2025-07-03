import React from 'react'

export default function SideSec() {
    return (
        <div>
            <h1>Search for people</h1>
            <div className='w-full my-2'>
                <input className='border-custom-gray1 border bg-[#101010] text-custom-gray-light p-2 text-xs w-full rounded-lg' placeholder='Search...' />
            </div>
            <div className='w-full h-px bg-custom-gray1'></div>
            {/* <section className='my-5 w-full'>
                <div className=''>
                    <h1>Suggessions</h1>
                    <p className='text-custom-gray-light underline text-sm'>View all</p>
                </div>
                <div>
                    {users.map((user) => {
                        return (
                            <div id={user.id} className=''>
                                <div className='rounded-full w-12 h-12 p-[2px]'>
                                    <img src={user.pp} className='rounded-full object-cover' />
                                </div>
                                <div className=''>
                                    <p>{user.username}</p>
                                    <p className=''>{user.bio}</p>
                                </div>
                                <div></div>
                            </div>
                        );
                    })}
                </div>
            </section> */}
        </div>
    )
}

const users = [
    {
        id: 1,
        username: 'Alex Bishop',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
        bio: 'Sweat, Smile, Repeat'
    },
    {
        id: 2,
        username: 'Bella Bean',
        pp: 'https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740',
        bio: 'Savoring every flavor life'
    },
    {
        id: 3,
        username: 'Alex Bishop',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
        bio: 'Sweat, Smile, Repeat'
    },
    {
        id: 4,
        username: 'Alex Bishop',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
        bio: 'Sweat, Smile, Repeat'
    },
    {
        id: 5,
        username: 'Alex Bishop',
        pp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4dIQ_TKK26IXD5WSJQLfAx1svGsDZCmde_2ABw46h3Jzq1dGPFA0AfetjKtqImK18MI&usqp=CAU',
        bio: 'Sweat, Smile, Repeat'
    },
]
