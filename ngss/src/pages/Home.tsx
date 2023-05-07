/* ROUTE */
import { Navigate } from 'react-router-dom'
/* STORE */
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchPosts } from '../store/features/postsSlice'
/* HOOKS */
import { useState, useEffect } from 'react'
/* STYLE */
import '../styles/home.css'

const Home: React.FC = () => {

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchPosts(0))
   }, [])

   /* login status from store */
   const loginStatus = useAppSelector(state => state.auth.loginStatus)
   /* */
   const posts = useAppSelector(state => state.posts)
   console.log('p', posts)

   /* if user is logged in, display the home page */
   if (loginStatus) {
      return (
         <section className='home'>
            <div className='home-wrapper'>
               {
                  posts.posts.map(post => (
                     <div className='home-post' key={post?.id}>
                        <figure className='home-post-pp'>
                           <img src={post?.user?.image} alt={post?.title}/>
                        </figure>
                        <div className='home-post-content'>
                           <div className='home-post-user'>
                              <div className='home-post-user-name'>{post?.user?.firstName} {post?.user?.lastName}</div>
                              <div className='home-post-user-username'>@{post?.user?.username}</div>
                           </div>
                           <div className='home-post-text'>{post?.body}</div>
                        </div>
                        <div className='home-post-reaction'>
                           <div className='home-post-reaction-icon'></div>
                           <div className='home-post-reaction-count'>{post?.reactions}</div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
      )
   }

   /* if user is not logged in, redirect to login page */
   return <Navigate replace to='/login' />
}

export default Home