'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, SCHOOL_CONFIG } from '@/lib/constants'
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react'
import { Button } from './ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-500 to-amber-400 text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 group-hover:shadow-emerald-900/30 group-hover:scale-110 group-hover:rotate-3">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight text-gray-900 font-heading">
                {SCHOOL_CONFIG.name}
              </span>
              <span className="text-[10px] font-medium tracking-wide bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent uppercase">
                ✦ Alabama Church School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              const isEnroll = link.highlight

              if (isEnroll) {
                return (
                  <Link key={link.href} href={link.href}>
                    <Button
                      size="sm"
                      variant="gold"
                      className={`ml-2 ${isActive ? 'ring-2 ring-amber-300 ring-offset-2' : ''}`}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      {link.label}
                    </Button>
                  </Link>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'text-emerald-700 bg-emerald-50 shadow-sm'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50 hover:shadow-sm'
                    }
                    group
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
                  )}
                  {!isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 rounded-xl p-2.5 transition-all duration-200 ${
              isOpen
                ? 'bg-emerald-100 text-emerald-700'
                : 'text-gray-600 hover:bg-emerald-50/50 hover:text-emerald-700'
            } md:hidden`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gradient-to-br from-black/30 to-emerald-900/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 transform border-l border-gray-100 bg-white/95 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4 pt-2">
          <span className="text-sm font-medium text-gray-400">☰ Menu</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 text-xs font-bold">
            ✦
          </div>
        </div>
        <nav className="space-y-1 px-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200
                  ${link.highlight
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-amber-950 shadow-md'
                    : isActive
                      ? 'bg-gradient-to-r from-emerald-50 to-emerald-100/50 text-emerald-700 border border-emerald-100'
                      : 'text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-700 hover:pl-5'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {isActive && !link.highlight && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
                  {link.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-4" />
          <p className="text-center text-xs text-gray-400">
            ✦ {SCHOOL_CONFIG.name} ✦
          </p>
        </div>
      </div>
    </header>
  )
}
