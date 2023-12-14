'use client'
import axios from "axios"
import { GetAllCards } from "../lib/data"
import { useEffect, useState } from "react"

 export default function Home() {
  const [data, setData] = useState(null);
  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string)
  // const getData = async () => {

  //   try {
  //     const response = await axios.get(`http://127.0.0.1:3000/api/reminders/${credentialUser.cedula}` ) 
  //        return response.data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
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
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">
          <div className='p-4'>
            <div>
              <h1 className='font-bold text-2xl'>Dashboard</h1>
              <p>{credentialUser.nombre} {credentialUser.apellido}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}