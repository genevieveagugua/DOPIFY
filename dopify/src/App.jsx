import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import { TaskProvider } from './context/TaskProvider';
import { ModalProvider } from './context/ModalProvider';
import LandingPage from './pages/LandingPage';
import MyTasksPage from './pages/MyTasksPage';
import NewTaskPage from './pages/NewTaskPage';

/**
 * Main App Component
 * Module 2: Context API, Custom Hooks, React Router
 * 
 * Uses:
 * - React Router for navigation (react-router-dom)
 * - TaskProvider (Context) for global task state management
 * - ModalProvider (Context) for global modal state management
 * - Custom hooks (useTaskManagement, useModal) internally in providers
 */
export default function App() {
  return (
    <Router>
      <TaskProvider>
        <ModalProvider>
          <div className="min-h-screen bg-[--color-page-bg]">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/tasks" element={<MyTasksPage />} />
              <Route path="/create" element={<NewTaskPage />} />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </ModalProvider>
      </TaskProvider>
    </Router>
  );
}
