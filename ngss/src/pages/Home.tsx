/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchPosts } from '../store/features/postsSlice'
/* HOOKS */
import { useState, useEffect } from 'react'
/* STYLE */
import '../styles/home.css'
/* COMPONENTS */
import HomePost from '../components/HomePost'
import Button from '../components/ui/Button'
import Loading from '../components/ui/Loading'

const Home: React.FC = () => {

   const dispatch = useAppDispatch()
   /* get login status and posts from the store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)
   const posts = useAppSelector(state => state.posts)

   /* initialize skip with 0, which represents the skipped number of posts already displayed */
   const [skip, setSkip] = useState<number>(0)

   /* fetch new posts whenever skip changes */
   useEffect(() => {
      dispatch(fetchPosts(skip))
   }, [skip])

   /* increase the number of posts to skip by 10, and fetch new posts */
   const increaseSkip = () => setSkip((prevSkip) => prevSkip + 10)

   /* if the user is not logged in, redirect to login page */
   if (!loginStatus) {
      return <Navigate replace to='/login' />
   }
   /* if user is logged in, render the list of posts, a button to load more posts, and a loading spinner */
   return (
      <section className='home'>
         <div className='home-post-wrapper'>
            <HomePost />
         </div>
         {
            (!posts?.isLoading) && (posts.posts.length)
               ? (<Button type='button' classname='home-load-more' click={increaseSkip}>Load More Post</Button>)
               : null
         }
         {
            (posts?.isLoading) && (posts?.posts?.length)
               ? <Loading classname='home-load-loading' />
               : null
         }
      </section>
   )
}

export default Home