import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(userData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Register at WorkWithMe</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className="input"
          required
        />
        <button type="submit" className="button-primary">Register</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default RegisterPage;
