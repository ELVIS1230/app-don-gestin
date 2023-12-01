import React from 'react'
import { TbCalendarStats, TbHome2 } from "react-icons/tb";

function Recordatorios() {
  return (
    <div className='flex'>
      
      <div className="w-3/5 p-4">
        
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
        <div className='p-4'>
        <div>

        <h1 className='font-bold text-2xl'>Recordatorios</h1>
        <span><TbCalendarStats size={75}/></span>
        </div>
        <h1>asdasdasd</h1>
        </div>
        </div>
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">Fila 2 - Columna 1</div>
        <div className="bg-gray-200 p-4 rounded-2xl">Fila 3 - Columna 1</div>
      </div>

      
      <div className="w-2/5 p-4">
        
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">Fila 1 - Columna 2</div>
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">Fila 2 - Columna 2</div>
        <div className="bg-gray-200 p-4 rounded-2xl">Fila 3 - Columna 2</div>
      </div>
    </div>
  )
}

export default Recordatorios