/** @format */

import { Link } from "react-router-dom";
import Container from "../../../../shared/Container/Container";

import axios from "axios";
import { useEffect, useState } from "react";



const Project = () => {
const [data,setData] = useState(null)
  // const axiosSecure = useAxios();



 
useEffect(()=>{

             
  axios.get('project.json').then((res)=>setData(res.data))
},[])


console.log(data)

  return (
    <div className="my-10" id="project">
    
    <Container>
    <h1 className='text-4xl text-center text-white my-24 underline specific'>Project</h1>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


{
  
  data?.map((project)=><>
  
<Link to={project.projectLink}>

<div>
<div className="card card-compact   bg-base-100 shadow-xl  group overflow-hidden">
<figure><img src={project?.projectImage} className="h-[300px]" alt="Shoes" /></figure>
<div className="card-body absolute   -bottom-full group-hover:bottom-0  transition-all duration-500 z-50   group-hover:block bg-black w-full h-full bg-opacity-50 text-white">
<h2 className="card-title specific text-white]">{project?.name}</h2>
<p>{project?.description}</p>


 <div>

 </div>

</div>
</div>

</div>
</Link>
  </>)
}


</div>
    </Container>
      
    </div>
  );
};

export default Project;
