import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import login from "../../assets/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto my-10 flex lg:flex-row flex-col justify-center items-center">
      <div>
        <Lottie animationData={login}></Lottie>
      </div>
      <div className="min-h-screen w-full lg:w-[500px] flex justify-center items-center">
        <div className="card shadow-lg w-full max-w-lg shrink-0 rounded-none py-4 px-2 md:p-10 ">
          <h2 className="text-center dark:text-white mb-3 text-2xl font-semibold">
            Login your account
          </h2>
          <button
            //   onClick={handleLoginWithGoogle}
            className="border my-3 py-2 border-black  mx-8  flex gap-2 items-center justify-center"
          >
            <FcGoogle className="text-xl " />
            <p className="">Login With Google</p>
          </button>
          <p className="text-center  mt-2">OR</p>

          <form
            // onSubmit={handlewithLogin}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                placeholder="Enter your email address"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                // type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" Enter your password"
                className="input input-bordered rounded-none"
                required
              />
              <button
                // onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-3 bottom-12"
              >
                {/* {showPassword ? <FaEyeSlash /> : <FaRegEye />} */}
              </button>
              <label className="label">
                <Link
                  // onClick={hadleFogetPassword}
                  className="label-text-alt link link-hover "
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded-sm text-black bg-[#00FF84]">
                Login
              </button>
            </div>
          </form>

          <p className="text-center ">
            Dont’t Have An Account ? {""}
            <Link to="/register" className="text-[#00FF84]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
