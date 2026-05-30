import { useContext } from 'react';
import TaskContext from './TaskProvider';

/**
 * Custom hook to use TaskContext
 * Throws error if used outside of TaskProvider
 */
export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within TaskProvider');
  }
  return context;
}
