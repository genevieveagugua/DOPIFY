import { UserCircleIcon } from './icons';

export default function Navbar({ activePage, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'myTasks', label: 'My Tasks' },
    { id: 'newTask', label: 'New Task' },
  ];

  return (
    <nav
      className="
      sticky top-0 z-50
      w-full
      border-b border-[#FFE5EC]
      bg-[#FFF7FB]/85
      backdrop-blur-xl
      "
    >
      <div
        className="
        max-w-7xl mx-auto
        px-6 md:px-8
        h-20
        flex items-center justify-between
        "
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="
          text-[28px]
          font-extrabold
          tracking-[-0.04em]
          text-[#F22B6D]
          hover:opacity-80
          transition-all duration-200
          "
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
                aria-current={isActive ? 'page' : undefined}
                className={`
                  relative
                  pb-2
                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]
                  transition-all duration-200

                  ${
                    isActive
                      ? `
                        text-[#F22B6D]
                      `
                      : `
                        text-[#7B6670]
                        hover:text-[#171717]
                      `
                  }
                `}
              >
                {label}

                {/* Active Indicator */}
                <span
                  className={`
                    absolute left-0 -bottom-[2px]
                    h-[3px]
                    rounded-full
                    transition-all duration-300

                    ${
                      isActive
                        ? 'w-full bg-[#F22B6D]'
                        : 'w-0'
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* User Avatar */}
        <button
          aria-label="User profile"
          className="
          w-11 h-11
          rounded-full
          bg-white
          border border-[#FFE5EC]
          flex items-center justify-center
          text-[#F22B6D]
          shadow-[0_6px_20px_rgba(242,43,109,0.10)]
          hover:scale-105
          hover:shadow-[0_10px_28px_rgba(242,43,109,0.18)]
          active:scale-[0.97]
          transition-all duration-200
          "
        >
          <UserCircleIcon size={24} />
        </button>
      </div>
    </nav>
  );
}