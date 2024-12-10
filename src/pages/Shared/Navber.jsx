import { Link } from "react-router-dom";
import hirefolio from "../../assets/hirefolio.png";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Job</Link>
      </li>
      <li>
        <Link>Item 1</Link>
      </li>
      <li>
        <Link>Item 1</Link>
      </li>
    </>
  );
  return (
    <div className="shadow-md py-2 ">
      <div className="navbar w-11/12 mx-auto bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-none z-[1] mt-4 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link className="">
            <img className="w-60" src={hirefolio} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="mr-3 py-1 px-6 rounded-full border border-[#00FF84] text-black"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="py-1 px-6 rounded-full bg-[#00FF84] font-semibold text-black"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
