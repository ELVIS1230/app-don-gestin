'use client'
import ReactApexChart from 'react-apexcharts'

  
  export default function DonutChart({dataSavings}: {dataSavings: {labelsSavings: string[], valuesSavings: number[]}}) {
    
    const options = {
        chart: {
          id: 'donut-chart',
          type: 'donut',
        },
        colors: ['#CCCCCC','#767676','#595959', '#333333','#000000'],
        // colors: ['#000000', '#333333', '#595959', '#767676', '#CCCCCC'],
        // labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        labels: dataSavings.labelsSavings,
            dataLabels: {
              enabled: false, // Desactiva la visualización de números dentro de los segmentos
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true, // Activa los labels del donut
                    total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      fontSize: '22px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      color: '#373d3f',
                      formatter: function (w:any) {
                        return `$ ${w.globals.series.reduce((a:any, b:any) => {
                          return a + b;
                        }, 0)}`;
                      },
                    },
                  },
                },
              },
            }
      };
      
      const series = dataSavings.valuesSavings;

    return (

            <ReactApexChart options={options} series={series} type="donut" height={250} />
        )
  };