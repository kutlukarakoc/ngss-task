interface IButton {
   children?: React.ReactNode
   click?: () => void
   classname: string
   type: 'button' | 'submit'
}

const Button: React.FC<IButton> = ({ children, click, classname, type }) => {
   return (
      <button
         type={type}
         className={classname}
         onClick={click}
         style={{ cursor: 'pointer', border: 'none', outline: 'none' }}
      >
         {children}
      </button>
   )
}

export default Button