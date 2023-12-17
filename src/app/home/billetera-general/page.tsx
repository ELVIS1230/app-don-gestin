"use client";

import ImageCarousel from '@/componentes/billeteraGnrl/Carousel';
import ModalBGIngreso from '@/componentes/billeteraGnrl/IngresosBGmodal';
import axios from 'axios';
import React from 'react'
import { BiWallet } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useEffect, useState } from "react"
import { format } from 'date-fns';


{/* <RiSubtractFill /> */ }

export function BilleteraG() {

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);
  const [data, setData] = useState(null);
  const [saldo, setAccount] = useState({});


  // Verificar si hay datos y ordenar por fecha
  const dataORD = data && [...data].sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/transactions/${credentialUser.cuenta}`)
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
  console.log({dataORD})


  return (
    <div className='flex'>

      <div className="w-2/3 p-4 h-[100%]">

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
          <div><h1 className='font-bold text-xl py-5 pb-6'>Movimientos</h1></div>
          <div className='min-h-[450px] max-h-[450px] overflow-auto scrollbar-thumb:!roudend'>

            {dataORD && dataORD
            .slice() // Copia el array para evitar mutaciones inesperadas
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((item:any) => (
              <div key={item.trasac_id} className="grid grid-cols-11 gap-2 pb-7 min-h-[85px] max-h-[85px]">
                <div className="flex items-center bg-white rounded-xl min-h-[60px] max-h-[60px] ">
                  <div className='ml-4'>
                    {item.ttrac_id_fk.ttrac_id === 1 ? (
                      <IoMdAdd style={{ color: 'green' }} size={25} />
                    ) : (
                      <IoMdRemove style={{ color: 'red' }} size={25} />
                    )}
                  </div>
                </div>
                <div className="col-span-4 ">
                  <p className='font-bold text-base' >{item.trasac_nombre}</p>
                  <p className='text-sm'>{item.trasac_descripcion}</p>
                </div>

                <div className="px-3 col-span-2  grid text-center">
                  <p className='font-bold text-base'>Fecha</p>
                  <p className='text-sm'>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                </div>

                <div className="text-xs col-span-2 grid text-center">
                  {item.ttrac_id_fk.ttrac_id === 1 ? (
                    <p id='Gastos' className="text-green-500 font-bold text-base mt-2" >
                    $ {item.trasac_cantidad}</p>
                  ) : (
                    <p id='Gastos' className="text-red-500 font-bold text-base mt-2" >
                    $ {item.trasac_cantidad}</p>
                  )}

                  
                </div>

                <div className="font-bold col-span-2 grid text-center">
                  <p className='text-base'>Total</p>
                  <p className='text-lg'>${item.trasac_saldo}</p>
                  
                </div>
              </div>
            ))}


          </div>
        </div>


      </div>


      <div className="w-1/3 p-4 h-full">
        <div className="mb-6 bg-neutral-100 p-2 rounded-2xl shadow-xl">

          <div className="flex ">

            <div className="flex flex-col justify-center items-center w-1/2">
              <h1 className="text-3xl font-black">Saldo Total</h1>
              <p className="text-4xl font-semibold">$ {saldo.cuenta_saldo}</p>
            </div>


            <div className="flex flex-col w-1/2 gap-4 py-3">

              <div className="flex flex-col justify-center items-center h-1/2">
                <h1 className="text-base font-bold">Saldo Tarjetas</h1>
                <p className="text-3xl">$ 800.00</p>
              </div>


              <div className="flex flex-col justify-center items-center h-1/2">
                <h1 className="text-lg font-bold">Saldo Ahorros</h1>
                <p className="text-3xl">$ 700.00</p>
              </div>
            </div>
          </div>

        </div>
        <div className="mb-6 bg-neutral-100 p-4 rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Agregar a tu Billetera</h2>
          <div className="">
            <div >
              <ModalBGIngreso credentialUser={credentialUser} />
            </div>
          </div>



        </div>

        <div className="bg-neutral-100 p-4 rounded-2xl shadow-xl">
          <ImageCarousel></ImageCarousel>
        </div>
      </div>
    </div>
  )
}

export default BilleteraG