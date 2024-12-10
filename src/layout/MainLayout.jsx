import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="max-w-7xl mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
