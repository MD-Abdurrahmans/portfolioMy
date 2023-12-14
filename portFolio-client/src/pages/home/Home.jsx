
import About from "./components/about/About";
import Banners from "./components/banner/Banners";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import { IoIosArrowDropupCircle } from "react-icons/io";
import {Link} from 'react-scroll'
const Home = () => {
    return (
        <div id="/">

            <div>

               <Link         activeClass="active" 
      to="/" 
      spy={true} 
      smooth={true} 
      offset={-200} 
      duration={500}  >
            <IoIosArrowDropupCircle className="text-5xl text-[#0F766E] bg-white rounded-full fixed  right-7 cursor-pointer bottom-4"/>
               
               
               </Link>          
            </div>
           <Banners/>


 <About/>


            <Skills/>


 <Project/>



            <Contact/>
        </div>
    );
};

export default Home;