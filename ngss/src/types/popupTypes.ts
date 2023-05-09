export interface IPopup {
   isOpen: boolean
   onClose: () => void
   children: React.ReactNode
}