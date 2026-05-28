import {
  ZapIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  PlusIcon,
} from './components/icons';

// ─────────────────────────────────────────────────────────────
// Avatar
// ─────────────────────────────────────────────────────────────

function Avatar({ variant = 'active' }) {
  return (
    <div
      className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center ${
        variant === 'active'
          ? 'bg-[--color-primary-fixed] text-[--color-on-primary-fixed-variant]'
          : 'bg-[--color-outline-variant] text-white'
      }`}
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
  if (type === 'priority') {
    return (
      <span className="px-3 py-1 rounded-full bg-[--color-tertiary-fixed] text-[--color-on-tertiary-fixed-variant] text-xs font-semibold">
        {label}
      </span>
    );
  }

  return (
    <span className="px-3 py-1 rounded-full bg-[--color-surface-container] text-[--color-on-surface-variant] text-xs font-medium">
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Active Task Card
// ─────────────────────────────────────────────────────────────

function ActiveTaskCard({ task, onComplete, onViewTask }) {
  return (
    <div
      className="
        bg-[--color-surface-container-lowest]
        rounded-[24px]
        p-6 md:p-8
        shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)]
        hover:shadow-[0_20px_40px_-10px_rgba(184,0,76,0.12)]
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
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
            className="
              px-6 py-2.5
              rounded-full
              border border-[--color-primary]
              text-[--color-primary]
              font-semibold text-sm
              hover:bg-[--color-primary-fixed]
              active:scale-95
              transition-all
            "
            aria-label={`View ${task.title}`}
          >
            View
          </button>

          <button
            onClick={() => onComplete(task.id)}
            className="
              px-6 py-2.5
              rounded-full
              bg-[#b8004c]
              text-white
              font-semibold text-sm
              shadow-md
              hover:bg-[#cc0055]
              active:scale-95
              transition-all
              duration-200
            "
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
    <div
      className="
        bg-[--color-surface-container-low]
        rounded-[24px]
        p-6 md:p-8
        border border-[--color-outline-variant]/30
        flex flex-col md:flex-row md:items-center
        justify-between
        gap-6
        opacity-80
        transition-all
      "
    >
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
        className="
          px-6 py-2.5
          rounded-full
          border border-[--color-outline]
          text-[--color-on-surface-variant]
          font-medium text-sm
          hover:bg-[--color-surface-container]
          active:scale-95
          transition-all
          shrink-0
        "
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
    <main className="min-h-screen bg-[#FFF7FB]">
      <div className="max-w-3xl mx-auto px-6 py-10 pb-32">

        {/* Header */}
        <header className="mb-10">
          <h1
            className="
              text-4xl md:text-5xl
              font-extrabold
              text-[--color-on-surface]
              tracking-tight
            "
            style={{ letterSpacing: '-0.02em' }}
          >
            Your Tasks
          </h1>

          <p className="text-[--color-on-surface-variant] mt-3 text-sm opacity-80">
            You have {totalTasks} tasks to crush today. Let&apos;s build momentum!
          </p>
        </header>

        {/* Active Tasks */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <ZapIcon
              size={18}
              className="text-[--color-primary]"
            />

            <h2 className="text-2xl font-bold text-[--color-on-surface]">
              Active Tasks
            </h2>
          </div>

          {activeTasks.length === 0 ? (
            <div
              className="
                bg-white
                rounded-[24px]
                p-10
                text-center
                shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)]
              "
            >
              <p className="text-[--color-on-surface-variant] text-sm">
                All caught up! No active tasks 🎉
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
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
          <div className="flex items-center gap-2 mb-6">
            <CheckCircleIcon
              size={18}
              className="text-[--color-on-surface-variant]"
            />

            <h2 className="text-2xl font-bold text-[--color-on-surface-variant]">
              Completed Tasks
            </h2>
          </div>

          {completedTasks.length === 0 ? (
            <div
              className="
                bg-[--color-surface-container-low]
                rounded-[24px]
                p-10
                text-center
              "
            >
              <p className="text-[--color-on-surface-variant] text-sm">
                No completed tasks yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
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
        className="
          fixed
          bottom-8
          right-8
          w-16
          h-16
          rounded-full
          bg-[#b8004c]
          text-white
          shadow-[0_20px_40px_-10px_rgba(184,0,76,0.35)]
          flex
          items-center
          justify-center
          hover:bg-[#cc0055]
          hover:scale-110
          active:scale-90
          transition-all
          duration-200
          z-40
        "
        aria-label="Add new task"
      >
        <PlusIcon size={24} />
      </button>
    </main>
  );
}