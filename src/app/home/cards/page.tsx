"use client";

import ModalCard from '@/componentes/cards/CreateCardModal';
import axios from 'axios';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { TransactionsI } from '../../../../interfaces/Interfaces';

function Tarjetas() {

  const [data, setData] = useState(null);
  const [transactionsCards, setTransactionsCard] = useState<TransactionsI[]>([]);

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);


  // Verificar si hay datos y ordenar por fecha
  const dataORD = data && [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/${credentialUser.cuenta}`)
        setData(response.data); // Guarda los datos en el estado

        const transactionsWithCards = await axios.get(`http://localhost:3000/api/transactions/cards/${credentialUser.cuenta}`)
        setTransactionsCard(transactionsWithCards.data); // Guarda los datos en el estado


      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []);
  console.log(transactionsCards)

  // console.log(data)
  // console.log(saldo)

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
            <ModalCard credentialUser={credentialUser} />
          </div>

          <div >
          </div>
          <div className='max-h-[450px] overflow-auto scrollbar-thumb:!rounded scroll-container'>
            {/* Div de cada plan creado */}
            {transactionsCards && transactionsCards.map((item) => {
              return (
                <div key={item.card_id} className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
                  paddingTop: "20px",
                  marginTop: "20px"
                }}>
                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg' >Tarjeta</p>
                    <p>{item.card_id_fk.card_name}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Movimiento</p>
                    <p>{item.trasac_name}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Fecha</p>
                    <p> {format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p></p>
                    {
                      item.ttrac_id_fk.ttrac_id === 1
                        ? <p id='Gastos' className="text-green-500 font-bold text-lg mt-2" >${item.trasac_quantity}</p>
                        : <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >${item.trasac_quantity}</p>
                    }
                  </div>

                  <div className="">
                    <div className="">
                      <span
                        className="bg-black text-white py-2 px-4 mr-1 rounded-lg ml-auto hover:bg-red-600 inline-flex items-center cursor-pointer"
                        role="button"
                        onClick={(item.card_id)}
                      >
                        <HiOutlineTrash style={{ color: 'white', marginRight: '2px' }} size={25} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
      <div className="w-2/5 p-4 justify-center ">

        <div className='max-h-[750px] overflow-auto scrollbar-thumb:!rounded scroll-container'>
          {dataORD && dataORD.map((item) => {
            console.log(item);
            return (
              <div key={item.card_id} className="p-4">
                <div className="py-4 bg-gray-200 rounded-2xl shadow-lg">
                  <div className="border-b-4 border-white">
                    <div className="font-bold text-xl mb-2 flex justify-center items-center">
                      <div className='text-lg text-center ml-6'>Banco: {item.card_name}</div>
                      <span className='ml-auto mr-2 cursor-pointer rounded-lg'>
                        <IoClose
                          style={{ color: 'black', transition: 'color 0.3s ease-in-out' }}
                          onMouseOver={(e) => e.target.style.color = 'red'}
                          onMouseOut={(e) => e.target.style.color = 'black'}
                        />
                      </span>
                    </div>
                  </div>
                  <Link href={`/home/cards/${item.card_id}`}>
                    <div className="text-gray-700 text-base mx-6 mt-2">
                      Tarjeta de {item.typecard_id_fk.typecard_type}
                      <div className='text-lg'>Saldo Disponible: {item.card_balance_total}</div>
                      <div className='text-lg'>Fecha de Vencimiento: {item.card_date_due}</div>
                    </div>
                  </Link>
                </div>

              </div>
            )
          })}
        </div>
      </div>


    </div >
  )
}

export default Tarjetas