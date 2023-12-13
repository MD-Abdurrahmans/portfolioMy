/** @format */

import Container from "../../../../shared/Container/Container";
import about from "../../../../../public/about.png";
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-scroll"
const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  });
  return (
    <div id='about' ref={ref} >
      <div className='hero min-h-screen  text-white   my-10'>
        <Container>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex-1 relative '>
              <img src={about} className=' ' alt='' />
            </div>

            <div className='flex-1'>
              <h1 className='text-3xl md:text-5xl text-[#0F766E] font-bold'>About Me</h1>
              <h2 className='text-2xl md:text-3xl font-bold'>
                Iam MernStack Junior Developer With 7month Experience
              </h2>


             <p className="py-4    ">Hello ! 👋 I'm  <span className="font-bold text-[#0F766E]">Abdurrahman</span> , a passionate (MERN)STACK Junior Developer. iam hopfull for to be next senior developer</p>
            
              <div className='flex space-x-6'>

                <div className=''>
                  <div className='stat place-items-center text-center bg-transparent'>
                    <div className='stat-value text-lg md:text-2xl'>
                      {inView ? (
                        <CountUp start={0} duration={5} end={240} />
                      ) : null}
                      +
                    </div>
                    <div className='text-lg font-bold'>
                      Days of
                      <br /> Experience
                    </div>
                  </div>
                </div>

                <div className=''>
                  <div className='stat place-items-center text-center bg-transparent'>
                    <div className='stat-value text-lg md:text-2xl'>

                      {inView? <CountUp start={0} end={20}/>  : null} 
                      +
                    </div>
                    <div className=' text-lg font-bold'>
                       Project
                      <br /> Completed
                    </div>
                  </div>
                </div>
              </div>

             <Link to='contact' spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  >
             <button className="border  hover:bg-[#0F766E] p-2 px-4 flex items-center "> <FaPhoneVolume className="mr-2" /> Contact</button>

             </Link>
            </div>


          
          </div>
          
        </Container>
        
      </div>
    </div>
  );
};

export default About;
