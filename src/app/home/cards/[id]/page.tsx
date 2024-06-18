/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import TransactionModal from '@/componentes/cards/TransactionCardModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard, FaEdit } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { MdOutlineAddCard } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { format } from 'date-fns';
import TransactionCard from '@/componentes/cards/TransactionCard';
import { CardsI, TransactionsI } from '../../../../../interfaces/Interfaces';
import UpdateNames from '@/componentes/UpdateNames';


export default function DetailCard({ params }: { params: { id: string } }) {

  const { id } = params
  const [transactionsCard, setTransactionsCard] = useState<TransactionsI[]>([]);
  const [card, setCard] = useState<any>({})

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);


  const endpoint = 'transactions'
  useEffect(() => {
    const fetchData = async () => {
      try {

        const card = await axios.get(`http://localhost:3000/api/cards/one/${id}`)
        setCard(card.data); // Guarda los datos en el estado

        const transactionsCard = await axios.get(`http://localhost:3000/api/transactions/oneCard/transactions/${id}`)
        setTransactionsCard(transactionsCard.data); // Guarda los datos en el estado
        // console.log(transactionsCard.data)
        /// put name with trasack_id

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(transactionsCard)

  return (
    <div className='flex flex-col'>
      <div className="flex p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl w-3/5 h-2/3">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='text-xl font-bold'>Tu Tarjeta</h1>
              <p className="font-bold text-lg text-gray-700 pt-4">
                Detalles de tu Tarjeta
              </p>
              <div className='py-2'>

                <div className='flex flex-col'>
                  <div className='font-bold'>Saldo Total:</div>
                  <div>$ {card.card_balance_total}</div>
                </div>
                <div className='flex gap-5'>
                  <div className='flex flex-col'>
                    <div className='font-bold'>Vencimiento:</div>
                    <div>{card.card_date_due}</div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='font-bold'>Corte:</div>
                    <div>{card.card_date_cutoff}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto ">
              <p className='text-2xl text-center font-bold'>
                {card.card_name}
              </p>
              <FaCcMastercard size={150} className="text-black-500" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mb-4 bg-gray-200 p-4 rounded-2xl " id='planes_ahorro'
        style={{
          borderRadius: "10px"
        }}
      >
        <div className="flex">
          <p className='static font-bold mt-3 mr-auto'>Movimientos de la Tarjeta</p>
          <TransactionCard cardID={id} />
        </div>
        <div className='max-h-[450px] overflow-auto scrollbar-thumb:!rounded scroll-container'>
          {transactionsCard && transactionsCard.map((item) => {
            return (

              <div key={item.trasac_id} className='flex flex-col md:flex-row items-start border-t border-gray-300 
            ' style={{
                  paddingTop: "20px",
                  marginTop: "20px"
                }}>
                <div className="bg-white rounded-lg p-2 flex items-center">
                  <IoIosCard size={30} />
                </div>

                <div className="flex-grow text-center">
                  <p className='font-bold text-lg'>Fecha</p>
                  <p>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                </div>

                <div className="flex-grow text-center">
                  <p className='font-bold text-lg'>Nombre</p>
                  <p>{item.trasac_name}</p>
                </div>

                <div className="flex-grow text-center items-center">
                  <p className='font-bold text-lg'>Cantidad</p>
                  {
                    item.ttrac_id_fk.ttrac_id === 1
                      ? <p id='Ingres' className="text-green-500 font-bold text-lg mt-2" >${item.trasac_quantity}</p>
                      : <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >${item.trasac_quantity}</p>
                  }
                </div>
                <div className="flex flex-col items-center">
                  <UpdateNames itemID={item.trasac_id} endpoint={endpoint} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
