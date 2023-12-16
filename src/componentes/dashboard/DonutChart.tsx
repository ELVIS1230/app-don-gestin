'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function DonutChart() {
    
    const options = {
        chart: {
          id: 'donut-chart',
        //   type: 'donut',
        },
        colors: ['#CCCCCC','#767676','#595959', '#333333','#000000'],
        // colors: ['#000000', '#333333', '#595959', '#767676', '#CCCCCC'],
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
            dataLabels: {
              enabled: false, // Desactiva la visualización de números dentro de los segmentos
            },
      
      };
      
      const series = [44, 55, 13, 43, 22];

    return (

            <ReactApexChart options={options} series={series} type="donut" height={250} />
        )
  };