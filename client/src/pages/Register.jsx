import React, { useState } from 'react'; // Make sure useState is imported
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { handleError, handleSuccess } from '../utilis';

function Register() {
  const [signupInfo, setsignupInfo] = useState({ 
    username: '', // Match state keys to input names for consistency
    email: '',
    password: ''
  });

  // This function will handle changes for ALL input fields
  const navigate = useNavigate();
  const handleChange = (e) => {
    // We use the input's 'name' attribute to determine which state property to update
    const { name, value } = e.target;

    setsignupInfo(prevInfo => ({
      ...prevInfo, // Copy existing state properties
      [name]: value // Update the specific property by its name
    }));
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    const {username, email,password} = signupInfo;
  if (!username|| !email || !password){
    return handleError('All fields required')
  }

  try {
    const url = 'http://localhost:5000/auth/signup';
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo),
      });
  const result = await response.json();
  const {success,message} = result;
  if(success){
    handleSuccess();
    setTimeout(() => {
      navigate('/login')
    }, 1000);
  }else if(error){
   const details = error?.details[0].message;
   handleError(details);
  }

  } catch (error) {
    handleError(error);
  }
    // // Now, registerInfo will contain the latest values from the form
    // console.log('Form submitted with:', signupInfo);

    // This is where you would typically send data to your backend API
    // For example:
    // try {
    //     const url = 'http://localhost:5000/auth/signup';
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(registerInfo),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     toast.success(data.message || 'Registration successful!');
    //   } else {
    //     toast.error(data.message || 'Registration failed.');
    //   }
    // } catch (error) {
    //   toast.error('Network error during registration.');
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              onChange={handleChange} 
              id="username"
              name="username"
              autoFocus
              placeholder="Enter Your username....."
              value={signupInfo.username} 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              onChange={handleChange} 
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email....."
              value={signupInfo.email} 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              onChange={handleChange} // Correct onChange handler
              type="password"
              id="password"
              name="password" // Name attribute MUST match the state key
              placeholder="Enter Your password....."
              value={signupInfo.password} // Bind value to state.password
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>

          <span className="block text-center text-sm text-gray-600 mt-4">
            Already Have an Account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;