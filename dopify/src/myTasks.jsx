import {
  ZapIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  PlusIcon,
} from './components/icons';
import { layouts, headers, cards, buttons, avatars, badges, misc } from './styles/classNames';

// ─────────────────────────────────────────────────────────────
// Avatar
// ─────────────────────────────────────────────────────────────

function Avatar({ variant = 'active' }) {
  return (
    <div
      className={variant === 'active' ? avatars.active : avatars.completed}
      aria-hidden="true"
    >
      {variant === 'active' ? '✨' : '✓'}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Badge
// ─────────────────────────────────────────────────────────────

function Badge({ label, type }) {
  const badgeClass = type === 'priority' ? badges.priority : badges.neutral;
  return (
    <span className={badgeClass}>
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Active Task Card
// ─────────────────────────────────────────────────────────────

function ActiveTaskCard({ task, onComplete, onViewTask }) {
  return (
    <div className={cards.base}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* Left Side */}
        <div className="flex gap-4 min-w-0">
          <Avatar variant="active" />

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-[--color-on-surface] leading-tight truncate">
              {task.title}
            </h3>

            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span
                className={`flex items-center gap-1 text-sm font-semibold ${
                  task.dueType === 'urgent'
                    ? 'text-[--color-primary]'
                    : 'text-[--color-on-surface-variant]'
                }`}
              >
                {task.dueType === 'urgent' ? (
                  <ClockIcon size={15} />
                ) : (
                  <CalendarIcon size={15} />
                )}

                {task.dueInfo}
              </span>

              {task.badge && (
                <Badge
                  label={task.badge.label}
                  type={task.badge.type}
                />
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onViewTask}
            className={buttons.secondary}
            aria-label={`View ${task.title}`}
          >
            View
          </button>

          <button
            onClick={() => onComplete(task.id)}
            className={buttons.primary}
            aria-label={`Mark ${task.title} as complete`}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Completed Task Card
// ─────────────────────────────────────────────────────────────

function CompletedTaskCard({ task, onViewTask }) {
  return (
    <div className={cards.completed}>
      {/* Left Side */}
      <div className="flex gap-4 min-w-0">
        <Avatar variant="completed" />

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-[--color-on-surface-variant] line-through opacity-60 truncate">
            {task.title}
          </h3>

          <p className="text-sm text-[--color-on-surface-variant] mt-1 opacity-70">
            {task.completedInfo}
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onViewTask}
        className={buttons.outline}
        aria-label={`View ${task.title}`}
      >
        View
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

export default function MyTasks({
  activeTasks = [],
  completedTasks = [],
  onNavigate,
  onViewTask,
  onCompleteTask,
}) {
  const totalTasks = activeTasks.length + completedTasks.length;

  function handleComplete(taskId) {
    if (onCompleteTask) onCompleteTask(taskId);
  }

  return (
    <main className={layouts.mainContainer}>
      <div className={layouts.contentContainer}>

        {/* Header */}
        <header className="mb-10">
          <h1 className={headers.pageTitle}>
            Your Tasks
          </h1>

          <p className={headers.pageSubtitle}>
            You have {activeTasks.length} tasks to crush today. Let&apos;s build momentum!
          </p>
        </header>

        {/* Active Tasks */}
        <section className="mb-20">
          <div className={misc.sectionHeader}>
            <ZapIcon
              size={18}
              className="text-[--color-primary]"
            />

            <h2 className={headers.sectionTitle}>
              Active Tasks
            </h2>
          </div>

          {activeTasks.length === 0 ? (
            <div className={cards.empty}>
              <p className="text-[--color-on-surface-variant] text-sm">
                All caught up! No active tasks 🎉
              </p>
            </div>
          ) : (
            <div className={misc.taskGrid}>
              {activeTasks.map((task) => (
                <ActiveTaskCard
                  key={task.id}
                  task={task}
                  onComplete={handleComplete}
                  onViewTask={() => onViewTask(task)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Completed Tasks */}
        <section className="opacity-80">
          <div className={misc.sectionHeader}>
            <CheckCircleIcon
              size={18}
              className="text-[--color-on-surface-variant]"
            />

            <h2 className="text-2xl font-bold text-[--color-on-surface-variant]">
              Completed Tasks
            </h2>
          </div>

          {completedTasks.length === 0 ? (
            <div className={cards.emptyLow}>
              <p className="text-[--color-on-surface-variant] text-sm">
                No completed tasks yet.
              </p>
            </div>
          ) : (
            <div className={misc.completedGrid}>
              {completedTasks.map((task) => (
                <CompletedTaskCard
                  key={task.id}
                  task={task}
                  onViewTask={() => onViewTask(task)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onNavigate('newTask')}
        className={buttons.fab}
        aria-label="Add new task"
      >
        <PlusIcon size={24} />
      </button>
    </main>
  );
}