import React from 'react';
import { CalendarIcon, ZapIcon } from '../components/icons';

export default function Congrats({ task = {}, onClose, onAddNewTask }) {
  const title = task.title || 'Quarterly Brand Audit';
  const dueInfo = task.dueInfo || 'Today, 5:00 PM';
  const effort = task.effort || (task.dueType === 'urgent' ? 'High Focus' : 'Standard Focus');
  const reward = task.reward || '1-Hour Coffee Break & Uninterrupted Reading';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl rounded-[2rem] p-10 shadow-card bg-[--color-surface-container-lowest] bg-opacity-100"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--color-outline-variant] bg-[--color-surface] text-[--color-on-surface-variant] transition hover:bg-[--color-surface-container-low]"
          aria-label="Close congratulations modal"
        >
          ×
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[--color-primary-fixed] text-[--color-primary] shadow-btn">
            <ZapIcon size={28} />
          </div>
          <h1 className="text-4xl font-extrabold text-[--color-on-surface]">Congratulations!</h1>
          <p className="max-w-xl text-sm text-[--color-on-surface-variant]">
            You did it. Future you is proud.
          </p>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-card border border-[--color-outline-variant]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-primary] mb-3">Task Completed</p>
          <h2 className="text-2xl font-bold text-[--color-on-surface]">{taskTitle}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[--color-surface-container] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[--color-on-surface-variant] mb-2">Deadline</p>
              <div className="flex items-center gap-2 text-sm text-[--color-on-surface]">
                <CalendarIcon size={16} />
                {dueInfo}
              </div>
            </div>
            <div className="rounded-3xl bg-[--color-surface-container] p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[--color-on-surface-variant] mb-2">Effort</p>
              <div className="flex items-center gap-2 text-sm text-[--color-on-surface]">
                <ZapIcon size={16} />
                {effort}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-[--color-primary-fixed] p-5 text-[--color-primary] border border-[--color-primary]">
            <p className="text-sm font-semibold">Reward Unlocked</p>
            <p className="mt-2 text-sm leading-6 text-[--color-on-primary-fixed-variant]">
              1-Hour Coffee Break &amp; Uninterrupted Reading
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={onAddNewTask}
            className="inline-flex items-center justify-center rounded-full bg-[--color-primary] px-7 py-3 text-sm font-semibold text-[--color-on-primary] shadow-btn transition hover:opacity-95 active:scale-[0.98]"
          >
            + Add New Task
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-[--color-outline-variant] bg-[--color-surface] px-7 py-3 text-sm font-semibold text-[--color-on-surface] transition hover:bg-[--color-surface-container-low] active:scale-[0.98]"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    </div>
  );
}
