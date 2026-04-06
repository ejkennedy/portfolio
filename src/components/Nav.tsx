export const Nav = () => (
  <>
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 nav-blur">
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-blur {
          background: rgba(11, 13, 16, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        #mobile-drawer {
          display: none;
          position: fixed;
          top: 61px;
          left: 0; right: 0;
          background: rgba(11,13,16,0.97);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 24px;
          flex-direction: column;
          gap: 20px;
          z-index: 49;
          backdrop-filter: blur(16px);
        }
        #mobile-drawer.open { display: flex; }
      `}} />

      {/* Logo — full name */}
      <a href="/" class="text-sm font-bold text-primary tracking-tight hover:text-accent-blue transition-colors">
        Ethan Kennedy
      </a>

      {/* Desktop nav */}
      <div class="hidden md:flex items-center gap-8">
        {[
          { label: 'Work',       href: '#work' },
          { label: 'About',      href: '#about' },
          { label: 'Experience', href: '#experience' },
          { label: 'Contact',    href: '#contact' },
        ].map(({ label, href }) => (
          <a href={href} class="text-sm text-secondary hover:text-primary transition-colors duration-200">
            {label}
          </a>
        ))}
      </div>

      {/* Available badge */}
      <a
        href="#contact"
        class="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-primary hover:border-accent-blue/60 hover:text-accent-blue transition-all duration-200"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
        Available
      </a>

      {/* Mobile hamburger */}
      <button
        id="mobile-menu-btn"
        class="md:hidden text-secondary hover:text-primary transition-colors p-1"
        aria-label="Toggle menu"
        onclick="document.getElementById('mobile-drawer').classList.toggle('open')"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
          <rect x="2" y="5"    width="18" height="1.5" rx="1"/>
          <rect x="2" y="10.25" width="18" height="1.5" rx="1"/>
          <rect x="2" y="15.5" width="18" height="1.5" rx="1"/>
        </svg>
      </button>
    </nav>

    {/* Mobile drawer */}
    <div id="mobile-drawer">
      {[
        { label: 'Work',       href: '#work' },
        { label: 'About',      href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact',    href: '#contact' },
      ].map(({ label, href }) => (
        <a
          href={href}
          class="text-base font-medium text-secondary hover:text-primary transition-colors"
          onclick="document.getElementById('mobile-drawer').classList.remove('open')"
        >
          {label}
        </a>
      ))}
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-sm font-medium text-primary w-fit"
        onclick="document.getElementById('mobile-drawer').classList.remove('open')"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
        Available for work
      </a>
    </div>
  </>
)
