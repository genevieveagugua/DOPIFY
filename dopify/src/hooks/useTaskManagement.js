import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook for managing all task-related state and operations
 * Module 2: Custom Hooks
 * Encapsulates business logic for creating, viewing, and completing tasks
 */
export function useTaskManagement() {
  const DEFAULT_TASKS = {
    activeTasks: [],
    completedTasks: [],
  };

  const [tasks, setTasks] = useLocalStorage('dopifyTasks', DEFAULT_TASKS);

  // Add a new task to active tasks
  const addTask = (newTask) => {
    setTasks((prev) => ({
      activeTasks: [newTask, ...prev.activeTasks],
      completedTasks: prev.completedTasks,
    }));
  };

  // Move a task from active to completed
  const completeTask = (taskId) => {
    setTasks((prev) => {
      const task = prev.activeTasks.find((t) => t.id === taskId);
      if (!task) return prev;

      return {
        activeTasks: prev.activeTasks.filter((t) => t.id !== taskId),
        completedTasks: [
          { ...task, completedInfo: 'Completed just now' },
          ...prev.completedTasks,
        ],
      };
    });
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prev) => ({
      activeTasks: prev.activeTasks.filter((t) => t.id !== taskId),
      completedTasks: prev.completedTasks.filter((t) => t.id !== taskId),
    }));
  };

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
  };
}
