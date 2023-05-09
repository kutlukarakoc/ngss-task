/* COMPONENTS */
import DoughnutChart from './DoughnutChart'
import PieChart from './PieChart'
import VerticalChart from './VerticalChart'
/* TYPES */
import { IDashboard } from '../../types/dashboardTypes'

const ChartWrapper: React.FC<IDashboard> = ({ title, data, labels, bgColor, type }) => {
   /* choosing which chart component to render based on the type prop */
   let ChartComponent = null
   switch (type) {
      case 'doughnut':
         ChartComponent = DoughnutChart
         break
      case 'pie':
         ChartComponent = PieChart
         break
      case 'vertical':
         ChartComponent = VerticalChart
         break
      default:
         break
   }

   /* If ChartComponent is not defined, return null */
   if (!ChartComponent) return null
   /* else, render the chart component with appropriate props */
   return (
      <div className={`dashboard-chart ${type}-chart`}>
         <h2 className='chart-title'>{title}</h2>
         <ChartComponent chartData={data} chartLabels={labels} bgColor={bgColor} />
      </div>
   )
}

export default ChartWrapper