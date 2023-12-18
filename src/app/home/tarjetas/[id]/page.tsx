/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import TransactionModal from '@/componentes/tarjetas/NuevaTransaccionTarjetaModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { MdOutlineAddCard } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { format } from 'date-fns';
import TransactionCard from '@/componentes/tarjetas/TransaccionTarjeta';


export default function DetalleTarjeta({ params }: { params: { id: string } }) {

  const { id } = params
  const [transactionsCard, setTransactionsCard] = useState([]);
  const [card, setCard] = useState()

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);



  useEffect(() => {
    const fetchData = async () => {
      try {

        const card = await axios.get(`http://localhost:3000/api/cards/one/${id}`)
        setCard(card.data); // Guarda los datos en el estado

        const transactionsCard = await axios.get(`http://localhost:3000/api/transactions/oneCard/transactions/${id}`)
        setTransactionsCard(transactionsCard.data); // Guarda los datos en el estado

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  console.log(card)

  return (
    <div className='grid grid-rows-2 '>
      <div className="flex p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl w-3/5">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='text-xl font-bold'>Tu Tarjeta</h1>
              <p className="text-gray-700 pt-4">
                Detalles de tu Tarjeta
              </p>
            </div>
            <div className="ml-auto ">
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

        {transactionsCard && transactionsCard.map((item) => {
          return (

            <div key={item.trasac_id} className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
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
                <p>{item.trasac_nombre}</p>
              </div>

              <div className="flex-grow text-center items-center">
                <p className='font-bold text-lg'>Cantidad</p>
                {
                  item.ttrac_id_fk.ttrac_id === 1
                    ? <p id='Ingres' className="text-green-500 font-bold text-lg mt-2" >${item.trasac_cantidad}</p>
                    : <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >${item.trasac_cantidad}</p>
                }
              </div>

            </div>
          )
        })}

      </div>
    </div>
  )
}
