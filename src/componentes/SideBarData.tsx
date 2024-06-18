import React from 'react'
import Link from "next/link";
import { MdOutlineSavings } from "react-icons/md";
import { FaRegUser, FaSearchDollar } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { TbCalendarStats, TbHome2 } from "react-icons/tb";
import { PiSignOutDuotone } from "react-icons/pi";

export default function SideBarData({ toggle }:{toggle:any})  {
    return (

        <div>
            <Link
            href="/home"
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
                Home
                </div>
             </Link>  
            <Link
            href="/home/wallet"
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
                Billetera General
                </div>
             </Link>  
            {/* <div 
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
                <Link href="/home/control-de-gastos">Control de Gastos</Link>
                </div>
             </div>   */}
            <Link
            href="/home/savings-plan"
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
                Plan de Ahorros
                </div>
             </Link>  
            <Link
            href="/home/cards"
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
                Tarjetas
                </div>
             </Link>  
            <Link
            href="/home/reminders"
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
                Recordatorios
                </div>
             </Link>  
            <Link
            href="/auth/login"
            className={`${
                toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`} 
            >
                <div className="mr-8 text-[1-7rem]
                text-brown transform rotate-180"><PiSignOutDuotone style={{ color: 'white' }} size={35}/></div>
                <div 
                className={`${
                    toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-white whitespace-pre text-`}>
                Salir
                </div>
             </Link>  
            
            
        </div>
       
    )
}

