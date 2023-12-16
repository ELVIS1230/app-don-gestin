'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function LineChart() {
    
    const options = {
      chart: {
        id: 'basic-line',
        toolbar: {
          show: false, // Desactiva los iconos
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
      },
       legend: {
        show: false, // Desactiva la leyenda
      },
    };
    
    const series = [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 200],
      },
    ];
    return (
      // <div className="w-3/5 bg-gray-200 rounded-2xl  h-72 ">

        <ReactApexChart options={options} series={series} type="line" width={750} height={230} className="w-full  border-2 border-red-500" />
// </div>
        )
  };
  