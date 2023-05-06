/* ROUTE */
import { NavLink } from 'react-router-dom'
/* CONSTANTS */
import { naviLinks } from '../constants/naviLinks'
/* TYPE */
import { INaviLink } from '../types/naviLinksType'
/* STORE */
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { clearLogin, clearUser } from '../store/features/authSlice'
/* STYLE */
import '../styles/sideNavi.css'
/* COMPONENTS */
import Button from './ui/Button'

const SideNavi: React.FC = () => {

   const login = useAppSelector(state => state.auth.login)
   const dispatch = useAppDispatch()

   const handleLogout = () => {
      dispatch(clearLogin())
      dispatch(clearUser())
   }

   return (
      <aside className='navi'>
         <figure className='navi-logo'>
            <img
               src='https://h8cc60.n3cdn1.secureserver.net/wp-content/uploads/2020/09/ngss-logo.png'
               alt='ngss'
            />
         </figure>
         <div className='navi-pages'>
            {naviLinks.map(({ to, label, classname }: INaviLink) => (
               <NavLink
                  key={to}
                  to={to}
                  className={({ isActive, isPending }) =>
                     isPending ? `pending navi-link ${classname}` : isActive ? `active navi-link ${classname}` : `navi-link ${classname}`
                  }
               >
                  {label}
               </NavLink>
            ))}
         </div>

         <div className='navi-footer'>
            <div className='navi-footer-wrapper flex-center'>
               <p className='navi-footer-username navi-link'>Welcome {login?.username}</p>
               <Button type='button' classname='navi-footer-logout' click={handleLogout}>Log out</Button>
            </div>
         </div>
      </aside>
   )
}

export default SideNavi
