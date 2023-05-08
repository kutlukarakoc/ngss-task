/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { filterUser } from '../store/features/filterSlice'
/* CONSTANTS */
import { filters } from '../constants/filters'
/* COMPONENTS */
import UserNotFound from '../components/UserNotFound'
import UserCard from '../components/UserCard'
import Button from '../components/ui/Button'
/* STYLE */
import '../styles/users.css'
/* HOOKS */
import { useState } from 'react'


const Users: React.FC = () => {

   const dispatch = useAppDispatch()

   /* get login status and filtered users from store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)
   const filteredUsers = useAppSelector(state => state.filter)

   /* a state to keep tracking if filtered users respose is not empty */
   const [usersFound, setUsersFound] = useState<boolean | null>(null)

   const handleFilter = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      /* create payload for state */
      const form = event.currentTarget
      const payload: { filterKey: string, filterValue: string | number } = {
         filterKey: form.key.value,
         filterValue: form.value.value
      }

      /* if form areas filled, execute dispatch */
      if (payload.filterKey && payload.filterValue) {
         const result = await dispatch(filterUser(payload))
         /* if state is not loading and users are not found, set usersFound state to false, else set true */
         if (!filteredUsers.isLoading) {
            result.payload.total === 0 ? setUsersFound(false) : setUsersFound(true)
         }
      }
   }

   /* if user is not logged in, redirect to login page */
   if (!loginStatus) {
      return <Navigate replace to='/login' />
   }

   /* if user is logged in, render users page */
   return (
      <section className='users'>
         <div className='users-filter'>
            <form className='filter-form' onSubmit={handleFilter}>
               <select name='key' id='filters'>
                  <option value=''>Select Filter</option>
                  {
                     filters.map((filter, index) => (
                        <option value={filter.key} key={index}>{filter.title}</option>
                     ))
                  }
               </select>
               <input type='text' id='filter-input' name='value' placeholder='Enter filter value here' />
               <Button type='submit' classname='filter-submit-btn'>Filter</Button>
            </form>
         </div>
         <div className='users-content'>
            {
               usersFound !== null
                  ? usersFound ? <UserCard /> : <UserNotFound />
                  : <h1 style={{ fontSize: "32px", color: "#F1F6F9", textAlign: "center" }}>Kullanıcılara dair bilgileri görmek için filtreleyin.</h1>
            }
         </div>
      </section>
   )
}

export default Users

// user id ile postları getir
//https://dummyjson.com/users/5/posts

// user id ile sepet bilgilerini getir
//'https://dummyjson.com/users/5/carts'