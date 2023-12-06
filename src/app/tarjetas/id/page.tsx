import React from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { MdOutlineAddCard } from "react-icons/md";

function Tarjetas() {
  return (
    <div className='flex'>
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='text-xl font-bold'>Tus Tarjetas</h1>
              <p className="text-gray-700 pt-4">
                Tarjetas disponibles y detalles
              </p>
            </div>
            <div className="ml-auto ">
              <FaCcMastercard size={150} className="text-black-500" />
            </div>
          </div>
        </div>
        <div className=" mb-4 bg-gray-200 p-4 rounded-2xl " id='planes_ahorro'
          style={{
            borderRadius: "10px"
          }}
        >
          <div className="flex">
            <p className='static font-bold mt-3'>Movimientos de la Tarjeta</p>
            <button className="ml-auto bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg"><MdOutlineAddCard size={25} /></button>
          </div>
          {/* Div de cada plan creado */}
          <div className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
            paddingTop: "20px",
            marginTop: "20px"
          }}>
            <div className="bg-white rounded-lg p-2 flex items-center">
              <IoIosCard size={30} />
            </div>
            <div className="flex-grow text-center">
              <p>Fecha</p>
              <p>02/02/2023</p>
            </div>
            <div className="flex-grow text-center">
              <p>Ingresos</p>
              <p>$800.00</p>
            </div>

            <div className="flex-grow text-center">
              <p>Gastos</p>
              <p>$1000.00</p>
            </div>

            <div className="flex-grow text-center">
              <p>Total</p>
              <p>$1000.00</p>
            </div>

          </div>

          {/* Div de cada plan creado */}
          <div className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
            paddingTop: "20px",
            marginTop: "20px"
          }}>
            <div className="bg-white rounded-lg p-2 flex items-center">
              <IoIosCard size={30} />
            </div>

            <div className="flex-grow text-center">
              <p>Fecha</p>
              <p>01/02/2023</p>
            </div>
            <div className="flex-grow text-center">
              <p>Ingresos</p>
              <p>$800.00</p>
            </div>

            <div className="flex-grow text-center">
              <p>Gastos</p>
              <p>$1000.00</p>
            </div>
            <div className="flex-grow text-center">
              <p>Total</p>
              <p>$1000.00</p>
            </div>
          </div>
        </div>

      </div>

      <div className="w-2/5 p-4">
        <div className="p-4">
          <div className="rounded shadow-lg">
            <div className="py-4 bg-gray-200 rounded-2xl">
              <div className="border-b-4 border-gray-500">
                <div className="font-bold text-xl mb-2 text-center">Tarjeta de Crédito</div>
              </div>
              <div className="text-gray-700 text-base mx-6 mt-2">
                <div>Banco: Pichincha</div>
                <div>Saldo Disponible: $20.00,09</div>
                <div>Fecha de Corte: 01-12-2023</div>
                <div>Fecha de Vencimiento: 15-12-2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tarjetas