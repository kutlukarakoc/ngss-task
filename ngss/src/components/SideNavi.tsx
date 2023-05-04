/* ROUTE */
import { NavLink } from "react-router-dom"
/* CONSTANTS */
import { naviLinks } from "../constants/naviLinks"
/* TYPE */
import { INaviLink } from "../types/naviLinksType"
/* STYLE */
import "../styles/sideNavi.css"

const SideNavi: React.FC = () => {
   return (
      <aside className="navi">
         <figure className="navi-logo">
            <img
               src="https://h8cc60.n3cdn1.secureserver.net/wp-content/uploads/2020/09/ngss-logo.png"
               alt="ngss"
            />
         </figure>
         <div className="navi-pages">
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
      </aside>
   );
};

export default SideNavi
