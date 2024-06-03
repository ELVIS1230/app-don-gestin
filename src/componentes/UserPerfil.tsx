import React from 'react'
import Image from 'next/image'
import user from '../assets/user.jpg'

export default function UserPerfil({ toggle }:{toggle:any}) {
    const credentialUser = JSON.parse(sessionStorage.getItem('user') as string)
    console.log(credentialUser)
    return (
        <div className={`flex gap-5 items-center ${ toggle ? 
        "bg-none transition-all duration-300 delay-200" : 
        "bg-white rounded-xl p-2"}`}>
            <div className='min-w-[3.5rem] h-[3.5rem]'>
                <Image
                    src={user}
                    alt=""
                    className='w-full h-full rounded-full
                    object-cover'
                />
            </div>
            <div className={toggle ? "opacity-0 delay-200" : ""}
            >
                <h3 className="text-xl">{credentialUser.name } {credentialUser.lastName }</h3>
                {/* <span className='text-[0.75rem]
                opacity-60'>{credentialUser.email}</span> */}
            </div>
        </div>
    )
}

;