/* PAGES */
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"
/* COMPONENTS */
import SideNavi from "./components/SideNavi"
/* ROUTE */
import { Routes, Route } from "react-router-dom"
/* STYLE */
import "./styles/app.css"

const App: React.FC = () => {
    return (
        <main className="main-container">
            <SideNavi />
            <section className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </section>
        </main>
    )
}

export default App