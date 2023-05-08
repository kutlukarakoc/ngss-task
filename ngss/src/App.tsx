/* PAGES */
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Login from './pages/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
/* COMPONENTS */
import SideNavi from './components/SideNavi'
/* ROUTE */
import { Routes, Route, useMatch } from 'react-router-dom'
/* STYLE */
import './styles/app.css'

const App: React.FC = () => {

   /* gettin url data for login page */
   const matchedPath: string = useMatch('*')?.pathname ?? ''
   /* allowed paths for displaying side navi */
   const allowedPagesForSideNav: Array<string> = ['/', '/users', '/dashboard', '/profile']
   const renderSideNavi: boolean = allowedPagesForSideNav.includes(matchedPath)

   /* set class depends on renderSideNavi status */
   const contentClasses = renderSideNavi ? 'content-container with-side' : 'content-container'

   return (
      <main className='main-container' >
         {/* if its home or users or dashboard, render sideNavi, else not */}
         {renderSideNavi && <SideNavi />}
         <div className={contentClasses}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/users' element={<Users />} />
               <Route path='/dashboard' element={<Dashboard />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/login' element={<Login />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </div>
      </main>
   )
}

export default App