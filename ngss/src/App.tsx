/* PAGES */
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
/* COMPONENTS */
import SideNavi from "./components/SideNavi"
/* ROUTE */
import { Routes, Route, useMatch } from "react-router-dom"
/* STYLE */
import "./styles/app.css"

const App: React.FC = () => {

   /* gettin url data for login page */
   const loginMatch = useMatch("/login")

   /* set class depends on loginMatch status */
   const contentClasses = loginMatch === null ? "content-container with-side" : "content-container"

    return (
        <main className="main-container">
            {/* if its login page, render sideNavi, else not */}
            {loginMatch === null && <SideNavi />}
            <section className={contentClasses}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </section>
        </main>
    )
}

export default App