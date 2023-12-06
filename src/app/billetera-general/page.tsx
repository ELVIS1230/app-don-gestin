"use client";

import ModalBGIngreso from '@/componentes/IngresosBGmodal';
import React from 'react'
import { BiWallet } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
{/* <RiSubtractFill /> */ }

function BilleteraG() {
  return (
    <div className='flex'>

      <div className="w-3/5 p-4 h-[100%]">

        <div className="mb-6 bg-zinc-200 p-4 rounded-2xl min-h-25% shadow-xl">
          <div className='p-4'>
            <div className='flex justify-between'>
              <div className='item-center'>
                <h1 className='font-black text-5xl py-4'>Tu Billetera</h1>
                <p>Inicia tu gestión financiera ingresando los valores que vas a controlar.</p>

              </div>
              <span className=''><BiWallet size={95} /></span>
            </div>
          </div>
        </div>
        <div className="mb-6 bg-zinc-200 px-4 rounded-2xl shadow-xl">
          <div><h1 className='font-bold text-xl py-2 pb-6'>Movimientos de Ingresos y Egresos a tus tarjetas</h1></div>
          {/* <div className="grid grid-cols-10 gap-4 py-3">
            <div className="font-bold text-lg col-span-1"></div>
            <div className="font-bold text-lg col-span-2">Transacción</div>
            <div className="font-bold text-lg col-span-2">Fecha</div>
            <div className="font-bold text-lg col-span-3">Tarjeta</div>
            <div className="font-bold text-lg col-span-2 grid justify-items-end">Valor</div>

          </div> */}
          <div className='min-h-[450px] max-h-[450px] overflow-auto scrollbar-thumb:!roudend'>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><RiSubtractFill style={{ color: 'red' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Gasto</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><IoMdAdd style={{ color: 'green' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Ingreso</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><IoMdAdd style={{ color: 'green' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Ingreso</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><IoMdAdd style={{ color: 'green' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Ingreso</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><IoMdAdd style={{ color: 'green' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Ingreso</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><RiSubtractFill style={{ color: 'red' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Gasto</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><RiSubtractFill style={{ color: 'red' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Gasto</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>
            <div className="grid grid-cols-10 gap-4 pb-7">
              <div className="flex items-center py-3 bg-white rounded-xl">
                <div className='ml-3'><IoMdAdd style={{ color: 'green' }} size={25} />
                </div></div>
              <div className="col-span-2">
                <div>
                  <p className='font-bold text-base'>Ingreso</p>
                  <p className="font-bold text-xs">Tarjeta de Debito</p>
                </div>
              </div>
              <div className="font-bold text-base px-3 col-span-2">
                <div>
                  <p className='font-bold text-base'>Lunes,</p>
                  <p className="text-sm">22 - 12 - 2023</p>
                </div>
              </div>
              <div className="font-bold text-xs col-span-3">
                <div>
                  <p className='font-bold text-base'>Banco Bolivariano</p>
                  <p className="font-bold text-xs">22******15</p>
                </div>
              </div>
              <div className="font-bold text-xl col-span-2 px-3 grid justify-items-end">$ 300.00</div>
            </div>




          </div>
        </div>


      </div>


      <div className="w-2/5 p-4 h-full">
        <div className="mb-6 bg-neutral-100 p-4 rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Agregar a tu Billetera</h2>
          <div className="">
            <div >
              <ModalBGIngreso></ModalBGIngreso>
            </div>
          </div>



        </div>
        <div className="mb-6 bg-neutral-100 p-4 rounded-2xl">Fila 2 - Columna 2</div>
        <div className="bg-neutral-500 p-4 rounded-2xl">Fila 3 - Columna 2</div>
      </div>
    </div>
  )
}

export default BilleteraG