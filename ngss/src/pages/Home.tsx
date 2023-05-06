/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector } from '../store/hooks'

const Home: React.FC = () => {

   /* login status from store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)

   /* if user is logged in, display the home page */
   if (loginStatus) {
      return (
         <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex odio fugiat adipisci est eum, repudiandae earum omnis id repellat ipsum laboriosam eligendi! Doloremque, harum maxime voluptate magnam, et inventore odit aliquid, rerum neque incidunt quos. Eveniet consequatur iste ipsum quibusdam error! Unde doloribus delectus iusto, vel quidem sunt totam quaerat voluptatem voluptas nemo ipsa. Reprehenderit illum excepturi aut quidem incidunt sint nam tempora temporibus est non. Placeat iste atque, eaque, blanditiis amet magni consequuntur laborum officia, ipsum culpa quas. Nihil animi eius officiis, atque voluptas at, nostrum nam impedit sapiente nobis voluptatibus architecto sed cumque. Inventore nisi eligendi officiis modi?
         </div>
      )
   }

   /* if user is not logged in, redirect to login page */
   return <Navigate replace to='/login' />
}

export default Home