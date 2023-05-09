import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
/* TYPES */
import { IChart } from '../../types/chartTypes'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const VerticalChart: React.FC<IChart> = ({ chartData, chartLabels, bgColor }) => {

   const data = {
      labels: chartLabels,
      datasets: [
         {
            label: 'People',
            data: chartData,
            backgroundColor: bgColor,
         }
      ],
   }

   return <Bar data={data} />
}

export default VerticalChart