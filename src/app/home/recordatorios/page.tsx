"use client";

import ModalRecordatorio from '@/componentes/recordatorios/Addrecordatorio';
import PieChart from '@/componentes/recordatorios/GraficaPastel';
import axios from 'axios';
import { useEffect, useState } from "react"
import { TbCalendarStats, TbHome2 } from "react-icons/tb";
import { format } from 'date-fns';

export default function Recordatorios() {
  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);
  const [data, setData] = useState(null);

  const dataORD = data && [...data].sort((a, b) => {
    return new Date(a.record_fecha) - new Date(b.record_fecha);
  });

  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/reminders/${credentialUser.cedula}`)
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
          <div className="grid grid-cols-4 gap-3 pb-3">
            <div className="font-bold text-xl">Nombre</div>
            <div className="font-bold text-xl text-center">Fecha</div>
            <div className="font-bold text-xl">Descripción</div>
          </div>

          <div className='min-h-[450px] max-h-[450px] overflow-auto scrollbar-thumb:!roudend'>

          {dataORD && dataORD
          .sort((a, b) => new Date(b.record_fecha) - new Date(a.record_fecha))
          .map((item:any) => (

            <div  key={item.trasac_id} className="grid grid-cols-4 gap-3 pb-7 min-h-[45px] max-h-[45px]">
              <div className="font-bold text-base gap-5 truncate">{item.record_nombre}</div>
              <div className="font-bold text-base text-center">{item.record_fecha}</div>
              <div className="font-bold text-xs col-span-2 truncate">{item.record_descripcion}</div>
            </div>

            ))}
          </div>

        </div>

        {/* <div className="mb-6 bg-zinc-200 px-4 rounded-2xl shadow-xl">
          <div><h1 className='font-bold text-base py-2'>Pagos Tarjeta</h1></div>
          <div className="grid grid-cols-3 gap-4 py-3">
            <div className="font-bold text-lg">Tarjeta</div>

            <div className="font-bold text-lg">Fecha</div>
            <div className="font-bold text-lg">Descripción</div>

          </div>
          <div className='min-h-[135px] max-h-[135px] overflow-auto'>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-7">
              <div className="font-bold text-base">Banco Pichincha</div>

              <div className="font-bold text-base">13 - 10 - 2023</div>
              <div className="font-bold text-xs">Pagar</div>
            </div>
          </div>
        </div> */}

      </div>


      <div className="w-1/3 p-4 h-full">
        <div className="mb-6 bg-zinc-200 p-4 rounded-2xl shadow-xl">
          <h2 className="text-lg font-semibold mb-4">Agregar Recordatorio</h2>
          <div className="">
            <ModalRecordatorio credentialUser={credentialUser} />
          </div>



        </div>
        <div className="mb-6 bg-neutral-500 p-4 rounded-2xl">
          {/* <div className='bg-light mx-auto border border-black' style={{width:"450px", height:"250px"}}>
            <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
              <PieChart></PieChart>
              </div>
          </div> */}
        </div>
        <div className="bg-neutral-500 p-4 rounded-2xl">Fila 3 - Columna 2</div>
      </div>
    </div>
  )
}

