import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ArrowBigRight } from 'lucide-react';
import { handleError, handleSuccess } from '../utilis';

function Login() {
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: ''
  });

  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  // COUNTDOWN TIMER
  useEffect(() => {
    const launchDate = new Date("2025-09-12T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ live: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('All fields required');
    }

    try {
      const url = 'http://localhost:5000/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, jwtToken, error } = result;

      if (success) {
        handleSuccess();
        localStorage.setItem('token', jwtToken);
        setTimeout(() => {
          navigate('/Dashboard');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      }

    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {/* Countdown timer */}
        <div className="mb-6 text-center">
          {timeLeft.live ? (
            <p className="text-lg font-bold text-green-600">🎉 We're Live!</p>
          ) : (
            <div className="flex justify-center gap-3 text-gray-700">
              <div className="p-2 bg-gray-100 rounded">
                <span className="font-bold">{timeLeft.days ?? 0}</span>
                <p className="text-xs">Days</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <span className="font-bold">{timeLeft.hours ?? 0}</span>
                <p className="text-xs">Hours</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <span className="font-bold">{timeLeft.minutes ?? 0}</span>
                <p className="text-xs">Minutes</p>
              </div>
              <div className="p-2 bg-gray-100 rounded">
                <span className="font-bold">{timeLeft.seconds ?? 0}</span>
                <p className="text-xs">Seconds</p>
              </div>
            </div>
          )}
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
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
              value={loginInfo.email}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your password....."
              value={loginInfo.password}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>

          <span className="block text-center text-sm text-gray-600 mt-4">
            Dont have Account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              register
            </Link>
          </span>
          <Link to="/" className="font-medium text-center flex justify-center text-indigo-600 hover:text-indigo-500">
            BackHome <ArrowBigRight />
          </Link>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
