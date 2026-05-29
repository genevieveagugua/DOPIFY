// ─────────────────────────────────────────────────────────────
// Centralized Tailwind Class Names
// ─────────────────────────────────────────────────────────────

// ─── LAYOUTS ──────────────────────────────────────────────────
export const layouts = {
  mainContainer: 'min-h-screen bg-[#FFF7FB]',
  contentContainer: 'max-w-3xl mx-auto px-6 py-10 pb-32',
  contentContainerLarge: 'max-w-2xl mx-auto px-6 py-10',
};

// ─── HEADERS ──────────────────────────────────────────────────
export const headers = {
  pageTitle: 'text-4xl md:text-5xl font-extrabold text-[--color-on-surface] tracking-tight',
  pageSubtitle: 'text-[--color-on-surface-variant] mt-3 text-sm opacity-80',
  sectionTitle: 'text-2xl font-bold text-[--color-on-surface]',
};

// ─── CARDS ───────────────────────────────────────────────────
export const cards = {
  base: 'bg-[--color-surface-container-lowest] rounded-[24px] p-6 md:p-8 shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(184,0,76,0.12)] hover:-translate-y-1 transition-all duration-300',
  completed: 'bg-[--color-surface-container-low] rounded-[24px] p-6 md:p-8 border border-[--color-outline-variant]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 opacity-80 transition-all',
  empty: 'bg-white rounded-[24px] p-10 text-center shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)]',
  emptyLow: 'bg-[--color-surface-container-low] rounded-[24px] p-10 text-center',
  formSection: 'bg-white rounded-[32px] p-7 shadow-[0_12px_40px_rgba(242,43,109,0.08)] border border-white',
  landing: 'bg-white p-10 rounded-[32px] premium-shadow card-border diffusion-glow-hover transition-all duration-500 group',
};

// ─── BUTTONS ─────────────────────────────────────────────────
export const buttons = {
  primary: 'px-6 py-2.5 rounded-full bg-[#b8004c] text-white font-semibold text-sm shadow-md hover:bg-[#cc0055] active:scale-95 transition-all duration-200',
  secondary: 'px-6 py-2.5 rounded-full border border-[--color-primary] text-[--color-primary] font-semibold text-sm hover:bg-[--color-primary-fixed] active:scale-95 transition-all',
  outline: 'px-6 py-2.5 rounded-full border border-[--color-outline] text-[--color-on-surface-variant] font-medium text-sm hover:bg-[--color-surface-container] active:scale-95 transition-all shrink-0',
  fab: 'fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#b8004c] text-white shadow-[0_20px_40px_-10px_rgba(184,0,76,0.35)] flex items-center justify-center hover:bg-[#cc0055] hover:scale-110 active:scale-90 transition-all duration-200 z-40',
  ctaLarge: 'mt-5 w-full flex items-center justify-center gap-3 py-5 px-8 rounded-full bg-[#F22B6D] text-white font-bold text-[16px] tracking-[-0.01em] shadow-[0_14px_40px_rgba(242,43,109,0.35)] hover:brightness-110 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200',
  ctaGlow: 'bg-[#F22B6D] text-white font-bold text-lg uppercase tracking-widest px-14 py-5 rounded-full cta-glow active:scale-95 transition-all duration-300',
  ctaBorder: 'border-2 border-[#F22B6D] text-[#F22B6D] font-bold text-lg uppercase tracking-widest px-14 py-5 rounded-full hover:bg-[#F22B6D]/5 active:scale-95 transition-all duration-300',
};

// ─── AVATARS ─────────────────────────────────────────────────
export const avatars = {
  active: 'w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-[--color-primary-fixed] text-[--color-on-primary-fixed-variant]',
  completed: 'w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-[--color-outline-variant] text-white',
};

// ─── BADGES ──────────────────────────────────────────────────
export const badges = {
  priority: 'px-3 py-1 rounded-full bg-[--color-tertiary-fixed] text-[--color-on-tertiary-fixed-variant] text-xs font-semibold',
  neutral: 'px-3 py-1 rounded-full bg-[--color-surface-container] text-[--color-on-surface-variant] text-xs font-medium',
};

// ─── INPUTS ──────────────────────────────────────────────────
export const inputs = {
  base: 'w-full rounded-2xl border border-[#F4D5DD] bg-white px-5 py-4 text-sm text-[#171717] placeholder:text-[#B68D98] transition-all duration-200 focus:outline-none focus:border-[#F22B6D] focus:ring-4 focus:ring-[#F22B6D]/10',
  textarea: 'w-full rounded-2xl border border-[#F4D5DD] bg-white px-5 py-4 text-sm text-[#171717] placeholder:text-[#B68D98] transition-all duration-200 focus:outline-none focus:border-[#F22B6D] focus:ring-4 focus:ring-[#F22B6D]/10 resize-none min-h-[120px]',
  label: 'block text-[11px] font-bold uppercase tracking-[0.18em] text-[#8E6872] mb-2 ml-1',
};

// ─── STEP ICONS ──────────────────────────────────────────────
export const stepIcons = {
  container: 'w-11 h-11 rounded-full flex items-center justify-center shrink-0',
  taskBg: 'bg-[#FFE5EC]',
  taskColor: 'text-[#F22B6D]',
  deadlineBg: 'bg-[#FFE8EE]',
  deadlineColor: 'text-[#FF6B8E]',
  rewardBg: 'bg-[#FFF0F4]',
  rewardColor: 'text-[#F22B6D]',
};

// ─── REWARD CHIPS ────────────────────────────────────────────
export const rewardChips = {
  selected: 'px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] bg-[#F22B6D] text-white border-[#F22B6D] shadow-[0_8px_24px_rgba(242,43,109,0.25)]',
  unselected: 'px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 border flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] bg-[#FFF8FA] text-[#7A616B] border-[#F4D5DD] hover:bg-[#FFE5EC] hover:border-[#FF8DA1]',
};

// ─── MODAL STYLES ────────────────────────────────────────────
export const modals = {
  overlay: 'fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(28,27,27,0.20)] px-5 py-8 backdrop-blur-md',
  card: 'relative w-full max-w-[540px] overflow-hidden rounded-[32px] border border-[--color-primary]/5 bg-[#fcf9f8] p-7 shadow-[0_10px_30px_-5px_rgba(184,0,76,0.08)]',
  closeButton: 'absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[--color-surface-container-low] text-lg text-[--color-on-surface] transition-all duration-200 hover:bg-[--color-primary] hover:text-white active:scale-90',
  congratsOverlay: 'fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-sm',
  congratsCard: 'relative w-full max-w-2xl rounded-[2rem] p-10 shadow-card bg-[--color-surface-container-lowest]',
};

// ─── MISC ────────────────────────────────────────────────────
export const misc = {
  stickyBottom: 'fixed bottom-0 left-0 right-0 px-6 py-5 bg-[#FFF7FB]/90 backdrop-blur-xl border-t border-[#FFE5EC]',
  sectionHeader: 'flex items-center gap-2 mb-6',
  taskGrid: 'grid gap-6',
  completedGrid: 'grid gap-4',
};

// ─── LANDING PAGE ────────────────────────────────────────────
export const landing = {
  container: 'relative px-6 md:px-8 max-w-7xl mx-auto pt-20 pb-24 text-center overflow-visible',
  cardContainer: 'bg-white p-10 rounded-[32px] premium-shadow card-border diffusion-glow-hover transition-all duration-500 group opacity-0 transform translate-y-8',
  finalCtaContainer: 'rounded-[48px] p-16 md:p-24 text-center relative overflow-hidden text-white bg-[#F22B6D] shadow-2xl',
};
