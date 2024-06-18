"use client";

import ModalReminder from '@/componentes/reminders/InsertReminder';
import PieChart from '@/componentes/reminders/GraficaPastel';
import axios from 'axios';
import { useEffect, useState } from "react"
import { TbCalendarStats, TbHome2 } from "react-icons/tb";
import { format } from 'date-fns';
import { HiOutlineTrash } from 'react-icons/hi';

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
          <div className="grid grid-cols-8 gap-3 pb-3">
            <div className="font-bold col-span-2 text-xl">Nombre</div>
            <div className="font-bold col-span-2 text-xl text-center">Fecha</div>
            <div className="font-bold col-span-4 text-xl">Descripción</div>
          </div>

          <div className='min-h-[450px] max-h-[450px] overflow-auto scrollbar-thumb:!roudend'>

            {dataORD && dataORD
              .sort((a, b) => new Date(b.remind_date) - new Date(a.remind_date))
              .map((item: any) => (

                <div key={item.trasac_id} className="grid grid-cols-8 gap-3 pb-7 min-h-[45px] max-h-[45px]">
                  <div className="font-bold text-base col-span-2 gap-5 truncate">{item.remind_name}</div>
                  <div className="font-bold text-base col-span-2 text-center">{item.remind_date}</div>
                  <div className="font-bold text-xs col-span-3 truncate">{item.remind_description}</div>
                  {/* <div className="font-bold text-xs col-span-1 text-center">
                    <span className='bg-black p-1 rounded-lg mx-4 hover:bg-red-600'><HiOutlineTrash style={{ color: 'white' }} size={25} /></span>
                  </div> */}
                  <div className="font-bold col-span-1 grid text-center items-center" onClick={() => handleDelete(item.remind_id)}>
                    <span className='bg-black rounded-lg mx-8 text-center p-1 items-center hover:bg-red-600 min-w-[30px] max-w-[30px]'><HiOutlineTrash style={{ color: 'white' }} size={25} /></span>
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

