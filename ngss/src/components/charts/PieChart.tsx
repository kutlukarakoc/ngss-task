import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
/* TYPES */
import { IChart } from '../../types/chartTypes'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart: React.FC<IChart> = ({ chartData, chartLabels }) => {

   const data = {
      labels: chartLabels,
      datasets: [
         {
            label: 'People',
            data: chartData,
            backgroundColor: [
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
               'rgba(54, 162, 235, 1)',
               'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
         },
      ],
   }

   return <Pie data={data} />
}

export default PieChart