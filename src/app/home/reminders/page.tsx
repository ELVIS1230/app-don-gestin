"use client";

import ModalReminder from '@/componentes/reminders/InsertReminder';
import PieChart from '@/componentes/reminders/GraficaPastel';
import axios from 'axios';
import { useEffect, useState } from "react"
import { TbCalendarStats, TbHome2 } from "react-icons/tb";
import { format } from 'date-fns';
import { HiOutlineTrash } from 'react-icons/hi';
import UpdateNames from '@/componentes/UpdateNames';

export default function Recordatorios() {
  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);
  const [data, setData] = useState(null);

  const dataORD = data && [...data].sort((a, b) => {
    return new Date(a.remind_date) - new Date(b.remind_date);
  });

  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/reminders/${credentialUser.cedula}`)
        console.log(response)
        setData(response.data); // Guarda los datos en el estado

        // const account = await axios.get(`http://localhost:3000/api/users/account/${credentialUser.cuenta}`)
        // setAccount(account.data); // Guarda los datos en el estado


      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []);
  console.log({ dataORD })

  const deleteTransaction = async (remind_id: any) => {

    try {
      const response = await axios.delete(`http://127.0.0.1:3000/api/reminders/${remind_id}`)
    } catch (error) {
      console.error('Error al eliminar los datos:', error);
    }
    console.log(remind_id);

  }

  const handleDelete = async (remind_id: any) => {

    deleteTransaction(remind_id);
  }
  const endpoint = 'reminders'
  return (
    <div className='flex'>

      <div className="w-2/3 p-4 h-[100%]">

        <div className="mb-6 bg-zinc-200 p-4 rounded-2xl min-h-25% shadow-xl">
          <div className='p-4'>
            <div className='flex justify-between'>
              <div className='item-center'>
                <h1 className='font-black text-5xl py-4'>Recordatorios</h1>
                <p>Tu sitio para revisar todos tus pendientes económicos</p>

              </div>
              <span className=''><TbCalendarStats size={95} /></span>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-zinc-200 px-4 rounded-2xl shadow-xl">
          <div><h1 className='font-bold text-xl py-5'>Pagos Consumo</h1></div>
          <div className="flex flex-row pb-3">
            <div className="font-bold basis-1/4 text-xl">Nombre</div>
            <div className="font-bold basis-1/4 text-xl text-center">Fecha</div>
            <div className="font-bold basis-2/4 text-xl">Descripción</div>
          </div>

          <div className='min-h-[450px] max-h-[450px] overflow-auto scrollbar-thumb:!roudend'>
            {dataORD && dataORD
              .sort((a, b) => new Date(b.remind_date) - new Date(a.remind_date))
              .map((item: any) => (
                  
                <div key={item.trasac_id} className="flex flex-row">

                  <div className="font-bold content-center text-base basis-1/4 truncate">{item.remind_name}</div>
                  <div className="font-bold content-center text-base basis-1/4 text-center">{item.remind_date}</div>
                  <div className="font-bold content-center text-sm basis-1/4 truncate">{item.remind_description}</div>                
                  <div className="basis-1/4 flex justify-end" >
                  <span
                        className="bg-black text-white px-4 py-2 rounded-lg ml-auto hover:bg-red-600 inline-flex items-center cursor-pointer"
                        role="button"
                        onClick={() => handleDelete(item.remind_id)}
                      >
                        <HiOutlineTrash style={{ color: 'white',  }} size={25} />
                      </span>
                      <div className='mx-4'>
                        <UpdateNames itemID={item.remind_id} endpoint={endpoint} />
                        </div> 
                      
                  
                  </div>                  
                </div>

              ))}
          </div>
          

        </div>
      </div>
      <div className="w-1/3 p-4 h-full">
        <div className="mb-6 bg-zinc-200 p-4 rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Agregar Recordatorio</h2>
          <div className="">
            <ModalReminder credentialUser={credentialUser} />
          </div>
        </div>
        {/*  */}

      </div>
    </div>
  )
}

