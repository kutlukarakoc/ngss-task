export interface IAxios<T> {
   url: string // URL of the API endpoint
   method: 'get' | 'post' | 'put' // HTTP method for the request
   data?: any // optional request payload
   headers?: any // optional headers to be sent with the request
   initialData?: T // optional initial data for the response
}