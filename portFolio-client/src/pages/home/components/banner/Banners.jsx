/** @format */

import { Link } from "react-router-dom";
import Container from "../../../../shared/Container/Container";
import banner1 from'../../../../../public/banner2.png'
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fadeIn } from "../../../../utils/varient";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
AOS.init();
const Banners = () => {

  return (
    <div>
      <div
        className='hero min-h-screen banner'
       
      >
        <div className='hero-overlay bg-opacity-60'></div>

        <div className=' w-full'>
          <Container>
            <div className='flex flex-col flex-wrap  md:flex-row  justify-between items-center'>
              <div className=''>
                <div className='hero-content'>
                  <div className='max-w-lg text-white'>
                    <motion.h1
                    variants={fadeIn('up', 0.3)}
                    initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                    className='mb-5 text-3xl md:text-4xl font-bold specific'>
                      Hi, I'M <span>Abdurrahman</span>{" "}
                    </motion.h1>

                 
                  <motion.div 
                  
                  
                  variants={fadeIn('up', 0.6)}
                  initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.9 }}
                  >
                  <span className="text-2xl md:text-4xl specific">i am a </span>
                     <TypeAnimation 
                     className="text-5xl text-[#10B981] font-bold  "
                      sequence={[
                         'FontEnd Focused',2000,
                        'Developer', 2000,
                        'Designer', 2000,
                      ]}
                    repeat={Infinity} />
                    

                  </motion.div>
                    
                    <motion.p 
                    
                    variants={fadeIn('up', 0.7)}
                    initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.11 }}

                    className='mb-5 my-10  leading-7'>
                    I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.
                    </motion.p>
             

              <div data-aos="fade-right"  data-aos-mirror="true"  data-aos-duration="1500" className="flex space-x-4 items-center">
                     
              <Link target="_blank" to='https://drive.google.com/file/d/1D2H93pm_CDZO2Bf8of0m-_9d209a-bLS/view?usp=sharing'>
                  <button className='btn bg-[#0F766E] border-0 text-white'>
                      {" "}
                      <svg
                        className='w-6 h-6 text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 10 14'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 1v12m0 0 4-4m-4 4L1 9'
                        />
                      </svg>{" "}
                      Download Resume
                    </button>
                  </Link>


                  <Link target="_blank" to='https://github.com/MD-Abdurrahmans'>
                  <button className='flex  border p-2 hover:bg-[#0F766E] items-center text-white'>
                
                      <FaGithub/>  My GitHub
                    </button>
                  </Link>
              </div>

                
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


                  </div>
                </div>
              </div>

              <div className=''>
                <div className='hero-content text-center text-neutral-content'>
                  <div className='max-w-md relative '>
             
                    <img src={banner1} className="w-full animate-[bounce_4s_infinite] " />

                 
                 
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banners;
