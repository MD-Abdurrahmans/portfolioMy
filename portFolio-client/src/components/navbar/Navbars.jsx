import {  Navbar } from 'flowbite-react';

import Container from '../../shared/Container/Container';
// import useAxios from '../../hooks/useAxios';
// import useAuth from '../../hooks/useAuth';
import {Link} from 'react-scroll'
import logo from'../../../public/logomine.png'
const Navbars = () => {



    // const  axiosSecure = useAxios();
// const {user} = useAuth();

    //  axiosSecure.get('/user',user?.email).then((res)=>{console.log('role'),res})


    return (
        <div className='bg-[#0F766E] text-white '> 
            




   <Container>
   <Navbar fluid rounded className='bg-transparent py-5 text-white'>
        
        <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className='h-[50px]'  alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            
          </span>
        </Navbar.Brand>
        <div className="flex text-white ">
          {/* <Button>Get started</Button> */}
          <Navbar.Toggle  className='text-white'/>
        </div>
        <Navbar.Collapse>
          
        {/* <Navbar.Link className='text-white' href="/">Home</Navbar.Link>
          
           <Navbar.Link className='text-white' href="#about">About</Navbar.Link>
           <Navbar.Link className='text-white' href="#project">Project</Navbar.Link>
           <Navbar.Link className='text-white'  href="#contact">Contact</Navbar.Link> */}
           {/* <Navbar.Link href="/dashboard">Dashboard</Navbar.Link> */}
           
            <Link className='text-white cursor-pointer'        activeClass="active" 
      to="/" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} > Home</Link>

           
            <Link className='text-white cursor-pointer'        activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} > About</Link>
           

            <Link className='text-white cursor-pointer'        activeClass="active" 
      to="project" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} > Project</Link>

            <Link className='text-white cursor-pointer'        activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} > Contact</Link>



        </Navbar.Collapse>
  
  
      </Navbar>
  
   </Container>






        </div>
    );
};

export default Navbars;