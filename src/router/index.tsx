import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import NotFound from "../views/404"
import HomeView from "../views/HomeView"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
export default Routers