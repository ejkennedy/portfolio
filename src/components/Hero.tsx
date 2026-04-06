export const Hero = () => (
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden grid-bg"
    style="padding-top: 80px;"
  >
    {/* Radial glow backdrops */}
    <div
      class="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[600px] opacity-60"
      style="background: radial-gradient(circle, rgba(76,201,240,0.08) 0%, transparent 70%); transform: translate(-50%, -50%);"
    />
    <div
      class="pointer-events-none absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-40"
      style="background: radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%); transform: translate(50%, -50%);"
    />

    {/* Main container */}
    <div class="relative z-10 w-full max-w-[1280px] mx-auto px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">

        {/* Left: text block */}
        <div class="flex flex-col justify-center py-16 lg:py-0">

          {/* Eyebrow */}
          <div
            class="reveal flex items-center gap-2 mb-6"
            style="animation-delay: 0s;"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse"></span>
            <span class="text-eyebrow font-medium uppercase tracking-[0.14em] text-secondary">
              Available for ML / SWE roles
            </span>
          </div>

          {/* H1 */}
          <h1
            class="reveal text-4xl md:text-5xl lg:text-hero font-bold text-primary leading-[1.05] tracking-tight mb-6"
            style="animation-delay: 0.1s;"
          >
            Building intelligent{' '}
            <span class="text-gradient">software</span>{' '}
            and machine learning products.
          </h1>

          {/* Sub-line */}
          <p
            class="reveal text-lg text-secondary leading-relaxed mb-10 max-w-[480px]"
            style="animation-delay: 0.2s;"
          >
            From language models to production systems — I design and ship AI products that work at scale.
          </p>

          {/* CTAs */}
          <div
            class="reveal flex flex-wrap items-center gap-4 mb-12"
            style="animation-delay: 0.3s;"
          >
            <a href="#work" class="btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#contact" class="btn-secondary">
              Get in Touch
            </a>
          </div>

          {/* Trust strip */}
          <div
            class="reveal flex flex-wrap items-center gap-x-5 gap-y-2"
            style="animation-delay: 0.4s;"
          >
            {['Python', 'PyTorch', 'LLMs', 'Go', 'Full-Stack'].map((tech) => (
              <span class="text-xs text-secondary/70 font-medium">{tech}</span>
            ))}
          </div>
        </div>

        {/* Right: Three.js neural sphere */}
        <div class="relative hidden lg:flex items-center justify-center h-[600px]">
          {/* Glow behind canvas */}
          <div
            class="absolute inset-0 pointer-events-none"
            style="background: radial-gradient(circle at center, rgba(76,201,240,0.07) 0%, rgba(124,58,237,0.05) 40%, transparent 70%);"
          />

          <canvas
            id="hero-canvas"
            class="w-full h-full"
            style="opacity: 0; transition: opacity 1.2s ease;"
          />
        </div>

      </div>
    </div>

    {/* Scroll indicator */}
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <span class="text-[10px] uppercase tracking-[0.14em] text-secondary">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-secondary to-transparent"></div>
    </div>
  </section>
)
