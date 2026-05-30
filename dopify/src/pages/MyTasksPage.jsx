import { useTask } from '../context/TaskContext';
import { useModalContext } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';
import MyTasks from '../myTasks';
import TaskView from '../Modal/taskView';
import Congrats from '../Modal/congrats';

/**
 * My Tasks Page
 * Module 2: Context API (useTask, useModalContext)
 * Demonstrates elimination of prop drilling through Context
 */
export default function MyTasksPage() {
  const navigate = useNavigate();
  const { tasks, completeTask } = useTask();
  const { taskViewModal, congratsModal } = useModalContext();

  const handleViewTask = (task) => {
    taskViewModal.openModal(task);
  };

  const handleCompleteTask = (taskId) => {
    const task = tasks.activeTasks.find((t) => t.id === taskId);
    if (!task) return;

    completeTask(taskId);
    congratsModal.openModal(task);
  };

  return (
    <>
      <MyTasks
        activeTasks={tasks.activeTasks}
        completedTasks={tasks.completedTasks}
        onViewTask={handleViewTask}
        onCompleteTask={handleCompleteTask}
        onNavigate={() => navigate('/create')}
      />

      {/* Task View Modal */}
      {taskViewModal.isOpen && taskViewModal.modalData && (
        <TaskView
          task={taskViewModal.modalData}
          onClose={taskViewModal.closeModal}
          onComplete={() => {
            taskViewModal.closeModal();
            handleCompleteTask(taskViewModal.modalData.id);
          }}
        />
      )}

      {/* Congrats Modal */}
      {congratsModal.isOpen && congratsModal.modalData && (
        <Congrats
          task={congratsModal.modalData}
          onClose={congratsModal.closeModal}
          onAddNewTask={() => {
            congratsModal.closeModal();
            navigate('/create');
          }}
        />
      )}
    </>
  );
}
