import React from 'react'
import { Link } from "react-router-dom";
const successfullyLogin = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-red-700'>you Successfully Login</h1>
      <h1 className='text-5xl font-bold text-red-700 mt-4'>Thank You for Login Page</h1>
      <Link to="/Register">
              <button className='w-48 mb-4 text-[18px] mt-14 rounded-full py-2 transition-colors duration-300 bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white'>Back to Register</button>
            </Link>
    </div>
  )
}

export default successfullyLogin
