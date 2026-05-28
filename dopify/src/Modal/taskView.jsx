import React from 'react';
import {
  ClockIcon,
  SparkleIcon,
  ZapIcon,
} from '../components/icons';

function InfoChip({ label, tone = 'neutral' }) {
  const toneStyles = {
    neutral:
      'bg-[--color-surface-container] text-[--color-on-surface-variant]',
    accent:
      'bg-[--color-primary-fixed] text-[--color-on-primary-fixed-variant]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-[24px] bg-[--color-surface-container-low] p-5">
      <div className="flex items-center gap-4">
        {icon}

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[--color-outline]">
            {label}
          </p>

          <p className="mt-1 text-sm font-semibold text-[--color-on-surface]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TaskView({
  task = {},
  onClose,
  onComplete,
}) {
  const title = task.title || 'Untitled Task';

  const description =
    task.description ||
    'No description provided. Add details to keep the task clear.';

  const dueInfo = task.dueInfo || 'No deadline set';

  const reward = task.reward || 'No reward selected';

  const chips = [
    task.badge
      ? {
          label: task.badge.label,
          tone:
            task.badge.type === 'priority'
              ? 'accent'
              : 'neutral',
        }
      : null,

    task.dueType
      ? {
          label:
            task.dueType === 'urgent'
              ? 'Urgent'
              : 'Scheduled',
          tone:
            task.dueType === 'urgent'
              ? 'accent'
              : 'neutral',
        }
      : null,
  ].filter(Boolean);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(28,27,27,0.20)] px-5 py-8 backdrop-blur-md">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-[540px] overflow-hidden rounded-[32px] border border-[--color-primary]/5 bg-[#fcf9f8] p-7 shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)]"
        style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
      >

        {/* Decorative Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[--color-primary-fixed]/20 blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close task details"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[--color-surface-container-low] text-lg text-[--color-on-surface] transition-all duration-200 hover:bg-[--color-primary] hover:text-white active:scale-90"
        >
          ×
        </button>

        <div className="relative z-10">

          {/* Chips */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {chips.length > 0 ? (
              chips.map((chip) => (
                <InfoChip
                  key={chip.label}
                  label={chip.label}
                  tone={chip.tone}
                />
              ))
            ) : (
              <InfoChip
                label="Task Details"
                tone="neutral"
              />
            )}
          </div>

          {/* Title */}
          <h1 className="text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[--color-on-surface]">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-5 text-[15px] leading-8 text-[--color-on-surface-variant]">
            {description}
          </p>

          {/* Metadata Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <InfoCard
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-primary-fixed]">
                  <ClockIcon
                    size={20}
                    className="text-[--color-primary]"
                  />
                </div>
              }
              label="Deadline"
              value={dueInfo}
            />

            <InfoCard
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[--color-secondary-fixed]">
                  <SparkleIcon
                    size={20}
                    className="text-[--color-on-secondary-fixed-variant]"
                  />
                </div>
              }
              label="Reward"
              value={reward}
            />
          </div>

          {/* Progress Section */}
          <div className="mt-8">

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-[--color-on-surface]">
                Estimated Completion
              </span>

              <span className="text-sm font-semibold text-[--color-primary]">
                75%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[--color-tertiary-fixed]">
              <div
                className="h-full w-[75%] rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, #FF8DA1 0%, #F22B6D 100%)',
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 border-t border-[--color-outline-variant] pt-5 sm:flex-row">

            {/* Complete Button */}
            <button
              type="button"
              onClick={onComplete}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[--color-primary] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:brightness-110 active:scale-95"
            >
              <ZapIcon size={18} />
              Complete Task
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex flex-1 items-center justify-center rounded-full border border-[--color-primary] bg-transparent px-6 py-3 text-sm font-semibold text-[--color-primary] transition-colors duration-200 hover:bg-[--color-primary-fixed] active:scale-95"
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}