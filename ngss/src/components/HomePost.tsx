/* STORE */
import { useAppSelector } from '../store/hooks'

const HomePost: React.FC = () => {

   /* get posts from the store */
   const posts = useAppSelector(state => state.posts)

   return (
      <>
         {
            posts.posts.map(post => (
               <div className='home-post' key={post?.id}>
                  <figure className='home-post-pp'>
                     <img src={post?.user?.image} alt={post?.title} />
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
      </>
   )
}

export default HomePost