import { useState, useEffect } from 'react'
/* ROOT */
import { Navigate } from 'react-router-dom'
/* PAGE BACKGROUND IMAGE */
import notFoundImage from '../assets/images/not-found.png'
import { useAppSelector } from '../store/hooks'

const NotFound: React.FC = () => {
   
   /* a state to holds user login status */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)

   /* a state variable to keep track of whether to redirect or not */
   const [redirect, setRedirect] = useState<boolean>(false)

   /* a useEffect hook to set the redirect state variable as true after 3 seconds */
   useEffect(() => {
      let redirectTimeout = setTimeout(() => {
         setRedirect(true)
      }, 3000)

      /* clear timeout when component unmounts */
      return () => clearTimeout(redirectTimeout)
   }, [])

   return (
      <section className='flex-center' style={{height:'95%', flexDirection:'column'}}>
         <figure style={{maxHeight:'100%',display:'flex',justifyContent:'center'}}>
            <img src={notFoundImage} alt='ngss' />
            {/* if user is logged in, redirect to homepage, else redirect to login page when redirect state is true*/}
            {
               loginStatus
                  ? redirect && <Navigate replace to='/' />
                  : redirect && <Navigate replace to='/login' />
            }
         </figure>
         <h1 style={{color:'#fff',fontSize:'1.5em', textAlign:'center', margin:'0'}}>
            {/* display information message to user depends on login status */}
            {
               loginStatus 
                  ? 'You will be redirected to the homepage soon...' 
                  : 'You will be redirected to the login page soon...'
            }
         </h1>
      </section>
   )
}

export default NotFound