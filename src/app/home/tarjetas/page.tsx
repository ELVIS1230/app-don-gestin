"use client";

import ModalTarjeta from '@/componentes/tarjetas/creacionTarjetaModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";


function Tarjetas() {

  const [data, setData] = useState(null);
  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/${credentialUser.cuenta}`)
        setData(response.data); // Guarda los datos en el estado
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []);
  console.log(data)

  return (
    <div className='flex'>
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='font-black text-5xl py-4'>Tus Tarjetas</h1>
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
            <p className='static font-bold mt-3 mr-auto text-xl py-4'>Movimiento de las Tarjetas</p>
            <ModalTarjeta credentialUser={credentialUser} />
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
                <p>Crédito</p>
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
                <p className='font-bold text-lg'>Total</p>
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
                <p className='font-bold text-lg'>Total</p>
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
                <p>Crédito</p>
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
                <p className='font-bold text-lg'>Total</p>
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
                <p className='font-bold text-lg'>Total</p>
                <p >$1000.00</p>
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
                <p className='font-bold text-lg'>Total</p>
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
                <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg " >$800.00</p>
              </div>

              <div className="flex-grow text-center">
                <p className='font-bold text-lg'>Total</p>
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
                <p className='font-bold text-lg'>Total</p>
                <p >$1000.00</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 p-4 justify-center ">
        <div className="p-4">
          <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
            <div className="border-b-4 border-white ">
              <div className="font-bold text-xl mb-2 text-center">Tarjeta de Crédito</div>
            </div>
            <div className="text-gray-700 text-base mx-6 mt-2">
              <div className='font-bold text-lg'>Banco: Pichincha</div>
              <div className='font-bold text-lg'>Saldo Disponible: $20.00,09</div>
              <div className='font-bold text-lg'>Fecha de Corte: 01-12-2023</div>
              <div className='font-bold text-lg'>Fecha de Vencimiento: 15-12-2023</div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
            <div className="border-b-4 border-white">
              <div className="font-bold text-xl mb-2 text-center">Tarjeta de Débito</div>
            </div>
            <div className="text-gray-700 text-base mx-6 mt-2">
              <div className='font-bold text-lg'>Banco: Pichincha</div>
              <div className='font-bold text-lg'>Saldo Disponible: $20.00,09</div>
              <div className='font-bold text-lg'>Fecha de Caducidad: 15-12-2023</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tarjetas