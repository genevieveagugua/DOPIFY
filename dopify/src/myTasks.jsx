import { useState } from 'react';
import { ZapIcon, CheckCircleIcon, ClockIcon, CalendarIcon, PlusIcon } from './components/icons';

// ─── Mock Data ──────────────────────────────────────────────────────────────

const INITIAL_ACTIVE_TASKS = [
  {
    id: 1,
    title: 'Design System Review',
    dueInfo: 'Due in 2h',
    dueType: 'urgent',
    badge: { label: 'High Priority', type: 'priority' },
  },
  {
    id: 2,
    title: 'Sync with Growth Team',
    dueInfo: 'Tomorrow, 10:00 AM',
    dueType: 'scheduled',
    badge: { label: 'Internal', type: 'category' },
  },
];

const INITIAL_COMPLETED_TASKS = [
  { id: 3, title: 'Update Brand Guidelines', completedInfo: 'Completed Today, 9:30 AM' },
  { id: 4, title: 'Q4 Strategy Deck',        completedInfo: 'Completed Yesterday' },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function Avatar({ variant = 'active' }) {
  return (
    <div
      className={`w-12 h-12 rounded-full shrink-0 ${
        variant === 'active'
          ? 'bg-[--color-avatar-active]'
          : 'bg-[--color-avatar-completed]'
      }`}
      aria-hidden="true"
    />
  );
}

function Badge({ label, type }) {
  if (type === 'priority') {
    return (
      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[--color-primary-fixed] text-[--color-on-primary-fixed-variant]">
        {label}
      </span>
    );
  }
  return (
    <span className="text-xs font-medium px-3 py-1 rounded-full border border-[--color-outline-variant] text-[--color-on-surface-variant]">
      {label}
    </span>
  );
}

function ActiveTaskCard({ task, onComplete }) {
  return (
    <div className="bg-[--color-surface-container-lowest] rounded-3xl px-6 py-5 flex items-center gap-4 shadow-card hover:shadow-card-hover hover:scale-[1.008] transition-all duration-200">
      <Avatar variant="active" />

      {/* Task Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[--color-on-surface] text-base truncate">{task.title}</p>
        <div className="flex items-center gap-3 mt-1.5 flex-wrap">
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              task.dueType === 'urgent'
                ? 'text-[--color-primary]'
                : 'text-[--color-on-surface-variant]'
            }`}
          >
            {task.dueType === 'urgent' ? <ClockIcon size={13} /> : <CalendarIcon size={13} />}
            {task.dueInfo}
          </span>
          {task.badge && <Badge label={task.badge.label} type={task.badge.type} />}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          className="px-5 py-2 text-sm font-medium rounded-full border border-[--color-outline-variant] text-[--color-on-surface-variant] hover:border-[--color-outline] hover:bg-[--color-surface-container-low] transition-colors duration-150"
          aria-label={`View ${task.title}`}
        >
          View
        </button>
        <button
          onClick={() => onComplete(task.id)}
          className="px-5 py-2 text-sm font-semibold rounded-full bg-[--color-primary-container] text-[--color-on-primary-container] shadow-btn hover:opacity-90 active:scale-95 transition-all duration-150"
          aria-label={`Mark ${task.title} as complete`}
        >
          Complete
        </button>
      </div>
    </div>
  );
}

function CompletedTaskCard({ task }) {
  return (
    <div className="bg-[--color-surface-container] rounded-3xl px-6 py-5 flex items-center gap-4 hover:bg-[--color-surface-container-high] transition-colors duration-200">
      <Avatar variant="completed" />

      {/* Task Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[--color-on-surface-variant] text-base line-through truncate opacity-70">
          {task.title}
        </p>
        <p className="text-xs text-[--color-on-surface-variant] mt-1 opacity-60">{task.completedInfo}</p>
      </div>

      {/* Action */}
      <button
        className="px-5 py-2 text-sm font-medium rounded-full border border-[--color-outline-variant] text-[--color-on-surface-variant] hover:border-[--color-outline] hover:bg-[--color-surface-container-lowest]/70 transition-colors duration-150 shrink-0"
        aria-label={`View ${task.title}`}
      >
        View
      </button>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function MyTasks({ onNavigate }) {
  const [activeTasks, setActiveTasks]       = useState(INITIAL_ACTIVE_TASKS);
  const [completedTasks, setCompletedTasks] = useState(INITIAL_COMPLETED_TASKS);

  const totalTasks = activeTasks.length + completedTasks.length;

  function handleComplete(taskId) {
    const task = activeTasks.find((t) => t.id === taskId);
    if (!task) return;
    setActiveTasks((prev) => prev.filter((t) => t.id !== taskId));
    setCompletedTasks((prev) => [
      { id: task.id, title: task.title, completedInfo: 'Completed just now' },
      ...prev,
    ]);
  }

  return (
    <main className="min-h-screen bg-[--color-background]">
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-[--color-on-surface] tracking-tight" style={{ letterSpacing: '-0.02em' }}>
            Your Tasks
          </h1>
          <p className="text-[--color-on-surface-variant] mt-2 text-sm">
            You have {totalTasks} tasks to crush today. Let&apos;s build momentum!
          </p>
        </header>

        {/* Active Tasks */}
        <section aria-labelledby="active-tasks-heading" className="mb-10">
          <h2
            id="active-tasks-heading"
            className="flex items-center gap-2 text-lg font-bold text-[--color-on-surface] mb-4"
          >
            <ZapIcon size={18} className="text-[--color-on-surface]" />
            Active Tasks
          </h2>

          {activeTasks.length === 0 ? (
            <p className="text-sm text-[--color-on-surface-variant] py-6 text-center">
              All caught up! No active tasks 🎉
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {activeTasks.map((task) => (
                <ActiveTaskCard key={task.id} task={task} onComplete={handleComplete} />
              ))}
            </div>
          )}
        </section>

        {/* Completed Tasks */}
        <section aria-labelledby="completed-tasks-heading">
          <h2
            id="completed-tasks-heading"
            className="flex items-center gap-2 text-lg font-bold text-[--color-on-surface-variant] mb-4"
          >
            <CheckCircleIcon size={18} className="text-[--color-outline]" />
            Completed Tasks
          </h2>

          {completedTasks.length === 0 ? (
            <p className="text-sm text-[--color-on-surface-variant] py-6 text-center">
              No completed tasks yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {completedTasks.map((task) => (
                <CompletedTaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate('newTask')}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[--color-primary] text-white shadow-fab flex items-center justify-center hover:bg-[--color-primary-container] active:scale-95 transition-all duration-150 z-40"
        aria-label="Add new task"
      >
        <PlusIcon size={22} />
      </button>
    </main>
  );
}
