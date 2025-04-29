import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center gap-8">
      <h1 className="text-4xl font-bold">
        Welcome to <span className="text-accent">WorkWithMe</span>
      </h1>
      <p className="max-w-xl text-lg">
        Find or host workspaces wherever you are. Reliable, flexible, and tailored for modern remote work.
      </p>
      <div className="flex gap-4">
        <Link to="/workspaces" className="px-6 py-3 bg-accent text-white rounded-md hover:bg-blue-700">
          Find a Workspace
        </Link>
        <Link to="/listings" className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-900">
          Host a Space
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
