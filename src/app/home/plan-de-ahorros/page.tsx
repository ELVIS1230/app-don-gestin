"use client";
import ModalAhorro from '@/componentes/plan-de-ahorros/planAhorrosModal';
import ModalIngresoAhorro from '@/componentes/plan-de-ahorros/ingresoPlanAhorro';
import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { FaCar } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdOutlineSavings } from "react-icons/md";
import { TfiBarChart } from "react-icons/tfi";
import { MdHealthAndSafety } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdFastfood } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { MdSavings } from "react-icons/md";

const PlanAhorros = () => {

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string);


  const [data, setData] = useState(null);


  // Verificar si hay datos y ordenar por fecha
  const dataORD = data && [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  useEffect(() => {
    // Función asíncrona para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/savings/${credentialUser.cuenta}`)
        setData(response.data); // Guarda los datos en el estado

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    // Llama a la función para realizar la petición cuando el componente se monta
    fetchData();
  }, []);
  console.log(data)

  return (
    <div className='flex'>
      <div className="w-3/5 p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl">

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-grow ">
              <h1 className='font-black text-5xl py-4'>Elige tu plan de ahorro</h1>
              <p className="text-gray-700 pt-4">
                Usa un plan de ahorro para mejorar tu economía.
              </p>
            </div>
            <div className="ml-auto ">
              <MdOutlineSavings size={150} className="text-black-500" />
            </div>
          </div>
        </div>
        <div className=" mb-4 bg-gray-200 p-4 rounded-2xl " id='planes_ahorro'
          style={{
            borderRadius: "10px"
          }}
        >
          <div className="flex">
            <p className='static font-bold mt-3 mr-auto'>Tus Planes de Ahorro</p>
          </div>

          <div className='max-h-[450px] overflow-auto scrollbar-thumb:!rounded scroll-container'>

            {/* Div de cada plan creado */}
            {dataORD && dataORD.map((item) => {

              const metaCantidad = parseFloat(item.aho_meta_cantidad) || 0;
              const cantidadAhorrada = parseFloat(item.aho_cantidad_total) || 0;

              return (
                <div key={item.aho_id} className='flex flex-col md:flex-row items-start border-t border-gray-300' style={{
                  height: "6rem",
                  paddingTop: "20px",
                  marginTop: "20px",
                }}>
                  <div className="bg-white rounded-lg p-2 flex items-center">
                    <MdSavings size={30} className="mr-2" />
                    <div className='flex-grow'>
                      {/* Reemplazar la línea original con la nueva estructura */}
                      <h1>{item.aho_nombre.split(' ').map((word, index) => <React.Fragment key={index}>{word}<br /></React.Fragment>)}</h1>
                    </div>
                  </div>
                  <div className="flex-grow text-center">
                    <p className='font-bold'>Ahorrado</p>
                    <p>${item.aho_cantidad_total}</p>
                  </div>
                  <div className="flex-grow text-center">
                    <p className='font-bold '>Por Ahorrar</p>
                    {/* Calcular la diferencia entre lo ahorrado y la meta */}
                    <p>${metaCantidad - cantidadAhorrada}</p>
                  </div>
                  <div className="flex-grow text-center">
                    <p className='font-bold'>Meta</p>
                    <p>${item.aho_meta_cantidad}</p>
                  </div>
                  <div className='flex items-center'>
                    <div className="flex-grow text-left">
                      <p className='font-bold text-center'>Duración</p>

                      {item.aho_duracion && item.aho_duracion.split(',').map((parte, index) => (
                        <React.Fragment key={index} >
                          {parte.trim()} {/* Elimina espacios adicionales alrededor de cada parte */}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>

                  </div>

                  <div className="flex-grow text-center">
                  <ModalIngresoAhorro credentialUser={credentialUser} selectedAhorroId={item.aho_id} />

                  </div>
                </div>
              );
            })}


          </div>
        </div>
      </div>

      <div className='w-2/5 p-4'>

        <div className='bg-neutral-100 p-4 rounded-2xl shadow-xl'
          style={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px"
          }}>

          <p className='text-black text-xl text-center font-bold t'
            style={{
              paddingBottom: "5px"
            }}>Flujo de Ingresos</p>

          <div style={{
            marginLeft: "20px",
            marginRight: "20px"
          }}>

            <div className="flex justify-center">
              <FaRegChartBar size={150} />
            </div>

          </div>
        </div>


        <div className='bg-neutral-100 p-4 rounded-2xl shadow-xl'
          style={{
            padding: "10px",
            borderRadius: "10px"
          }}>

          <p className='text-black text-center font-bold text-xl'
            style={{
              paddingBottom: "5px"
            }}>Nuevo Plan de Ahorro</p>

          <div style={{
            marginLeft: "20px",
            marginRight: "20px"
          }}>
            <div className='justify-between ' style={{ display: 'flex', justifyContent: 'space-between' }} >
              <div className='shadow-inner' style={{ padding: '5px', border: '1px solid black', borderRadius: "10px" }}>

                <p >$ 2,000.00</p> </div>
              <p style={{ marginLeft: '10px' }}>Para_____ </p>
            </div>

            <div className='justify-between' style={{ display: 'flex' }} >
              <p className='font-bold'>Mensualidad:</p>
              <p style={{ marginLeft: '10px' }}>450.00</p>
            </div>

            <div className='justify-between' style={{ display: 'flex' }} >
              <p className='font-bold'>Duración:</p>
              <p style={{ marginLeft: '10px' }}>12 Meses</p>
            </div>
            <div>
              <p className='font-bold'>Descripcion:</p></div>

            <div className="flex justify-center">
              <ModalAhorro credentialUser={credentialUser} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default PlanAhorros