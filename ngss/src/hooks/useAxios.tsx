import { useState } from 'react'
/* AXIOS */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
/* TYPE */
import { IAxios } from '../types/axiosTypes'

function useAxios<T>({ url, method, data, headers, initialData }: IAxios<T>) {
   /* a state variable for storing the response from the API */
   const [response, setResponse] = useState<AxiosResponse<T> | null>(null)
   /* a state variable for storing any errors that occur during the request */
   const [error, setError] = useState<any>(null)
   /* a state variable for tracking whether the request is currently loading */
   const [isLoading, setIsLoading] = useState(false)

   /* async function that executes the API request */
   const execute = async (config?: AxiosRequestConfig) => {
      /* set the loading state to true */
      setIsLoading(true)
      try {
         const axiosConfig: AxiosRequestConfig = {
            url,
            method,
            data,
            headers,
            ...config,
         }

         /* make the API request using the axios */
         const result = await axios(axiosConfig)
         /* save the response in the state variable */
         setResponse(result)
      } catch (error) {
         setError(error)
      } finally {
         /* set the loading state to false once the request is complete (with or without errors) */
         setIsLoading(false)
      }
   }

   /* return an object containing the execute function, response, error, and loading state variable */
   return { execute, response, error, isLoading }
}

export default useAxios