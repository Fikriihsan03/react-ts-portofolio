import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    // <div className="fixed top-0 left-0 w-full">
    <div className="flex justify-between items-center h-[70px] border-b-2 border-[#cb3b8a]">
      <h1>Muhammad Fikri Ihsan</h1>
      <ul className="flex gap-4">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
      </ul>
    </div>
    // </div>
  );
};
export default Navbar;
