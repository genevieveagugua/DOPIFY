import { useState } from 'react';
import { ListTaskIcon, ClockIcon, SparkleIcon, ZapIcon } from './components/icons';

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
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${bg}`}
    >
      <Icon size={18} className={color} />
    </div>
  );
}

function FieldLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#8E6872] mb-2 ml-1"
    >
      {children}
    </label>
  );
}

const inputBase = `
w-full rounded-2xl border border-[#F4D5DD]
bg-white
px-5 py-4
text-sm text-[#171717]
placeholder:text-[#B68D98]
transition-all duration-200
focus:outline-none
focus:border-[#F22B6D]
focus:ring-4 focus:ring-[#F22B6D]/10
`;

function SectionCard({ children }) {
  return (
    <div
      className="
      bg-white
      rounded-[32px]
      p-7
      shadow-[0_12px_40px_rgba(242,43,109,0.08)]
      border border-white
      "
    >
      {children}
    </div>
  );
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
    <main className="min-h-screen bg-[#FFF7FB] pb-40">
      <div className="max-w-2xl mx-auto px-6 py-10">

        {/* Header */}
        <header className="mb-10">
          <h1
            className="
            text-4xl md:text-5xl
            font-extrabold
            text-[#171717]
            tracking-[-0.04em]
            "
          >
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
                    className={`${inputBase} resize-none min-h-[120px]`}
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
                      className={`
                        px-5 py-3
                        rounded-full
                        text-sm font-semibold
                        transition-all duration-200
                        border
                        flex items-center gap-2
                        hover:scale-[1.02]
                        active:scale-[0.98]

                        ${
                          isSelected
                            ? `
                              bg-[#F22B6D]
                              text-white
                              border-[#F22B6D]
                              shadow-[0_8px_24px_rgba(242,43,109,0.25)]
                            `
                            : `
                              bg-[#FFF8FA]
                              text-[#7A616B]
                              border-[#F4D5DD]
                              hover:bg-[#FFE5EC]
                              hover:border-[#FF8DA1]
                            `
                        }
                      `}
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
          <div
            className="
            fixed bottom-0 left-0 right-0
            px-6 py-5
            bg-[#FFF7FB]/90
            backdrop-blur-xl
            border-t border-[#FFE5EC]
            "
          >
            <div className="max-w-2xl mx-auto">
              <button
                type="submit"
                disabled={!title.trim()}
                className="
                w-full
                flex items-center justify-center gap-3
                py-5 px-8
                rounded-full
                bg-[#F22B6D]
                text-white
                font-bold
                text-[16px]
                tracking-[-0.01em]
                shadow-[0_14px_40px_rgba(242,43,109,0.35)]
                hover:brightness-110
                hover:scale-[1.01]
                active:scale-[0.98]
                disabled:opacity-40
                disabled:cursor-not-allowed
                transition-all duration-200
                "
              >
                Create Task
                <ZapIcon size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}