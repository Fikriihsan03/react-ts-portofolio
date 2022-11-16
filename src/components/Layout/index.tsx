import Navbar from "../Navbar";
import { ReactNode } from "react";

interface IProps{
    children? : ReactNode
}
const Layout = ({children,...props}:IProps) => {
    return ( 
    <div className="w-[90%] mx-auto">
        <nav>
            <Navbar/>
        </nav>
        <section>
            {children}
        </section>
    </div> 
    );
}
 
export default Layout;