import React from 'react'
import Link from "next/link";
import { MdOutlineSavings } from "react-icons/md";
import { FaRegUser, FaSearchDollar } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { TbCalendarStats, TbHome2 } from "react-icons/tb";

const SideBarData = ({ toggle }) => {
    return (

        <div>
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><TbHome2 style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/">Home</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><BiWallet style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/billetera-general">Billetera General</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><FaSearchDollar style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/control-de-gastos">Control de Gastos</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><MdOutlineSavings style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/plan-de-ahorros">Plan de Ahorros</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><IoCardOutline style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/tarjetas">Tarjetas</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><TbCalendarStats style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/recordatorios">Recordatorios</Link>
                </div>
             </div>  
            <div 
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown"><FaRegUser style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                <Link href="/recordatorios">Perfil</Link>
                </div>
             </div>  
            
            
        </div>
       
    )
}

export default SideBarData