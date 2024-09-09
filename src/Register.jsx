import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

   
    if (!formData.firstName || !formData.lastName || !formData.password || !formData.confirmPassword) {
      isValid = false;
    }

    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email (e.g. abc@gmail.com)';
      isValid = false;
    }

    
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/Login');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="relative my-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
            Your First Name
          </label>
        </div>
        <div className="relative my-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
            Your Last Name
          </label>
        </div>
        <div className="relative my-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
            Your Email
          </label>
          <AiOutlineMail className="absolute top-4 right-4" />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="relative my-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
            Your Password
          </label>
          <AiOutlineLock className="absolute top-4 right-4" />
        </div>
        <div className="relative my-4">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600 peer"
          />
          <label className="absolute text-sm text-white duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">
            Confirm Your Password
          </label>
          <AiOutlineLock className="absolute top-4 right-4" />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mb-4 text-[18px] mt-6 rounded-full py-2 transition-colors duration-300 bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white"
        >
          Register
        </button>
        <div>
          <span className="mt-4">
            Already created an account?
            <Link to="/Login" className="text-red-700 font-bold ml-2">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
