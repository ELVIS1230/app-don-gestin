"use client";

import ModalRecordatorio from '@/componentes/Addrecordatorio';
import React from 'react'
import { TbCalendarStats, TbHome2 } from "react-icons/tb";

function Recordatorios() {
  return (
    <div className='flex'>

      <div className="w-3/5 p-4 h-[100%]">

        <div className="mb-6 bg-zinc-200 p-4 rounded-2xl min-h-25% shadow-xl">
          <div className='p-4'>
            <div className='flex justify-between'>
              <div className='item-center'>
                <h1 className='font-black text-5xl py-4'>Recordatorios</h1>
                <p>Tu sitio para revisar todos tus pendientes económicos</p>

              </div>
              <span className=''><TbCalendarStats size={95} /></span>
            </div>
          </div>
        </div>
        <div className="mb-6 bg-zinc-200 px-4 rounded-2xl shadow-xl">
          <div><h1 className='font-bold text-base py-2'>Pagos Consumo</h1></div>
          <div className="grid grid-cols-4 gap-4 py-3">
            <div className="font-bold text-lg">Tarjeta</div>
            <div className="font-bold text-lg">Nombre</div>
            <div className="font-bold text-lg">Fecha</div>
            <div className="font-bold text-lg">Descripción</div>

          </div>
          <div className='min-h-[200px] max-h-[200px] overflow-auto scrollbar-thumb:!roudend'>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              <div className="font-bold text-base">Luz</div>
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
          </div>
        </div>
        <div className="mb-6 bg-zinc-200 px-4 rounded-2xl shadow-xl">
          <div><h1 className='font-bold text-base py-2'>Pagos Tarjeta</h1></div>
          <div className="grid grid-cols-3 gap-4 py-3">
            <div className="font-bold text-lg">Tarjeta</div>
            
            <div className="font-bold text-lg">Fecha</div>
            <div className="font-bold text-lg">Descripción</div>

          </div>
          <div className='min-h-[135px] max-h-[135px] overflow-auto'>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>
              
              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
          </div>
        </div>
        
      </div>


      <div className="w-2/5 p-4 h-full">
        <div className="mb-6 bg-neutral-100 p-4 rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Agregar Recordatorio</h2>
          <div className="">
            <ModalRecordatorio></ModalRecordatorio>
          </div>



        </div>
        <div className="mb-6 bg-neutral-500 p-4 rounded-2xl">Fila 2 - Columna 2</div>
        <div className="bg-neutral-500 p-4 rounded-2xl">Fila 3 - Columna 2</div>
      </div>
    </div>
  )
}

export default Recordatorios