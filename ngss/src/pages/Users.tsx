/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { filterUser } from '../store/features/filterSlice'
/* CONSTANTS */
import { filters } from '../constants/filters'
/* COMPONENTS */
import Button from '../components/ui/Button'
/* STYLE */
import '../styles/users.css'

const Users: React.FC = () => {

   const dispatch = useAppDispatch()

   /* get login status from store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)
   const filteredUsers = useAppSelector(state => state.filter)

   const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      /* create payload for state */
      const form = event.currentTarget
      const payload: { filterKey: string, filterValue: string | number } = {
         filterKey: form.key.value,
         filterValue: form.value.value
      }

      /* if form areas filled, execute dispatches */
      if (payload.filterKey && payload.filterValue) {
         dispatch(filterUser(payload))
      }
   }

   console.log('filteredUsers', filteredUsers)

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
         <div className='users-content'>content</div>
      </section>
   )
}

export default Users

// user id ile postları getir
//https://dummyjson.com/users/5/posts

// user id ile sepet bilgilerini getir
//'https://dummyjson.com/users/5/carts'

// filter user by key value
//'https://dummyjson.com/users/filter?key=hair.color&value=Brown'