/* STYLE */
import '../styles/popup.css'
/* TYPES */
import { IPopup } from '../types/popupTypes'

const Popup: React.FC<IPopup> = ({ isOpen, onClose, children }) => {
   const handleClose = () => {
      onClose()
   }

   return isOpen ? (
      <div className='popup-overlay'>
         <div className='popup'>
            <button className='close-btn' onClick={handleClose}>
               X
            </button>
            {children}
         </div>
      </div>
   ) : null
}

export default Popup