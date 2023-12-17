"use client";

import ModalTarjeta from '@/componentes/tarjetas/creacionTarjetaModal';
import axios from 'axios';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";


function Tarjetas() {

  const [data, setData] = useState(null);
  const [saldo, setAccount] = useState({});

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);
  // Verificar si hay datos y ordenar por fecha
  const dataORD = data && [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/${credentialUser.cuenta}`)
        setData(response.data); // Guarda los datos en el estado

        const account = await axios.get(`http://localhost:3000/api/users/account/${credentialUser.cuenta}`)
        setAccount(account.data); // Guarda los datos en el estado

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

            {dataORD && dataORD.map((item) => {
              return (
                <div key={item.tarj_id} className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
                  paddingTop: "20px",
                  marginTop: "20px"
                }}>
                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg' >Tipo</p>
                    <p>{item.tiptarj_id}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Banco</p>
                    <p>{item.tarj_nombre}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Fecha</p>
                    <p> {format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p></p>
                    <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >$1000.00</p>
                  </div>


                </div>)

            })}
          </div>
        </div>
      </div>
      <div className="w-2/5 p-4 justify-center ">

        <div className='max-h-[750px] overflow-auto scrollbar-thumb:!rounded scroll-container'>
          {dataORD && dataORD.map((item) => {
            console.log(item);
            return (
              <div key={item.tarj_id} className="p-4">
                <Link href={`/home/tarjetas/${item.tarj_id}`}>
                  <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
                    <div className="border-b-4 border-white">
                      <div className="font-bold text-xl mb-2 text-center">
                        Tarjeta de {item.tiptarj_id}
                      </div>
                    </div>
                    <div className="text-gray-700 text-base mx-6 mt-2">
                      <div className='text-lg'>Banco: {item.tarj_nombre}</div>
                      <div className='text-lg'>Saldo Disponible: {item.tarj_saldo_total}</div>
                      <div className='text-lg'>Fecha de Vencimiento: {item.tarj_fecha_vencimiento}</div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default Tarjetas