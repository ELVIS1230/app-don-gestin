"use client";

import ModalTarjeta from '@/componentes/tarjetas/creacionTarjetaModal';
import React from 'react'
import { FaCcMastercard } from "react-icons/fa";

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
            <p className='static font-bold mt-3 mr-auto'>Movimiento de las Tarjetas</p>
            <ModalTarjeta></ModalTarjeta>
          </div>

          <div >
          </div>
          <div className='max-h-[450px] overflow-auto scrollbar-thumb:!rounded scroll-container'>
            {/* Div de cada plan creado */}

            <div className=' flex flex-col md:flex-row items-start border-t border-gray-300' style={{
              paddingTop: "20px",
              marginTop: "20px"
            }}>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
            
              <div className="flex-grow text-center">
                <p></p>
                <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >$1000.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              <div className="flex-grow text-center items-center">
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >$800.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              <div className="flex-grow text-center items-center">
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >$800.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              <div className="flex-grow text-center items-center">
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >$800.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              <div className="flex-grow text-center items-center">
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >$800.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              <div className="flex-grow text-center items-center">
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >$800.00</p>
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
              <div className="flex-grow text-center">
                <p className='font-bold text-lg' >Tipo</p>
                <p>Debito</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Banco</p>
                <p>Pichincha</p>
              </div>
              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Fecha</p>
                <p>01/02/2023</p>
              </div>
              
              <div className="flex-grow text-center">
                <p></p>
                <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >$1000.00</p>
              </div>

              <div className="flex-grow text-center">
              <p>Total</p>
              <p>$1000.00</p>
            </div>

            </div>
          </div>
        </div>
        </div>
        <div className="w-2/5 p-4 justify-center ">
          <div className="p-4">
            <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
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

          <div className="p-4">
            <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
              <div className="border-b-4 border-gray-500">
                <div className="font-bold text-xl mb-2 text-center">Tarjeta de Débito</div>
              </div>
              <div className="text-gray-700 text-base mx-6 mt-2">
                <div>Banco: Pichincha</div>
                <div>Saldo Disponible: $20.00,09</div>
                <div>Fecha de Caducidad: 15-12-2023</div>
              </div>
            </div>
          </div>
        </div>




      </div>
      )
}

      export default Tarjetas