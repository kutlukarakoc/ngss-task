/* HOOKS */
import { useEffect, useState } from 'react'
/* COMPONENTS */
import ChartWrapper from '../components/charts/ChartWrapper'
/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector } from '../store/hooks'
/* AXIOS */
import axios from 'axios'
/* TYPES */
import { IUser } from '../types/userTypes'
/* STYLES */
import '../styles/dashboard.css'

const Dashboard: React.FC = () => {

   /* get login status and posts from the store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)

   /* defining state variables that will be used to store fetched data */
   const [genders, setGenders] = useState<[number, number]>([0, 0])
   const [ages, setAges] = useState<[number, number]>([0, 0])
   const [eyes, setEyes] = useState<number[]>([])
   const [departments, setDepartments] = useState<number[]>([])

   const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/users')
      const data = response.data.users
      /* counting the number of male and female users and updating the genders state variable */
      const maleCount = data.filter((user: IUser) => user.gender === 'male').length
      const femaleCount = data.filter((user: IUser) => user.gender === 'female').length
      setGenders([maleCount, femaleCount])
      /* Counting the number of users below and above 30 years old and updating the ages state variable */
      const ageUnderThirtyCount = data.filter((user: IUser) => user.age < 30).length
      const ageAboveThirtyCount = data.filter((user: IUser) => user.age >= 30).length
      setAges([ageUnderThirtyCount, ageAboveThirtyCount])
      /* counting the number of users with different eye colors and updating the eyes state variable */
      const eyeColorsCount = data.reduce((acc: any, user: IUser) => {
         acc[user.eyeColor] = acc[user.eyeColor] ? acc[user.eyeColor] + 1 : 1
         return acc
      }, {})
      setEyes(Object.values(eyeColorsCount))
      /* counting the number of users in different departments and updating the departments state variable */
      const departmentCount = data.reduce((acc: any, user: IUser) => {
         acc[user.company.department] = acc[user.company.department] ? acc[user.company.department] + 1 : 1
         return acc
      }, {})
      setDepartments(Object.values(departmentCount))
   }

   /* fetch data on first render */
   useEffect(() => {
      fetchData()
   }, [])

   /* if the user is not logged in, redirect to login page */
   if (!loginStatus) {
      return <Navigate replace to='/login' />
   }
   return (
      <section className='dashboard'>
         <ChartWrapper title='Gender Distribution Chart' data={genders} labels={['Male', 'Female']} type='doughnut' />
         <ChartWrapper title='Age Distribution Chart' data={ages} labels={['Under Thirty', 'Above Thirty']} type='pie' />
         <ChartWrapper title='Eye Colors Distribution Chart' data={eyes} labels={['Green', 'Blue', 'Brown', 'Amber', 'Gray']} bgColor='rgba(54, 162, 235, 0.5)' type='vertical' />
         <ChartWrapper title='Department Distribution Chart' data={departments} labels={['Marketing', 'Services', 'Support', 'Product Management', 'Human Resources', 'Sales', 'Engineering']} bgColor='rgba(255, 99, 132, 0.2)' type='vertical' />
      </section>
   )
}

export default Dashboard