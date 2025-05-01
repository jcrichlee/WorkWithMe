import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authService';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Register at WorkWithMe</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" type="email" required />
        <input name="password" value={form.password} onChange={handleChange} placeholder="Password" className="input" type="password" required />
        <button type="submit" className="button-primary">Register</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default RegisterPage;
