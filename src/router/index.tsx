import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import NotFound from "../views/404"
import AboutView from "../views/AboutView"
import HomeView from "../views/HomeView"
import ProjectsView from "../views/ProjectsView"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about"element={<AboutView/>}/>
            <Route path="/projects" element={<ProjectsView/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
export default Routers