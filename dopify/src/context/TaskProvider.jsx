import { createContext } from 'react';
import { useTaskManagement } from '../hooks';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const taskManagement = useTaskManagement();

  return (
    <TaskContext.Provider value={taskManagement}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
