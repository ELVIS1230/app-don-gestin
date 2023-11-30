"use client";

import React from 'react'
import { useState } from 'react'
import {BiChevronLeft} from 'react-icons/bi'
import UserPerfil from '@/componentes/UserPerfil';
import SideBarData from '@/componentes/SideBarData';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""}
    sidebar-container`}>
      <UserPerfil toggle={toggle}/>
      <SideBarData toggle={toggle}/>
      <div 
      className="absolute top-[7rem] flex 
      justify-center items-center -left-5 w-10 h-10 
      bg-gray-300 rounded-full cursor-pointer"
      onClick={() => {
        setToggle(!toggle);
      }}>
        <BiChevronLeft 
        className={`${
          toggle ? "rotate-180" : ""
          } text-3xl transition-all duration-300`}/>
      </div>
      </div>
  )
}

export default Sidebar

// import Link from "next/link";

// import React from 'react'

// function Sidebar() {
//   return (
//     <>
//     <ul className="list list-disc border-2 border-black list-style-position: inside">
//     <li>
//       <Link href="/">Home</Link>
//     </li>
//     <li><Link href="/control-de-gastos">Control de gastos</Link>
//     </li>
//     <li><Link href="/plan-de-ahorros">Plan de Ahorros</Link>
//     </li>
//     <li><Link href="/tarjetas">Tarjetas</Link>
//     </li>
//     <li><Link href="/recordatorios">Recordatorios</Link>
//     </li>
//     <li className="text-red-500">asdasd</li>
//   </ul>
//   </>
    
//   )
// }

// export default Sidebar;