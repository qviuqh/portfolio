import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'ABOUT ME', to: '/' },
  { label: 'BLOG', to: '/blog' },
  { label: 'ABOUT US', to: '/about-us' },
]

export default function Header() {
  return (
    <header
      className="flex justify-center items-start w-full uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium animate-fade-in z-10 relative"
      style={{ animationDelay: '0.1s', opacity: 0 }}
    >
      <nav className="hidden md:flex space-x-12">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `hover-underline-animation transition-colors ${
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
