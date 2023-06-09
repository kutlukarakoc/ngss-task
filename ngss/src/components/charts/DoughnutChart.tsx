import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { IChart } from '../../types/chartTypes'
 
ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart: React.FC<IChart> = ({ chartData, chartLabels }) => {

   const data = {
      labels: chartLabels,
      datasets: [
         {
            label: 'People',
            data: chartData,
            backgroundColor: [
               'rgba(54, 162, 235, 0.5)',
               'rgba(255, 99, 132, 0.5)',
            ],
            borderColor: [
               'rgba(54, 162, 235, 1)',
               'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
         },
      ],
   }

   return <Doughnut data={data} />
}

export default DoughnutChart
