"use client";

import ModalTarjeta from '@/componentes/tarjetas/creacionTarjetaModal';
import axios from 'axios';
import { format } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Cards() {

  const [data, setData] = useState(null);
  const [transactionsCards, setTransactionsCard] = useState([]);

  const credentialUser = JSON.parse(sessionStorage.getItem('user') as string);


  // Verificar si hay datos y ordenar por date
  const dataORD = data && [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cards/${credentialUser.account}`)
        setData(response.data); // Guarda los datos en el estado

        const transactionsWithCards = await axios.get(`http://localhost:3000/api/transactions/cards/${credentialUser.account}`)
        setTransactionsCard(transactionsWithCards.data); // Guarda los datos en el estado


      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []);
  console.log(transactionsCards)

  // console.log(data)
  // console.log(balance)

  return (
    <div className='flex'>
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='font-black text-5xl py-4'>Your Cards</h1>
              <p className="text-gray-700 pt-4">
              Available cards and details
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
            <p className='static font-bold mt-3 mr-auto text-xl py-4'>Card Movement</p>
            <ModalTarjeta credentialUser={credentialUser} />
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
                    <p className='font-bold text-lg' >Cards</p>
                    <p>{item.card_id_fk.card_name }</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Movement</p>
                    <p>{item.trasac_name }</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p className='font-bold text-lg'>Date</p>
                    <p> {format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                  </div>

                  <div className="flex-grow text-center">
                    <p></p>
                    {
                      item.ttrac_id_fk.ttrac_id === 1
                        ? <p id='Gastos' className="text-green-500 font-bold text-lg mt-2" >${item.transfer_quantity}</p>
                        : <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >${item.transfer_quantity}</p>
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
                      <div className='text-lg text-center ml-6'>Bank: {item.card_name }</div>
                      <span className='ml-auto mr-2 cursor-pointer rounded-lg'>
                        <IoClose
                          style={{ color: 'black', transition: 'color 0.3s ease-in-out' }}
                          onMouseOver={(e) => e.target.style.color = 'red'}
                          onMouseOut={(e) => e.target.style.color = 'black'}
                        />
                      </span>
                    </div>
                  </div>
                  <Link href={`/home/tarjetas/${item.card_id}`}>
                    <div className="text-gray-700 text-base mx-6 mt-2">
                    Card of {item.tipcard_id_fk.tiptarj_tipo}
                      <div className='text-lg'>Available Balance: {item.tarj_balance_total}</div>
                      <div className='text-lg'>Due date: {item.tarj_date_vencimiento}</div>
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

export default Cards