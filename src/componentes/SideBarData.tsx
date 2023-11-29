import React from 'react'
import Link from "next/link";

const SideBarData = ({ toggle }) => {
    return (
        
            <div className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            }sidebar last:absolute left-4 bottom-4`} >
            
                <div className='mr-8 text-[1-7rem]
                text-brown'>icono</div>
                <div className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}>
                <Link href="/">Home</Link>
                </div>

                <div className='mr-8 text-[1-7rem]
                text-brown'>icono</div>
                <div className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}>
                <Link href="/control-de-gastos">Control de gastos</Link>
                </div>
                
                <div className='mr-8 text-[1-7rem]
                text-brown'>icono</div>
                <div className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}>
                <Link href="/plan-de-ahorros">Plan de Ahorros</Link>
                </div>
                
                <div className='mr-8 text-[1-7rem]
                text-brown'>icono</div>
                <div className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}>
                <Link href="/tarjetas">Tarjetas</Link>
                </div>
               
                <div className='mr-8 text-[1-7rem]
                text-brown'>icono</div>
                <div className={`${toggle ? "opacity-0 delay-200" : ""}
                text-[1rem] text-brown whitespace-pre`}>
                <Link href="/recordatorios">Recordatorios</Link>
                </div>
                                           
                
             </div>  
       
    )
}

export default SideBarData