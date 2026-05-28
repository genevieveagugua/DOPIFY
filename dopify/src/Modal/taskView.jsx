import React from 'react';
import {
  CalendarIcon,
  ClockIcon,
  SparkleIcon,
  ZapIcon,
} from '../components/icons';

function InfoChip({ label, tone = 'neutral' }) {
  const toneStyles = {
    neutral: 'bg-[--color-surface-container] text-[--color-on-surface-variant] border border-[--color-outline-variant]',
    accent: 'bg-[--color-primary-fixed] text-[--color-on-primary-fixed-variant]',
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}>
      {label}
    </span>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex-1 rounded-3xl border border-[--color-outline-variant] bg-[--color-surface-container] p-4">
      <div className="flex items-center gap-3 text-[--color-primary] mb-4">{icon}</div>
      <p className="text-xs uppercase tracking-[0.3em] text-[--color-on-surface-variant] mb-2">{label}</p>
      <p className="font-semibold text-sm text-[--color-on-surface]">{value}</p>
    </div>
  );
}

export default function TaskView({ task = {}, onClose, onComplete }) {
  const title = task.title || 'Untitled Task';
  const description = task.description || 'No description provided. Add details to keep the task clear.';
  const dueInfo = task.dueInfo || 'No deadline set';
  const reward = task.reward || 'No reward selected';
  const chips = [
    task.badge ? { label: task.badge.label, tone: task.badge.type === 'priority' ? 'accent' : 'neutral' } : null,
    task.dueType ? { label: task.dueType === 'urgent' ? 'Urgent' : 'Scheduled', tone: task.dueType === 'urgent' ? 'accent' : 'neutral' } : null,
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-sm">
      <div
        className="relative w-full max-w-3xl rounded-[2rem] p-8 shadow-card bg-[--color-surface-container-lowest] bg-opacity-100"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--color-outline-variant] bg-[--color-surface] text-[--color-on-surface-variant] transition hover:bg-[--color-surface-container-low]"
          aria-label="Close task details"
        >
          ×
        </button>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          {chips.length > 0 ? (
            chips.map((chip) => <InfoChip key={chip.label} label={chip.label} tone={chip.tone} />)
          ) : (
            <InfoChip label="Task Details" tone="neutral" />
          )}
        </div>

        <h1 className="text-4xl font-extrabold text-[--color-on-surface] leading-tight tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[--color-on-surface-variant]">
          {description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoCard
            icon={
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[--color-primary-fixed] text-[--color-primary]">
                <ClockIcon size={18} />
              </span>
            }
            label="Deadline"
            value={dueInfo}
          />

          <InfoCard
            icon={
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[--color-primary-fixed] text-[--color-primary]">
                <SparkleIcon size={18} />
              </span>
            }
            label="Reward"
            value={reward}
          />
        </div>

        <div className="mt-8 rounded-3xl bg-[--color-surface-container] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[--color-on-surface-variant] mb-2">Estimated Completion</p>
              <p className="text-sm font-semibold text-[--color-on-surface]">75%</p>
            </div>
            <div className="rounded-full bg-[--color-surface-container-low] px-3 py-2 text-xs font-medium text-[--color-on-surface-variant]">
              In progress
            </div>
          </div>
          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-[--color-surface-container-low]">
            <div className="h-full w-[75%] rounded-full bg-[--color-primary] shadow-btn" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onComplete}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[--color-primary] px-6 py-3 text-sm font-semibold text-[--color-on-primary] shadow-btn transition hover:opacity-95 active:scale-[0.98]"
          >
            <ZapIcon size={18} />
            Complete Task
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-[--color-primary] bg-transparent px-6 py-3 text-sm font-semibold text-[--color-primary] transition hover:bg-[--color-primary-fixed] hover:text-[--color-on-primary-fixed-variant] active:scale-[0.98]"
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}
