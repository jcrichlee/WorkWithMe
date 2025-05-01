import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AuthService from '../services/authService';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.login(credentials);
      login(res.data);
      navigate('/workspaces');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Login to WorkWithMe</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} className="input" placeholder="Email" required />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} className="input" placeholder="Password" required />
        <button type="submit" className="button-primary">Login</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default LoginPage;
