/** @format */

import {Outlet} from "react-router-dom";
import Footer from "../../components/footer/Footers";
import Navbars from "../../components/navbar/Navbars";

const Root = () => {
  return (
    <div>
    <Navbars/>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
