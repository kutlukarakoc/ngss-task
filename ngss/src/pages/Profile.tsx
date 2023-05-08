/* ROOT */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector } from '../store/hooks'
/* STYLE */
import '../styles/profile.css'

const Profile: React.FC = () => {

   /* a state to holds user infos and login status from store */
   const { user, loginStatus } = useAppSelector(state => state.auth)

   /* hide profile page if user not logged in, navite to home page */
   if(!loginStatus) {
      return <Navigate replace to='/'/>
   }

   /* display if user logged in */
   return (
      <section className='profile flex-center'>
         <div className='profile-header'>
            <figure className='profile-header-pp'>
               <img src={user?.image} alt='ngss'/>
            </figure>
            <div className='profile-header-content'>
               <h1 className='profile-user-name'>{user?.firstName} {user?.lastName}</h1>
               <h4 className='profile-user-job'>{user?.company.department} - {user?.company.title}</h4>
            </div>
         </div>
         <div className='profile-content'>
            <div className='profile-personal'>
               <h2 className='profile-content-subtitle'>Personal</h2>
               <ul>
                  <li><span>Mail : </span> <span>{user?.email}</span></li>
                  <li><span>Phone : </span><span>{user?.phone}</span></li>
                  <li><span>City : </span><span>{user?.address.city}</span></li>
                  <li><span>University : </span><span>{user?.university}</span></li>
               </ul>
            </div>
            <div className='profile-job'>
               <h2 className='profile-content-subtitle'>Experience</h2>
               <ul>
                  <li><span>Company : </span><span>{user?.company.name}</span></li>
                  <li><span>Department/Title : </span><span>{user?.company.department}</span></li>
                  <li><span>Title : </span><span>{user?.company.title}</span></li>
                  <li><span>City : </span><span>{user?.company.address.city}</span></li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Profile