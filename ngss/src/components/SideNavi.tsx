/* ROUTE */
import { NavLink } from 'react-router-dom'
/* CONSTANTS */
import { naviLinks } from '../constants/naviLinks'
/* TYPE */
import { INaviLink } from '../types/naviLinksType'
/* STORE */
import { useAppSelector } from '../store/hooks'
/* STYLE */
import '../styles/sideNavi.css'

const SideNavi: React.FC = () => {

   const login = useAppSelector(state => state.auth.login)

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
            <NavLink
               to="/profile"
               className={({ isActive, isPending }) =>
                  isPending ? 'navi-footer-wrapper flex-center' : isActive ? 'navi-footer-wrapper flex-center active' : 'navi-footer-wrapper flex-center'}
            >
               <figure className='navi-footer-pp flex-center'>
                  <img src={login.image} alt="ngss" width='40' height='40' />
               </figure>
               <p className='navi-footer-username navi-link'>
                  Welcome {login.username}
               </p>
            </NavLink>
         </div>
      </aside>
   )
}

export default SideNavi
