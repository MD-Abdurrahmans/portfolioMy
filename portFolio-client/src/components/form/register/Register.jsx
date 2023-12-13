
// import { useContext } from "react";
// import { useForm } from "react-hook-form"
// import { AuthContext } from "../../../authProvider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import useAxios from "../../../hooks/useAxios";
// const Register = () => {


//     const {createUser,   signIn,} = useContext(AuthContext)
//    const navigate = useNavigate();
//    const axiosSecure = useAxios();
//     // console.log(createUser)
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm()
    
//       const onSubmit = async(data) => {
//         console.log(data)
//     const users = {email:data.email,role:'guest'}
//         const res = await  createUser(data.email,data.password)

//          console.log('create',res)

   
//           if(res.user){
//             alert('created account')
//             axiosSecure.post('/users',users).then((res)=>{console.log(res.data)})
//             // navigate('/login')
//           }
//       }

//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Register now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
        
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" {...register('email')}  placeholder="email" className="input input-bordered" required />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" {...register('password')}  placeholder="password" className="input input-bordered" required />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button type="submit" className="btn btn-primary">Login</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>r
//         </div>
//     );
// };

// export default Register;