import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy-loaded Pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const WorkspacesPage = lazy(() => import('./pages/WorkspacesPage'));
const WorkspaceDetailPage = lazy(() => import('./pages/WorkspaceDetailPage'));
const HostDashboardPage = lazy(() => import('./pages/HostDashboardPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <Router>
        <Navbar />
        <main className="min-h-screen p-4">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/workspaces" element={<ProtectedRoute><WorkspacesPage /></ProtectedRoute>} />
              <Route path="/workspaces/:id" element={<ProtectedRoute><WorkspaceDetailPage /></ProtectedRoute>} />
              <Route path="/host" element={<ProtectedRoute><HostDashboardPage /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />
            </Routes>
          </Suspense>
        </main>
        <Analytics />
        <SpeedInsights />
      </Router>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
