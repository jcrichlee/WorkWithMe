import { useState, useEffect } from 'react';
import WorkspaceCard from '../components/WorkspaceCard';
import WorkspaceService from '../services/workspaceService';

const WorkspacesPage = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    WorkspaceService.getAll()
      .then(res => setWorkspaces(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-6">Available Workspaces</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <WorkspaceCard key={workspace._id} workspace={workspace} />
        ))}
      </div>
    </section>
  );
};

export default WorkspacesPage;
// This code defines a React component that fetches and displays a list of workspaces from an API. It uses the `useEffect` hook to fetch the data when the component mounts and stores it in the `workspaces` state variable. The workspaces are then displayed using the `WorkspaceCard` component.
// The `WorkspaceService` is a service that handles API requests related to workspaces. It is assumed to have a method `getAll` that fetches all workspaces from the backend.