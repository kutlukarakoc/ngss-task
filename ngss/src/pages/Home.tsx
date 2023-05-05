/* HOOKS */
import { useEffect, useState } from 'react'
/* ROUTE */
import { Navigate } from 'react-router-dom'

const Home: React.FC = () => {

   /* a state for keep tracking users login status */
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

   useEffect(() => {
      /* check if there is a user in local storage when the component mounts */
      const user = JSON.parse(`${localStorage.getItem('user')}`)
      setIsLoggedIn(Boolean(user) && Object.keys(user).length !== 0)
   }, [])

   /* if user is logged in, display the home page */
   if (isLoggedIn) {
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