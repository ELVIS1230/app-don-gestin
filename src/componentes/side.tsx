import Link from "next/link";

import React from 'react'

function Sidebar() {
  return (
    <>
    <ul className="list list-disc border-2 border-black list-style-position: inside">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li><Link href="/control-de-gastos">Control de gastos</Link>
    </li>
    <li><Link href="/plan-de-ahorros">Plan de Ahorros</Link>
    </li>
    <li><Link href="/tarjetas">Tarjetas</Link>
    </li>
    <li><Link href="/recordatorios">Recordatorios</Link>
    </li>
    <li className="text-red-500">asdasd</li>
  </ul>
  </>
    
  )
}

export default Sidebar;