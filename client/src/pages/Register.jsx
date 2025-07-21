import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
  e.preventDefault();
  setMessage('');
  try {
    const res = await axios.post('/auth/register', form); // FIXED
    setMessage(res.data.message || 'Registration successful!');
    navigate('/dashboard');
  } catch (err) {
    setMessage(err.response?.data?.error || 'Registration failed');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://ik.imagekit.io/tba7zelzb/hero3.jpeg.jpg?updatedAt=1752762529811"
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Create an Account</h2>
          
          {message && <p className="text-sm text-center text-red-500 mb-4">{message}</p>}
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>

            {/* Optional: Sign in with Google */}
            <button
              type="button"
              className="w-full border mt-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Sign in with Google
            </button>

            <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-green-600 hover:underline dark:text-green-400"
              >
                Please login
              </a>
            </p>
          </form>
          
        </div>
      </div>
    </div>
  
  );
};

export default Register;
