import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import {Link} from 'react-scroll'

const Footers = () => {
    return (
        <div className=''>
    

    <footer className="footer footer-center p-10 bg-[#0F766E] text-white  rounded">
  <nav className="grid grid-flow-col gap-4">

 <a href='/'>Home</a>

 <a href='#about'>About</a>
 <a href='#project'>Project</a>

 <a href='#contact'>Contact</a>
           





  </nav> 
  <nav>

  <div className="flex space-x-4  my-7  ">

<Link to='https://github.com/MD-Abdurrahmans'>

<FaGithub    className="hover:bg-[#0F766E] text-3xl cursor-pointer  hover:p-2  hover:text-3xl  hover:rounded-full" />
</Link>


<Link to='https://www.linkedin.com/in/md-abdurrahman-95351223b'>

<FaLinkedin  className="hover:bg-[#0F766E] text-3xl cursor-pointer  hover:p-2  hover:text-3xl  hover:rounded-full" />
</Link>


<Link to='https://www.facebook.com/jxjdjjsj/'>

<FaFacebook  className="hover:bg-[#0F766E] text-3xl cursor-pointer  hover:p-2  hover:text-3xl  hover:rounded-full" />
</Link>


<Link to='https://www.facebook.com/jxjdjjsj/'>

<FaInstagram   className="hover:bg-[#0F766E] text-3xl cursor-pointer  hover:p-2  hover:text-3xl  hover:rounded-full" />
</Link>







</div>
  </nav> 
  <aside>
    <p className=""><span className="flex items-center"><FaPhone className="mr-2"/>0179207887 </span> <strong>address:</strong>Chittagong,Bangladesh </p>
  </aside>
  <aside>
    <p>Copyright © 2023 - All right reserved by Aburrahman Portfolio</p>
  </aside>
</footer>

        </div>
    );
};

export default Footers;