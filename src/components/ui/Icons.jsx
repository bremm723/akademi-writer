// Kumpulan ikon SVG inline (stroke) agar tidak perlu dependency ikon eksternal.
const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.7,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

export const GraduationCap = (p) => (
  <svg {...base} {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
  </svg>
)

export const ChartBar = (p) => (
  <svg {...base} {...p}>
    <path d="M3 3v18h18" />
    <rect x="7" y="11" width="3" height="6" rx=".5" />
    <rect x="12" y="7" width="3" height="10" rx=".5" />
    <rect x="17" y="9" width="3" height="8" rx=".5" />
  </svg>
)

export const Document = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
)

export const Users = (p) => (
  <svg {...base} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </svg>
)

export const Chat = (p) => (
  <svg {...base} {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z" />
  </svg>
)

export const Tag = (p) => (
  <svg {...base} {...p}>
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4a2 2 0 0 1 2-2h7.2a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8Z" />
    <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

export const Bolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Lock = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const icons = {
  GraduationCap,
  ChartBar,
  Document,
  Users,
  Chat,
  Tag,
  Bolt,
  Shield,
  Lock,
  Check,
}

export function Icon({ name, ...props }) {
  const Cmp = icons[name] || Check
  return <Cmp {...props} />
}
