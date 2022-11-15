// import logo from './logo.svg';
import "./App.css";
import About from "./views/AboutView";
import GreetingSection from "./views/HomeView";
import Navbar from "./components/Navbar";
import ProjectsSection from "./views/ProjectsView";

function App() {
  return (
    <div className=" md:container md:mx-auto">
      <nav>
        <Navbar />
      </nav>
      <section>
        <GreetingSection />
        <About/>
        {/* <ProjectsSection /> */}
      </section>
    </div>
  );
}

export default App;
