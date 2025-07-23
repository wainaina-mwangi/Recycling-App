import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import api from '../api/axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Login</h2>

        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account? <a href="/register" className="text-green-600 underline">Register</a>
        </p>

     {/*  Back to Home Link */}
        <p className="text-xs text-center mt-6 text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:underline">&larr; Back to Home</Link>
        </p>
      </form>
      
    </div>
  );
};

export default Login;
