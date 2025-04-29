// import { Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import { AuthProvider } from "./contexts/AuthContext";
// import { lazy, Suspense } from "react";
// import Navbar from "./components/Navbar";
// import Loader from "./components/Loader";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const WorkspacesPage = lazy(() => import("./pages/WorkspacesPage"));
// const WorkspaceDetailPage = lazy(() => import("./pages/WorkspaceDetailPage"));
// const HostDashboardPage = lazy(() => import("./pages/HostDashboardPage"));
// const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));

// const App = () => {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <Navbar />
//         <main className="min-h-screen p-4">
//           <Suspense fallback={<Loader />}>
//             <Routes>
//               <Route path="/" element={<LandingPage />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/register" element={<RegisterPage />} />
//               <Route path="/workspaces" element={<WorkspacesPage />} />
//               <Route path="/workspace/:id" element={<WorkspaceDetailPage />} />
//               <Route path="/listings" element={<HostDashboardPage />} />
//               <Route path="/admin" element={<AdminDashboardPage />} />
//             </Routes>
//           </Suspense>
//         </main>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// };

// export default App;

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WorkspacesPage from './pages/WorkspacesPage';
import WorkspaceDetailPage from './pages/WorkspaceDetailPage';
import HostDashboardPage from './pages/HostDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/workspaces" element={<WorkspacesPage />} />
            <Route path="/workspace/:id" element={<WorkspaceDetailPage />} />
            <Route path="/listings" element={<HostDashboardPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </main>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
