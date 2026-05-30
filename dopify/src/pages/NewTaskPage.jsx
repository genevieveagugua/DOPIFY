import { useNavigate } from 'react-router-dom';
import NewTask from '../newTask';
import { useTask } from '../context/TaskContext';

/**
 * New Task Page
 * Module 2: Context API (useTask)
 * Demonstrates Context usage for task creation without prop drilling
 */
export default function NewTaskPage() {
  const navigate = useNavigate();
  const { addTask } = useTask();

  const handleCreateTask = (task) => {
    addTask(task);
    navigate('/tasks');
  };

  return (
    <NewTask
      onCreateTask={handleCreateTask}
      onNavigate={() => navigate('/tasks')}
    />
  );
}
