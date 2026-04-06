const links = [
  {
    label: 'Email',
    href: 'mailto:ethan@continuata.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="3.5" width="16" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M1 6l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ejkennedy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.34C4.73 15.34 4.26 14 4.26 14a2.2 2.2 0 00-.92-1.21c-.75-.51.06-.5.06-.5a1.74 1.74 0 011.27.85 1.76 1.76 0 002.41.69 1.76 1.76 0 01.52-1.1C5.72 12.43 3.9 11.76 3.9 8.7a3.1 3.1 0 01.82-2.14 2.88 2.88 0 01.08-2.11s.67-.21 2.2.82a7.57 7.57 0 014 0c1.53-1.03 2.2-.82 2.2-.82a2.88 2.88 0 01.08 2.11 3.1 3.1 0 01.82 2.14c0 3.07-1.87 3.74-3.65 3.94a1.97 1.97 0 01.56 1.53v2.27c0 .21.15.46.55.38A8 8 0 009 1z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'ethankennedy.com',
    href: 'https://ethankennedy.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.5"/>
        <path d="M1 9h16M9 1c-2.5 2.5-3.5 5-3.5 8s1 5.5 3.5 8M9 1c2.5 2.5 3.5 5 3.5 8S11.5 14.5 9 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
  },
]

export const Contact = () => (
  <section id="contact" class="py-28 px-8 lg:px-12">
    <div class="max-w-[1280px] mx-auto">

      <div class="reveal relative rounded-card overflow-hidden border border-white/[0.08] bg-surface text-center px-8 py-20">

        {/* Glow blobs */}
        <div
          class="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style="background: radial-gradient(circle, rgba(76,201,240,0.07) 0%, transparent 70%);"
        />
        <div
          class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style="background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%);"
        />
        <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        <div class="relative z-10 flex flex-col items-center gap-8">
          <p class="section-eyebrow">Get In Touch</p>

          <h2 class="text-3xl md:text-4xl lg:text-[44px] font-bold text-primary leading-tight max-w-2xl tracking-tight">
            Let's build something thoughtful and technically strong.
          </h2>

          <p class="text-secondary max-w-md text-[17px] leading-relaxed">
            Open to AI/ML engineering roles, interesting collaborations, and freelance work.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ label, href, icon }) => (
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-secondary hover:text-primary hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
              >
                <span class="text-secondary/60 group-hover:text-accent-blue transition-colors">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary/40">
        <span>© {new Date().getFullYear()} Ethan Kennedy. All rights reserved.</span>
        <div class="flex items-center gap-6">
          {[
            { label: 'Work',       href: '#work' },
            { label: 'About',      href: '#about' },
            { label: 'Experience', href: '#experience' },
          ].map(({ label, href }) => (
            <a href={href} class="hover:text-secondary transition-colors">{label}</a>
          ))}
        </div>
      </div>

    </div>
  </section>
)
