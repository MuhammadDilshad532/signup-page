import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
const Login = () => {
  return (
    <div>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0
             focus:text-white focus:border-blue-600 peer"
            />
            <label
              htmlFor=""
              className=" absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6"
            >
              Your Email
            </label>
            <AiOutlineMail className="absolute top-4 right-4"/>
           
          </div>
          <div className=" relative my-4">
            <input
              type="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500
             focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
             peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6"
            >
              {" "}
              Your password
            </label>
            <AiOutlineLock className="absolute top-4 right-4"/>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label htmlFor="Rembemer Me">Rembemer Me</label>
            </div>

            <Link to="" className="text-blue-600 font-bold">
              Foroget posword
            </Link>
          </div>
          <button
            type="aubmit"
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300 "
          >
            Login
          </button>
          <div>
            <span className="mt-4">
              New here?{" "}
              <Link to="/Register" className=" text-red-700 font-bold ml-2">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
