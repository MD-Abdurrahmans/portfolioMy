/** @format */

import {Outlet} from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  return (
    <div className=''>
      <div className='max-w-[2520px] mx-auto  xl:px-20  '>
        <div className='grid grid-cols-12 gap-4   '>
          {/* menu */}
          <div className='md:col-span-3  max-h-[100vh] min-h-screen overflow-y-scroll  text-white border  '>
            <ul>
              <li>HOME</li>
            </ul>
          </div>
          {/* content */}
          <div className='md:col-span-9 col-span-10   max-h-[100vh] overflow-y-scroll '>
            {/* <img src={bgimg} alt="" /> */}

            <div className='my-4'>
              <h1 className='text-4xl hidden md:block text-[#06B6D4] font-bold  '>
                WELCOME {user ? user?.displayName : "Anonymous"}{" "}
              </h1>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
