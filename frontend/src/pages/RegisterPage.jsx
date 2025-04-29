import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to real register API
    navigate('/login');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="w-full p-3 bg-accent text-white rounded hover:bg-blue-700" type="submit">
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
// This code defines a registration page for a web application. It includes a form where users can input their full name, email, and password. Upon submission, the form data is currently set to navigate to the login page, but it is intended to be connected to a real registration API in the future. The page is styled using Tailwind CSS classes for a clean and modern look.
// The form includes validation to ensure all fields are filled out before submission. The component uses React hooks for state management and navigation.