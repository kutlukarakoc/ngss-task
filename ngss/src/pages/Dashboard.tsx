import Doughnut from '../components/DoughnutChart'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../styles/dashboard.css'

const Dashboard: React.FC<any> = () => {

   const [genderCount, setGenderCount] = useState<number[]>([0, 0])
   const [ages, setAges] = useState<number[]>([])

   const fetchGenderCount = async (gender: string) => {
      const response = await axios.get(`https://dummyjson.com/users/filter?key=gender&value=${gender}`)
      const data = await response.data.total
      if (gender === "male") {
         setGenderCount((prev) => [data, prev[1]])
      } else {
         setGenderCount((prev) => [prev[0], data])
      }
   }

   const fetchAges = async () => {
      const response = await axios.get('https://dummyjson.com/users')
      const data = await response.data.users
      const ages = data.map((user: any) => user.age)
      let ageUnderThirty: number[] = []
      let ageAboveThirty: number[] = []
      ages.forEach((age: number) => {
         if (age < 30) {
            ageUnderThirty = [...ageUnderThirty, age]
         } else {
            ageAboveThirty = [...ageAboveThirty, age]
         }
      })
      setAges([ageUnderThirty.length, ageAboveThirty.length])
   }


   useEffect(() => {
      (async () => {
         await fetchGenderCount('male')
         await fetchGenderCount('female')
         await fetchAges()
      })()
   }, [])

   return (
      <section className='dashboard'>
         <div className='dashboard-chart gender-chart'>
            <Doughnut chartData={genderCount} chartLabels={['Male', 'Female']} />
         </div>
         <div className='dashboard-chart age-chart'>
            <Doughnut chartData={ages} chartLabels={['Undert Thiry', 'Above Thirty']} />
         </div>
      </section>
   )
}

export default Dashboard