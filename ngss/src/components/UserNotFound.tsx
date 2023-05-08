/* ASSETS */
import userNotFoundImage from '../assets/images/user-not-found.png'

const UserNotFound: React.FC = () => {
   return(
      <div className='users-not-found'>
         <figure className='users-not-found-img'>
            <img src={userNotFoundImage} alt='ngss' />
         </figure>
         <h2 className='users-not-found-text'>
            Users are not found. Try again with new values.
         </h2>
      </div>
   )   
}

export default UserNotFound