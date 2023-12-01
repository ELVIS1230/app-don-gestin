import React from 'react'
import { FaCar } from "react-icons/fa6";


function PlanAhorros() {
  return (
    <div className=' h-screen flex justify-center rounded-lg' style={{ margin: "10px" }}>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">

        <div className='col-span-2 text-black py-4 text-center max-w-md'
          style={{
            background: "#B9B9B9",
            margin: "80px",
            borderRadius: "10px"
          }}>
          <div>
            <h1 className='text-xl font-bold'>Elige tu plan de ahorro</h1>
            <p>Usa un plan de ahorro para mejorar tu economía.</p>
          </div>
        </div>
        <div className="col-span-2 text-black py-8 text-center max-w-md"
          style={{
            background: "#B9B9B9",
            margin: "80px",
            borderRadius: "10px"
          }}>
          <div>
            <p className='font-bold'>Tus Planes de Ahorro</p>
          </div>
          <div>
            <div className='container mx-auto'
              style={{
                backgroundColor: "white",
                borderRadius: "5px"
              }}>
              <FaCar />
            </div>
            <div> </div>
          </div>
        </div>

        <div className='text-black container mx-auto p-4 gap-4 '
          style={{
            background: "#B9B9B9",
            margin: "30px",
            padding: "10px",
            borderRadius: "10px"
          }}>
          <p className='text-white'>Nuevo Plan de Ahorro</p>

          <div className='justify-between ' style={{ display: 'flex', justifyContent: 'space-between' }} >
            <div className='shadow-inner' style={{ padding: '5px', border: '1px solid black', borderRadius: "10px" }}>

              <p >$ 2,000.00</p> </div>
            <p style={{ marginLeft: '10px' }}>Para_____ </p>
          </div>

          <div className='justify-between' style={{ display: 'flex' }} >
            <p >Mensualidad:</p>
            <p style={{ marginLeft: '10px' }}>450.00</p>
          </div>

          <div className='justify-between' style={{ display: 'flex' }} >
            <p >Duración:</p>
            <p style={{ marginLeft: '10px' }}>12 Meses</p>
          </div>
          <div><p>Descripcion</p></div>
          <div className="flex justify-center">
            <button className=" bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" >Crea plan</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PlanAhorros;