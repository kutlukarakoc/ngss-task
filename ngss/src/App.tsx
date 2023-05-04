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
    const matchedPath = useMatch("*")?.pathname
    /* set true if matched paths is one of home's user's or dasboard's path */
    const renderSideNavi = matchedPath === '/' || matchedPath === '/users' || matchedPath === '/dashboard'

    /* set class depends on renderSideNavi status */
    const contentClasses = renderSideNavi ? "content-container with-side" : "content-container"

    return (
        <main className="main-container">
            {/* if its home or users or dashboard, render sideNavi, else not */}
            {renderSideNavi && <SideNavi />}
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