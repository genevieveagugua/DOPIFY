import { UserCircleIcon } from './icons';

export default function Navbar({ activePage, onNavigate }) {
  const links = [
    { id: 'home',    label: 'Home' },
    { id: 'myTasks', label: 'My Tasks' },
    { id: 'newTask', label: 'New Task' },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-[--color-outline-variant]/40 sticky top-0 z-50">
      {/* Logo */}
      <button
        onClick={() => onNavigate('home')}
        className="text-xl font-extrabold text-[--color-primary] tracking-tight hover:opacity-80 transition-opacity"
      >
        Dopify
      </button>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        {links.map(({ id, label }) => {
          const isActive = activePage === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`text-sm font-medium pb-1 transition-all duration-200 ${
                isActive
                  ? 'text-[--color-primary] border-b-2 border-[--color-primary] font-semibold'
                  : 'text-[--color-on-surface-variant] hover:text-[--color-on-surface]'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* User Avatar */}
      <button
        className="text-[--color-primary] hover:opacity-70 transition-opacity"
        aria-label="User profile"
      >
        <UserCircleIcon size={28} />
      </button>
    </nav>
  );
}
