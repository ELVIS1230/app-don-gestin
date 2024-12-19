/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const ChartLineDash = dynamic(() => import('@/componentes/dashboard/ComparacionesChart'), { ssr: false })
const DonutChart = dynamic(() => import('@/componentes/dashboard/DonutChart'), { ssr: false })


export default function Home() {
  const [dataIncomes, setDataIncomes] = useState([]);
  const [dataExpenses, setDataExpenses] = useState([]);
  const [dataTrasanctions, setDataTrasanctions] = useState();
  const [dataCards, setDataCards] = useState();
  const [dataReminders, setDataReminders] = useState();
  const [dataSavings, setDataSavings] = useState({
    labelsSavings: [],
    valuesSavings: []
  })

  const credentialUser = JSON.parse(sessionStorage.getItem('usuario') as string)

  function downloadDocx(buffer: any, fileName = "document.docx") {

    const uint8Array = new Uint8Array(buffer.data);
    // Convierte el Buffer a un Blob
    const blob = new Blob([uint8Array], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  
    // Crea un enlace temporal para la descarga
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
  
    // Simula un clic para iniciar la descarga
    document.body.appendChild(link);
    link.click();
  
    // Limpia el enlace temporal
    document.body.removeChild(link);
  }

  const report = {
    title: 'Informe General',
    sectionOne: {
      title: 'Datos Iniciales',
      responsibleName: 'Ana Gómez',
      date: '20-11-2024',
    },
    sectionTwo: {
      title: 'Resumen',
      subsection:
        'Este informe detalla las actividades realizadas durante el mes, incluyendo avances y desafíos encontrados en el proyecto.',
    },
    sectionThree: {
      title: 'Objetivos',
      titleTwo: 'Resultados',
      subsection: [
        'Incrementar la eficiencia operativa',
        'Reducir costos en un 10%',
        'Optimizar los procesos de comunicación',
      ],
      subsectionTwo: [
        'La eficiencia operativa aumentó un 12%',
        'Se lograron ahorros de un 8% en costos',
        'Los tiempos de respuesta se redujeron en un 15%',
      ],
    },
    sectionFour: {
      title: 'Conclusión',
      subsection:
        'Los resultados obtenidos superaron las expectativas iniciales, mostrando una clara mejora en las métricas clave gracias al enfoque estratégico adoptado.',
    },
  }

  const handleDownload = async () => {
    try {
      // Realiza la solicitud POST
      const response = await axios.post(
        'http://localhost:3000/api/report/excel',
        { data: report }, 
      );

      console.log(response.data)
      downloadDocx(response.data, 'miDocumento.xlsx');
    } catch (error) {
      console.error('Error al generar el archivo DOCX:', error);
    }        
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/transactions/dash/${credentialUser.cuenta}`)
        const responseSavings = await axios.get(`http://127.0.0.1:3000/api/savings/${credentialUser.cuenta}`)
        const responseReminders = await axios.get(`http://localhost:3000/api/reminders/${credentialUser.cedula}`)

        const dataLineChartIncomes: any = Object.values(response.data.comparaciones).map((mes: any) => mes["1"]);
        const dataLineChartExpenses: any = Object.values(response.data.comparaciones).map((mes: any) => mes["2"]);
        const dataTableTransactions: any = response.data.transactions
        const labelsSavings: any = Object.values(responseSavings.data).map((nombre: any) => nombre['saving_name']);
        const valuesSavings: any = Object.values(responseSavings.data).map((nombre: any) => parseFloat(nombre['saving_quantity_total']));
        const dataReminders = responseReminders.data.slice(0, 2)

        // console.log(valuesSavings)

        setDataSavings({ labelsSavings: labelsSavings, valuesSavings: valuesSavings })
        setDataIncomes(dataLineChartIncomes)
        setDataExpenses(dataLineChartExpenses)
        setDataTrasanctions(dataTableTransactions)
        setDataCards(response.data.cards)
        setDataReminders(dataReminders)

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, []);
  console.log(dataSavings)


  return (
    <div className='flex'>
      <div className="w-full p-4">
        <div className="mb-4 bg-gray-200 p-4 rounded-2xl shadow-xl">
          <div className='p-4'>
            <div className="flex justify-between items-center">
              <div>
                <h1 className='font-bold text-3xl'>Bienvenido de nuevo, {credentialUser.nombre}</h1>
                <p>El reporte de todas tus estadisticas esta al dia</p>
              </div>
              <button onClick={handleDownload} 
              className="bg-black hover:bg-[#808080] text-white font-bold py-2 px-4 h-12 rounded">
                Crear reporte
              </button>
            </div>
          </div>
        </div>
        <div className='flex gap-4 mb-4'>

          <div className="w-2/3 bg-gray-200 rounded-2xl  h-80 shadow-xl ">
            <div className=" flex justify-between mr-8">
              <h1 className='font-bold text-2xl p-4'>Comparaciones</h1>
              <div className="border-2  flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-black rounded-full "></div>
                  <p className="text-xl font-semibold">Ingresos</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#808080] rounded-full "></div>
                  <p className="text-xl font-semibold">Gastos</p>
                </div>
              </div>
            </div>
            <ChartLineDash ingresos={dataIncomes} gastos={dataExpenses} />
          </div>
          <div className="w-1/3 bg-gray-200 rounded-2xl  h-80 shadow-xl">
            <h1 className='font-bold text-2xl p-4'>Ahorros </h1>

            <DonutChart dataSavings={dataSavings} />
          </div>
        </div>
        <div className="w-full h-56  rounded-2xl flex gap-4 ">
          <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-xl">
            <h1 className='font-bold text-2xl p-1'>Trasacciones billetera </h1>
            <ul role="list" className="divide-y divide-gray-200 ">
              {dataTrasanctions && dataTrasanctions.map((item) => (
                <li key={item.trasac_id} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {item.ttrac_id_fk.ttrac_id === 1
                        ? <IoIosAdd size={35} className="mr-2 text-white bg-black rounded-xl" />
                        : <IoIosRemove size={35} className="mr-2 text-white bg-[#808080] rounded-lg" />
                      }

                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        {item.trasac_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_description}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        Cantidad
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_quantity}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        Total
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_balance}
                      </p>
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-xl">
            <h1 className='font-bold text-2xl p-1'>Trasacciones tarjetas </h1>
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
              {dataCards && dataCards.map((item) => (
                <li key={item.trasac_id} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {item.ttrac_id_fk.ttrac_id === 1
                        ? <IoIosAdd size={35} className="mr-2 text-white bg-black rounded-xl" />
                        : <IoIosRemove size={35} className="mr-2 text-white bg-[#808080] rounded-lg" />
                      }

                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        {item.trasac_name}
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_description}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        Cantidad
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_quantity}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        Total
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.trasac_balance}
                      </p>
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 h-full p-4 bg-gray-200 rounded-2xl shadow-2xl">
            <h1 className='font-bold text-2xl p-1'>Recordatorios </h1>
            <ul role="list" className="divide-y divide-gray-200 ">
              {dataReminders && dataReminders.map((item) => (
                <li key={item.remind_id} className="py-2 px-4 sm:py-3 border-4 border-black rounded-2xl">
                  <div className="flex justify-between items-center  ">
                    <p className="text-xl font-extrabold text-gray-900 truncate ">
                      {item.remind_name}
                    </p>
                    <div className=" min-w-0">
                      <p className="text-sm font-extrabold text-gray-900 truncate ">
                        Fecha
                      </p>
                      <p className="text-sm text-gray-500 truncate ">
                        {item.remind_date}
                      </p>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}