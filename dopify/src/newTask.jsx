import { useState } from 'react';
import { ListTaskIcon, ClockIcon, SparkleIcon, ZapIcon } from './components/icons';

// ─── Today's date in YYYY-MM-DD format ───────────────────────────────────────
function todayISO() {
  return new Date().toISOString().split('T')[0];
}

// ─── Reward chips data ────────────────────────────────────────────────────────
const REWARD_OPTIONS = [
  { id: 'coffee',  emoji: '☕', label: 'Coffee Break' },
  { id: 'cupcake', emoji: '🧁', label: 'Cupcake' },
  { id: 'game',    emoji: '🎮', label: '15-min Game' },
  { id: 'walk',    emoji: '🚶', label: 'Walk outside' },
];

// ─── Reusable sub-components ─────────────────────────────────────────────────

function StepIcon({ icon: Icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[--color-primary-fixed] flex items-center justify-center shrink-0">
      <Icon size={18} className="text-[--color-primary]" />
    </div>
  );
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold uppercase tracking-widest text-[--color-on-surface-variant] mb-2"
    >
      {children}
    </label>
  );
}

const inputBase = [
  'w-full rounded-xl border border-[--color-outline-variant] bg-[--color-surface-container-lowest]',
  'px-4 py-3 text-sm text-[--color-on-surface] placeholder:text-[--color-outline]',
  'focus:outline-none focus:border-2 focus:border-[--color-primary]',
  'transition-colors duration-150',
].join(' ');

function SectionCard({ children }) {
  return (
    <div className="bg-[--color-surface-container-lowest] rounded-3xl p-6 shadow-card">
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NewTask({ onNavigate, onCreateTask }) {
  const [title, setTitle]           = useState('');
  const [description, setDesc]      = useState('');
  const [date, setDate]             = useState(todayISO());
  const [time, setTime]             = useState('');
  const [selectedReward, setReward] = useState(null);
  const [customReward, setCustom]   = useState('');

  function toggleReward(id) {
    setReward((prev) => (prev === id ? null : id));
    if (id !== null) setCustom('');
  }

  function handleCustomRewardChange(e) {
    setCustom(e.target.value);
    setReward(null);
  }

  function getDueInfo() {
    if (!time) return date;
    return `${date} · ${time}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const reward = selectedReward
      ? REWARD_OPTIONS.find((option) => option.id === selectedReward)?.label
      : customReward || 'Reward Pending';

    const newTask = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: title.trim(),
      description: description.trim(),
      dueInfo: getDueInfo(),
      dueType: 'scheduled',
      badge: null,
      reward,
      createdAt: new Date().toISOString(),
    };

    if (onCreateTask) {
      onCreateTask(newTask);
    }

    onNavigate('myTasks');
  }

  return (
    <main className="min-h-screen bg-[--color-background] pb-32">
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Page Header */}
        <header className="mb-8">
          <h1
            className="text-4xl font-extrabold text-[--color-on-surface] tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Create New Task
          </h1>
          <p className="text-[--color-on-surface-variant] mt-2 text-sm">
            Break down your goals and reward your progress.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-5">

            {/* ── Step 1: Set Task ── */}
            <SectionCard>
              <div className="flex items-center gap-3 mb-5">
                <StepIcon icon={ListTaskIcon} />
                <h2 className="text-lg font-bold text-[--color-on-surface]">1. Set Task</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <FieldLabel htmlFor="task-title">Task Title</FieldLabel>
                  <input
                    id="task-title"
                    type="text"
                    className={inputBase}
                    placeholder="What are we conquering today?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="task-desc">Description (Optional)</FieldLabel>
                  <textarea
                    id="task-desc"
                    className={`${inputBase} resize-none h-28`}
                    placeholder="Add some context or specific steps..."
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>
            </SectionCard>

            {/* ── Step 2: Set Deadline ── */}
            <SectionCard>
              <div className="flex items-center gap-3 mb-5">
                <StepIcon icon={ClockIcon} />
                <h2 className="text-lg font-bold text-[--color-on-surface]">2. Set Deadline</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <FieldLabel htmlFor="task-date">Date</FieldLabel>
                  <input
                    id="task-date"
                    type="date"
                    className={inputBase}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="task-time">Time (Optional)</FieldLabel>
                  <input
                    id="task-time"
                    type="time"
                    className={inputBase}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
            </SectionCard>

            {/* ── Step 3: Set Reward ── */}
            <SectionCard>
              <div className="flex items-center gap-3 mb-5">
                <StepIcon icon={SparkleIcon} />
                <h2 className="text-lg font-bold text-[--color-on-surface]">3. Set Reward</h2>
              </div>

              {/* Reward Chips */}
              <div className="flex flex-wrap gap-3 mb-5">
                {REWARD_OPTIONS.map(({ id, emoji, label }) => {
                  const isSelected = selectedReward === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleReward(id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                        isSelected
                          ? 'bg-[--color-primary-fixed] border-[--color-primary] text-[--color-on-primary-fixed-variant]'
                          : 'border-[--color-outline-variant] text-[--color-on-surface-variant] hover:border-[--color-outline] hover:bg-[--color-surface-container-low]'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span>{emoji}</span>
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Custom Reward */}
              <div>
                <FieldLabel htmlFor="custom-reward">Custom Reward</FieldLabel>
                <input
                  id="custom-reward"
                  type="text"
                  className={inputBase}
                  placeholder="E.g., Watch one YouTube video"
                  value={customReward}
                  onChange={handleCustomRewardChange}
                />
              </div>
            </SectionCard>

          </div>

          {/* ── Create Task Button (sticky bottom) ── */}
          <div className="fixed bottom-0 left-0 right-0 px-6 py-5 bg-[--color-background]/90 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <button
                type="submit"
                disabled={!title.trim()}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-[--color-primary-container] text-[--color-on-primary-container] font-semibold text-base shadow-btn hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
              >
                Create Task
                <ZapIcon size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
