'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function LineChart() {
    
    const options = {
      chart: {
        toolbar: {
          show: false, 
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
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
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 200],
      },
      {
        name: 'series-2',
        data: [0, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105],
      },
    ];
    return (
      // <div className="w-3/5 bg-gray-200 rounded-2xl  h-72 ">

        <ReactApexChart options={options} series={series} type="line" width={880} height={230} className="w-full" />
// </div>
        )
  };
  