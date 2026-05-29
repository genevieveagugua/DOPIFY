import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import LandingPage from './landingPage';
import MyTasks from './myTasks';
import NewTask from './newTask';
import Congrats from './Modal/congrats';
import TaskView from './Modal/taskView';

const STORAGE_KEY = 'dopifyTasks';

const DEFAULT_TASKS = {
  activeTasks: [],
  completedTasks: [],
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [taskViewOpen, setTaskViewOpen] = useState(false);
  const [congratsOpen, setCongratsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTaskTitle, setCompletedTaskTitle] = useState('Quarterly Brand Audit');
  const [tasks, setTasks] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_TASKS;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_TASKS;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function handleViewTask(task) {
    setSelectedTask(task);
    setTaskViewOpen(true);
  }

  function handleCompleteTask(taskId) {
    const task = tasks.activeTasks.find((t) => t.id === taskId);
    if (!task) return;

    setSelectedTask(task);
    setTasks((prev) => ({
      activeTasks: prev.activeTasks.filter((t) => t.id !== taskId),
      completedTasks: [
        { id: task.id, title: task.title, completedInfo: 'Completed just now', ...task },
        ...prev.completedTasks,
      ],
    }));
    setCompletedTaskTitle(task.title || 'Quarterly Brand Audit');
    setCongratsOpen(true);
  }

  function handleCreateTask(task) {
    setTasks((prev) => ({
      activeTasks: [task, ...prev.activeTasks],
      completedTasks: prev.completedTasks,
    }));
    setActivePage('myTasks');
  }

  function renderPage() {
    switch (activePage) {
      case 'home':
        return <LandingPage onNavigate={setActivePage} />;
      case 'myTasks':
        return (
          <MyTasks
            activeTasks={tasks.activeTasks}
            completedTasks={tasks.completedTasks}
            onNavigate={setActivePage}
            onViewTask={handleViewTask}
            onCompleteTask={handleCompleteTask}
          />
        );
      case 'newTask':
        return <NewTask onNavigate={setActivePage} onCreateTask={handleCreateTask} />;
      case 'congrats':
        return <Congrats onNavigate={setActivePage} />;
      default:
        return (
          <main className="min-h-screen bg-[--color-page-bg] flex items-center justify-center">
            <p className="text-gray-400 text-sm">Genevieve's page!!!</p>
          </main>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[--color-page-bg]">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
      {activePage === 'myTasks' && taskViewOpen && selectedTask && (
        <TaskView
          task={selectedTask}
          onClose={() => setTaskViewOpen(false)}
          onComplete={() => {
            setTaskViewOpen(false);
            handleCompleteTask(selectedTask.id);
          }}
        />
      )}
      {activePage === 'myTasks' && congratsOpen && selectedTask && (
        <Congrats
          task={selectedTask}
          onClose={() => setCongratsOpen(false)}
          onAddNewTask={() => {
            setCongratsOpen(false);
            setActivePage('newTask');
          }}
        />
      )}
    </div>
  );
}
