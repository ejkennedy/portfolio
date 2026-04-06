export const Nav = () => (
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 nav-blur">
    <style dangerouslySetInnerHTML={{ __html: `
      .nav-blur {
        background: rgba(11, 13, 16, 0.8);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }
    `}} />

    {/* Logo / name */}
    <a href="/" class="text-sm font-semibold text-primary tracking-tight hover:text-accent-blue transition-colors">
      EK
    </a>

    {/* Nav links */}
    <div class="hidden md:flex items-center gap-8">
      {[
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ].map(({ label, href }) => (
        <a
          href={href}
          class="text-sm text-secondary hover:text-primary transition-colors duration-200"
        >
          {label}
        </a>
      ))}
    </div>

    {/* CTA */}
    <a
      href="mailto:ethan@example.com"
      class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-primary hover:border-accent-blue/60 hover:text-accent-blue transition-all duration-200"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
      Available
    </a>

    {/* Mobile menu button */}
    <button
      class="md:hidden text-secondary hover:text-primary transition-colors"
      aria-label="Menu"
      id="mobile-menu-btn"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clip-rule="evenodd" />
      </svg>
    </button>
  </nav>
)
