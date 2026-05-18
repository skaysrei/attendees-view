import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 px-4">
        <div className="order-3 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-full sm:flex-nowrap sm:pb-0">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Attendees
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
