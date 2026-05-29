import { useState } from 'react';
import { ListTaskIcon, ClockIcon, SparkleIcon, ZapIcon } from './components/icons';
import { layouts, headers, cards, buttons, inputs, stepIcons, rewardChips, misc } from './styles/classNames';

// ─── Today's date in YYYY-MM-DD format ───────────────────────────────────────
function todayISO() {
  return new Date().toISOString().split('T')[0];
}

// ─── Reward chips data ────────────────────────────────────────────────────────
const REWARD_OPTIONS = [
  { id: 'coffee', emoji: '☕', label: 'Coffee Break' },
  { id: 'cupcake', emoji: '🧁', label: 'Cupcake' },
  { id: 'game', emoji: '🎮', label: '15-min Game' },
  { id: 'walk', emoji: '🚶', label: 'Walk outside' },
];

// ─── Reusable Components ─────────────────────────────────────────────────────

function StepIcon({ icon: Icon, bg, color }) {
  return (
    <div className={`${stepIcons.container} ${bg}`}>
      <Icon size={18} className={color} />
    </div>
  );
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className={inputs.label}>
      {children}
    </label>
  );
}

const inputBase = inputs.base;

function SectionCard({ children }) {
  return <div className={cards.formSection}>{children}</div>;
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function NewTask({ onNavigate, onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState('');
  const [selectedReward, setReward] = useState(null);
  const [customReward, setCustom] = useState('');

  function toggleReward(id) {
    setReward((prev) => (prev === id ? null : id));

    if (id !== null) {
      setCustom('');
    }
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
    <main className={layouts.mainContainer}>
      <div className={layouts.contentContainerLarge}>

        {/* Header */}
        <header className="mb-10">
          <h1 className={headers.pageTitle}>
            Create New Task
          </h1>

          <p className="text-[#7B6670] mt-3 text-[15px] leading-7">
            Break down your goals and reward your progress.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-6">

            {/* ── Step 1 ───────────────────────────── */}
            <SectionCard>
              <div className="flex items-center gap-4 mb-6">
                <StepIcon
                  icon={ListTaskIcon}
                  bg="bg-[#FFE5EC]"
                  color="text-[#F22B6D]"
                />

                <h2 className="text-[22px] font-bold text-[#171717] tracking-[-0.02em]">
                  1. Set Task
                </h2>
              </div>

              <div className="flex flex-col gap-5">

                <div>
                  <FieldLabel htmlFor="task-title">
                    Task Title
                  </FieldLabel>

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
                  <FieldLabel htmlFor="task-desc">
                    Description (Optional)
                  </FieldLabel>

                  <textarea
                    id="task-desc"
                    className={inputs.textarea}
                    placeholder="Add some context or specific steps..."
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>

              </div>
            </SectionCard>

            {/* ── Step 2 ───────────────────────────── */}
            <SectionCard>
              <div className="flex items-center gap-4 mb-6">
                <StepIcon
                  icon={ClockIcon}
                  bg="bg-[#FFE8EE]"
                  color="text-[#FF6B8E]"
                />

                <h2 className="text-[22px] font-bold text-[#171717] tracking-[-0.02em]">
                  2. Set Deadline
                </h2>
              </div>

              <div className="flex flex-col gap-5">

                <div>
                  <FieldLabel htmlFor="task-date">
                    Date
                  </FieldLabel>

                  <input
                    id="task-date"
                    type="date"
                    className={inputBase}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="task-time">
                    Time (Optional)
                  </FieldLabel>

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

            {/* ── Step 3 ───────────────────────────── */}
            <SectionCard>
              <div className="flex items-center gap-4 mb-6">
                <StepIcon
                  icon={SparkleIcon}
                  bg="bg-[#FFF0F4]"
                  color="text-[#F22B6D]"
                />

                <h2 className="text-[22px] font-bold text-[#171717] tracking-[-0.02em]">
                  3. Set Reward
                </h2>
              </div>

              {/* Reward Chips */}
              <div className="flex flex-wrap gap-3 mb-6">
                {REWARD_OPTIONS.map(({ id, emoji, label }) => {
                  const isSelected = selectedReward === id;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleReward(id)}
                      aria-pressed={isSelected}
                      className={isSelected ? rewardChips.selected : rewardChips.unselected}
                    >
                      <span>{emoji}</span>
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Custom Reward */}
              <div>
                <FieldLabel htmlFor="custom-reward">
                  Custom Reward
                </FieldLabel>

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

          {/* ── Sticky Bottom CTA ─────────────────── */}
          
              <button
                type="submit"
                disabled={!title.trim()}
                className={buttons.ctaLarge}
              >
                Create Task
                <ZapIcon size={18} />
              </button>
        </form>
      </div>
    </main>
  );
}