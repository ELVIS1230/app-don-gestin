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
                <h1 className='font-bold text-2xl py-4'>Recordatorios</h1>
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
            <div className="mb-4">
              <label htmlFor="title" className="block text-neutral-900 text-sm font-bold mb-2"></label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Ingrese título o nombre"
                className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
              />
            </div>

            <div className="flex lg:flex-row flex-col lg:items-center">
              <div className="flex-grow lg:mr-2 mb-4 lg:mb-0">
                <label htmlFor="date" className="block text-neutral-900 text-sm font-bold mb-2"></label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Seleccione fecha"
                  className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadown-md"
                />
              </div>

              <div className="flex-grow">
                <label htmlFor="time" className="block text-neutral-900 text-sm font-bold mb-2"></label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  placeholder="Seleccione hora"
                  className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadown-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-neutral-900 text-sm font-bold mb-2"></label>
              <textarea
                id="description"
                name="description"
                placeholder="Ingrese descripción"
                className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadown-md"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="cards" className="block text-neutral-900 text-sm font-bold mb-2">Seleccione una tarjeta</label>
              <select
                id="cards"
                name="cards"
                className="bg-white border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadown-md"
              >
                <option value="" disabled selected hidden>Tarjetas</option>
                <option value="card1">Tarjeta 1</option>
                <option value="card2">Tarjeta 2</option>
                <option value="card3">Tarjeta 3</option>
              </select>
            </div>

            <div className='grid justify-items-center'>
              <button type="submit" className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">Agregar</button>
            </div>
          </div>



        </div>
        <div className="mb-6 bg-neutral-500 p-4 rounded-2xl">Fila 2 - Columna 2</div>
        <div className="bg-neutral-500 p-4 rounded-2xl">Fila 3 - Columna 2</div>
      </div>
    </div>
  )
}

export default Recordatorios