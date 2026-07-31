import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'ABOUT ME', to: '/' },
  { label: 'BLOG', to: '/blog' },
  { label: 'ABOUT US', to: '/about-us' },
]

export default function Header() {
  return (
    <header
      className="flex justify-center items-start w-full uppercase text-[9px] sm:text-[10px] md:text-xs tracking-[0.16em] sm:tracking-[0.2em] font-medium animate-fade-in z-10 relative"
      style={{ animationDelay: '0.1s', opacity: 0 }}
    >
      <nav className="flex w-full items-center justify-center gap-10 md:gap-12">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `hover-underline-animation inline-flex min-h-5 items-center whitespace-nowrap transition-colors ${
                isActive ? 'text-accent' : 'text-gray-500 hover:text-accent'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
