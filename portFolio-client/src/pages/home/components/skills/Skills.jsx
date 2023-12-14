import { Progress } from 'flowbite-react';
import Container from '../../../../shared/Container/Container';
import { FaHtml5,FaReact } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb ,SiTailwindcss ,SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <div className='my-10'>
            <Container>


        <div>
        <h1 className="text-4xl text-white text-center my-10 underline specific">SKILLS</h1>
        <div className="flex flex-col md:flex-row justify-between items-center ">
       
<div className='flex-1 my-6 md:my-0 '>
   <div className="flex flex-wrap space-x-7">
         <div className='text-4xl text-[#EA580C]'>
              <FaHtml5 className='animate-[pulse_4s_infinite]'/>
         </div>
         <div className='text-4xl text-[#22D3EE]'>
              <IoLogoCss3 className='animate-[pulse_5s_infinite]'/>
         </div>

         <div className='text-4xl text-[#FACC15]'>
              <IoLogoJavascript className='animate-[pulse_6s_infinite]'/>
         </div>
         <div className='text-4xl text-[#10B981]'>
              <SiMongodb className='animate-[pulse_7s_infinite]'/>
         </div>

         <div className='text-4xl text-[#22D3EE]'>
              <SiTailwindcss className='animate-[pulse_8s_infinite]'/>
         </div>

         <div className='text-4xl  text-[#059669]'>
              <SiExpress className='animate-[pulse_8s_infinite]'/>
         </div>
  
     
   </div>
</div>
    
   <div className='flex-1'>
   <div className="flex flex-col gap-2">
<div className="text-base font-medium text-yellow-400">JS</div>
<Progress progress={60} color='yellow'/>
<div className="text-base font-medium text-[#67E8F9]">React</div>
<Progress progress={77} color="cyan" />
<div className="text-base font-medium text-[#22C55E]">MongoDB</div>
<Progress progress={35}  color="green" />
<div className="text-base font-medium text-green-700">Express js</div>
<Progress progress={45} color="green" />
<div className="text-base font-medium text-[#0284C7]">CSS3</div>
<Progress progress={90} color="blue" />

</div>
   </div>
</div>
        </div>
            </Container>
        </div>
    );
};

export default Skills;