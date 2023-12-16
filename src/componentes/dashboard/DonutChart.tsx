'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function DonutChart() {
    
    const options = {
        chart: {
          id: 'donut-chart',
        //   type: 'donut',
        },
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
      };
      
      const series = [44, 55, 13, 43, 22];

    return (

            <ReactApexChart options={options} series={series} type="donut" height={250} />
        )
  };