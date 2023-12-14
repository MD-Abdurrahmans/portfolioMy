/** @format */

import {useForm} from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import {useState} from "react";
import Container from "../../../../shared/Container/Container";
import {MdMessage} from "react-icons/md";
import { FaArrowsSpin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  const axiosSecure = useAxios();
  const [success, setSuccess] = useState(true);
  const [loading,setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    reset,

    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data);

    const res = await axiosSecure.post("/sendEmail", data);
   
    console.log("sendEmail", res);

    if (res.status == 200) {
      // alert('hi')
      reset();
      setSuccess(true);
      setLoading(false)
    }
    setSuccess(false);
  };

  return (
    <div id="contact">
      <Container>
        <div className='hero min-h-screen  text-white w-full'>
          <div className='hero-content flex-col items-center  md:flex-row justify-between  w-full '>
            <div className='flex-1 text-center lg:text-left  w-full '>
              <h1 className='text-3xl md:text-4xl font-bold flex specific'>
                Lets  <span className="text-[#0F766E] ml-2">Connect</span> <MdMessage className='text-5xl ml-2 text-white' />{" "}
              </h1>
              <p className='py-6 max-w-md'>
                Please fill out the form on this section to contact with me or
                call any Time 24Hour-6Hour Active Always .
              </p>


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
            <div className='card flex-1 shrink-0 w-full max-w-sm shadow-2xl  bg-none '>
              <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    {...register("email")}
                    placeholder='email'
                    className='input input-bordered text-[#0F766E]'
                    required
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Phone</span>
                  </label>
                  <input
                    type='text'
                    {...register("subject")}
                    placeholder='Phone'
                    className='input input-bordered text-[#0F766E]'
                    required
                  />
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Message</span>
                  </label>
                  <textarea
                    {...register("message")}
                    className='textarea textarea-primary text-[#0F766E]'
                    placeholder='Message'
                  ></textarea>
                </div>

                <div className='form-control mt-6'>
                  <button
                    type='submit'
                    className={`btn ${
                       success
                        ? "bg-[#292524] text-white"
                        : "bg-[#059669] text-white"
                    } `}
                  >
                    {success?  "Send" : "Sent"}
                    {loading? <FaArrowsSpin className="text-2xl animate-spin"/> : <FaArrowsSpin className="text-2xl "/>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
