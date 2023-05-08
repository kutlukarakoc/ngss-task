/* STORE */
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { fetchPreviousPosts, clearPreviousPosts } from '../store/features/previousPostsSlice'
/* COMPONENTS */
import Button from './ui/Button'
import Popup from './Popup'
/* HOOKS */
import { useState } from 'react'
/* ASSETS */
import noResultFound from '../assets/images/no-results-found.png'

const UserCard: React.FC = () => {

   const dispatch = useAppDispatch()

   /* get filtered users and previousPosts from store */
   const filteredUsers = useAppSelector(state => state.filter)
   const previousPosts = useAppSelector(state => state.previousPosts)

   /* a state to keep tracking to open/close popup */
   const [isOpen, setIsOpen] = useState<boolean>(false)

   /* open popup, set hidden to body's overflow for ignore user scroll, fetch previous posts */
   const handleOpen = async (id: number) => {
      await dispatch(fetchPreviousPosts(id))
      document.body.style.overflow = 'hidden'
      setIsOpen(true)
   }

   /* close popup and set auto to body's overflow for user scrolling, clear previous posts state*/
   const handleClose = () => {
      setIsOpen(false)
      document.body.style.overflow = 'auto'
      dispatch(clearPreviousPosts())
   }

   return (
      <>
         {
            filteredUsers.users.users.map(user => (
               <div className='user-card flex-center' key={user.id}>
                  <figure className='user-card-header'>
                     <img src={user.image} alt='ngss' />
                  </figure>
                  <div className='user-card-body flex-center'>
                     <div className='user-card-names flex-center'>
                        <h2 className='user-card-fullname'>{user?.firstName} {user?.lastName}</h2>
                        <h5 className='user-card-username'>@{user?.username}</h5>
                     </div>
                     <h4 className='user-card-job'>{user?.company.department}<br />{user?.company.title}</h4>
                     <ul className='user-additional-info'>
                        <li><span>City : </span><span>{user?.address.city}</span></li>
                        <li><span>Mail : </span> <span>{user?.email}</span></li>
                        <li><span>Phone : </span><span>{user?.phone}</span></li>
                     </ul>
                  </div>
                  <div className='user-card-footer flex-center'>
                     <Button type='button' classname='user-see-posts' click={() => handleOpen(user.id)}>See User's Posts</Button>
                  </div>
               </div>
            ))
         }
         <Popup isOpen={isOpen} onClose={handleClose}>
            {
               !previousPosts.isLoading ? (
                  previousPosts.posts.total > 0 ? (
                     <>
                        {
                           previousPosts.posts.posts.map(post => (
                              <div key={post.id}>
                                 <h3 className='popup-post-title'>{post.title}</h3>
                                 <p className='popup-post'>{post.body}</p>
                              </div>
                           ))
                        }
                     </>
                  ) : (
                     <div className='flex-center' style={{ flexDirection: 'column' }}>
                        <h3 style={{ textAlign: 'center', color: '#324A9A' }}>No previous posts found for this user.</h3>
                        <img src={noResultFound} alt='ngss' />
                     </div>
                  )
               ) : null
            }
         </Popup>
      </>
   )
}

export default UserCard