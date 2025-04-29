import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to WorkWithMe</h1>
      <p className="text-gray-600 text-center max-w-xl mb-6">
        Discover nearby workspaces or host your own. Work anywhere, anytime.
      </p>
      <div className="flex gap-4">
        <Link to="/login" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark">Login</Link>
        <Link to="/register" className="px-6 py-3 bg-secondary text-white rounded hover:bg-secondary-dark">Register</Link>
      </div>
    </section>
  );
};

export default LandingPage;
