'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function LineChart({ingresos, gastos}:{ingresos: number[], gastos:number[]}) {
    
    const options = {
      chart: {
        toolbar: {
          show: false, 
        }
      },
      xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
      },
      colors: ['#000000', '#808080'],
      markers: {
        size: 7, 
        colors: ['#000000','#808080'], 
        strokeColors: ['#000000','#808080'], 
        strokeWidth: 0, 
        hover: {
          size: 7, 
        },
      },
      stroke: {
        curve: 'smooth',
      },
       legend: {
        show: false, 
      },
    };
    
    const series = [
      {
        name: 'Ingresos',
        data: ingresos,
      },
      {
        name: 'Gastos',
        data: gastos,
      },
    ];
    return (
        <ReactApexChart options={options} series={series} type="line" width={880} height={230} className="w-full" />
        )
  };
  