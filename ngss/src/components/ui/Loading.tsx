/* STYLE */
import '../../styles/loading.css'
/* TYPES */
import { ILoading } from '../../types/loadingTypes'


const Loading: React.FC<ILoading> = ({ size, bgColor, color, innerSize }) => {
   return (
      <div
         className='loader'
         style={{
            width: size,
            height: size,
            border: `${innerSize} solid ${bgColor}`,
            borderTop: `${innerSize} solid ${color}`
         }}>
      </div>
   )
}

export default Loading