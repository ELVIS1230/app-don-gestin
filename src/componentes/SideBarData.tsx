import React from 'react'
import Link from "next/link";

const SideBarData = ({ toggle }) => {
    return (

        <div>
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/">Home</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/">Billetera General</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/control-de-gastos">Control de gastos</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/plan-de-ahorros">Plan de Ahorros</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/tarjetas">Tarjetas</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/recordatorios">Recordatorios</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown">icono</div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre text-`}>
                <Link href="/recordatorios">Perfil</Link>
                </div>
             </div>  
            
            
        </div>
       
    )
}

export default SideBarData