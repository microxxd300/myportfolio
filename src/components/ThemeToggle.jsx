import { useTheme } from "../hooks/useTheme.js";

const MODES = [
  {
    id: "system",
    label: "System theme",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "light",
    label: "Light theme",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    id: "dark",
    label: "Dark theme",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    ),
  },
];

export default function ThemeToggle() {
  const [mode, setMode] = useTheme();

  return (
    <div className="theme" role="group" aria-label="Color theme">
      {MODES.map((m) => (
        <button
          key={m.id}
          type="button"
          className={`theme__btn ${mode === m.id ? "is-active" : ""}`}
          onClick={() => setMode(m.id)}
          aria-label={m.label}
          title={m.label}
        >
          {m.icon}
        </button>
      ))}
    </div>
  );
}
