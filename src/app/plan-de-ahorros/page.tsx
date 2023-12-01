import React from 'react'
import { FaCar } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineSavings } from "react-icons/md";


function PlanAhorros() {
  return (
    <div className='flex'>
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
          <div className="flex items-center">
            <h1 className='text-xl font-bold flex-1'>Elige tu plan de ahorro</h1>
            <MdOutlineSavings size={150} className="text-black-500" />
          </div>
          <p className="text-gray-700"
            style={{ paddingBottom: "8px" }}>
            Usa un plan de ahorro para mejorar tu economía.
          </p>
        </div>
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl" id='planes_ahorro'
          style={{
            borderRadius: "10px"
          }}>
          <p className='font-bold mb-4'>Tus Planes de Ahorro</p>
          {/* Div de cada plan creado */}
          <div className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
            paddingTop: "20px",
            marginTop: "20px"
          }}>
            <div className="bg-white rounded-lg p-2 flex items-center">
              <FaCar size={30} className="mr-2" />
              <h3 className="font-medium">Auto Nuevo</h3>
            </div>
            <div className="flex-grow text-center">
              <p>$ Ahorrado</p>
              <p>$200.00</p>
            </div>
            <div className="flex-grow text-center">
              <p>$ Por Ahorrar</p>
              <p>$800.00</p>
            </div>

            <div className="flex-grow text-center">
              <p>$ Meta</p>
              <p>$1000.00</p>
            </div>
            <button className=" bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">Ver</button>
          </div>

          {/* Div de cada plan creado */}
          <div className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
            paddingTop: "20px",
            marginTop: "20px"
          }}>

            <div className="bg-white rounded-lg p-2 flex items-center">
              <IoHome size={30} className="mr-2" />
              <h3 className="font-medium">Casa Nueva</h3>
            </div>
            <div className="flex-grow text-center">
              <p>$ Ahorrado</p>
              <p>$200.00</p>
            </div>
            <div className="flex-grow text-center">
              <p>$ Por Ahorrar</p>
              <p>$800.00</p>
            </div>

            <div className="flex-grow text-center">
              <p>$ Meta</p>
              <p>$1000.00</p>
            </div>
            <button className=" bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">Ver</button>
          </div>
        </div>

      </div>
      <div className='w-2/5 p-4'>

        <div className='bg-gray-200 '
          style={{
            padding: "10px",
            borderRadius: "10px"
          }}>

          <p className='text-black text-center font-bold'
            style={{
              paddingBottom: "5px"
            }}>Nuevo Plan de Ahorro</p>

          <div style={{
            marginLeft: "20px",
            marginRight: "20px"
          }}>
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
              <button className=" bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg" >Crea plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlanAhorros;