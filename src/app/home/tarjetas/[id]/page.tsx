"use client";
import TransactionModal from '@/componentes/tarjetas/NuevaTransaccionTarjetaModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { MdOutlineAddCard } from "react-icons/md";


function Tarjetas() {

  const [data, setData] = useState(null);
  const [saldo, setAccount] = useState({});
  const [tarjId, setTarjId] = useState(null);

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);

  // Verificar si hay datos y ordenar por fecha
  const dataORD = data && [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));


  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {

        const card = await axios.get(`http://localhost:3000/api/cards/${tarjId}`)
        setAccount(card.data); // Guarda los datos en el estado

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
        <div className="w-2/5">
          <div className="p-4">

            {dataORD && dataORD.map((item) => {
            console.log(item);
            return (
              <div key={item.tarj_id} className="p-4">
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
              </div>
            )
          })}
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
        <TransactionModal></TransactionModal>
        </div>
        {/* Div de cada plan creado */}

        {dataORD && dataORD.map((item) => {
            console.log(item);
            return (

        <div key={item.tarj_id}  className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
          paddingTop: "20px",
          marginTop: "20px"
        }}>
          <div className="bg-white rounded-lg p-2 flex items-center">
            <IoIosCard size={30} />
          </div>

          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Fecha</p>
            <p>01/02/2023</p>
          </div>

          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Descripción</p>
            <p>{item.tarj_descripcion}</p>
          </div>

          <div className="flex-grow text-center items-center">
          <p className='font-bold text-lg'>Valor</p>
            <p id='Ingresos' className="text-green-500  justify-center font-bold text-lg mt-2" >+ $800.00</p>
          </div>
          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Total</p>
            <p>$1000.00</p>
          </div>

        </div>
 )
          })}
        {/* Div de cada plan creado */}
        <div className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
          paddingTop: "20px",
          marginTop: "20px"
        }}>
          <div className="bg-white rounded-lg p-2 flex items-center">
            <IoIosCard size={30} />
          </div>


          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Fecha</p>
            <p>01/02/2023</p>
          </div>

          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Descripción</p>
            <p>Comida</p>
          </div>

          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Valor</p>
            <p id='Gastos' className="text-red-500 font-bold text-lg mt-2" >- $1000.00</p>
          </div>

          <div className="flex-grow text-center">
            <p className='font-bold text-lg'>Total</p>
            <p>$1000.00</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Tarjetas