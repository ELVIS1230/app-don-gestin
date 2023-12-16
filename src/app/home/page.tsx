'use client'
import axios from "axios"
import { GetAllCards } from "../lib/data"
import { useEffect, useState } from "react"
// import ApexChart from "@/componentes/dashboard/ComparacionesChart";
import dynamic from "next/dynamic";
import { IoIosAdd } from "react-icons/io";
// import DonutChart from "@/componentes/dashboard/DonutChart";

const ChartLineDash = dynamic(()=> import('@/componentes/dashboard/ComparacionesChart'), {ssr: false})
const DonutChart = dynamic(()=> import('@/componentes/dashboard/DonutChart'), {ssr: false})
 export default function Home() {
  const [data, setData] = useState(null);
  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string)
  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3000/api/reminders/${credentialUser.cedula}`) 
        setData(response.data); // Guarda los datos en el estado
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []); 
  // console.log('Wenas',credentialUser)
  console.log(data)
  // const data = await GetAllCards()
  // console.log(data)
  return (
    <div className='flex'>
      <div className="w-full p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl shadow-xl">
          <div className='p-4'>
            <div>
              <h1 className='font-bold text-3xl'>Bienvenido de nuevo, {credentialUser.nombre}</h1>
              <p>El reporte de todas tus estadisticas esta al dia</p>
            </div>
          </div>
        </div>
    <div className='flex gap-4 mb-4'>
        
        <div className="w-3/5 bg-gray-200 rounded-2xl  h-80 shadow-xl ">
          <h1 className='font-bold text-2xl p-4'>Comparaciones</h1>
          <ChartLineDash />
        </div>
        <div className="w-2/5 bg-gray-200 rounded-2xl  h-80 shadow-xl">
        <h1 className='font-bold text-2xl p-4'>Ahorros </h1>
          
          <DonutChart />
        </div>
        </div>
      <div className="w-full h-56  rounded-2xl flex gap-4 ">
      <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-xl">
      <h1 className='font-bold text-2xl p-1'>Trasacciones billetera </h1>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    <IoIosAdd size={35} className="mr-2 text-white bg-green-500 rounded-xl" />                        
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Cantidad
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            $55
                        </p>
                    </div>
                    <div className="flex-1 min-w-0">
                    <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Total
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            $55
                        </p> 
                    </div>
                 
                </div>
            </li>
            </ul>
      </div>
      <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-xl">
      <h1 className='font-bold text-2xl p-1'>Trasacciones tarjetas </h1>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    <IoIosAdd size={35} className="mr-2 text-white bg-green-500 rounded-xl" />                        
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Cantidad
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            $55
                        </p>
                    </div>
                    <div className="flex-1 min-w-0">
                    <p className="text-sm font-extrabold text-gray-900 truncate dark:text-white">
                            Total
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            $55
                        </p> 
                    </div>
                 
                </div>
            </li>
            </ul>
      </div>
      <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-2xl">
      <h1 className='font-bold text-2xl p-1'>Recordatorios </h1>
        
      </div>
      </div>
      </div>
    </div>
  )
}