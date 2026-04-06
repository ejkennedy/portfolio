const stats = [
  { value: '15+', label: 'Projects built' },
  { value: 'ML + SWE', label: 'Dual focus' },
  { value: 'End-to-end', label: 'Prototype → prod' },
]

export const About = () => (
  <section id="about" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: abstract avatar / visual */}
        <div class="reveal order-2 lg:order-1 flex items-center justify-center">
          <div class="relative w-72 h-72 lg:w-80 lg:h-80">

            {/* Outer ring */}
            <div
              class="absolute inset-0 rounded-full border border-white/[0.08]"
              style="animation: spin 30s linear infinite;"
            />

            {/* Mid ring with dashes */}
            <div
              class="absolute inset-6 rounded-full border border-dashed border-accent-blue/20"
              style="animation: spin 20s linear infinite reverse;"
            />

            {/* Inner glow */}
            <div class="absolute inset-12 rounded-full bg-gradient-to-br from-accent-blue/15 to-accent-violet/20 blur-sm" />

            {/* Avatar area */}
            <div class="absolute inset-12 rounded-full bg-surface border border-white/10 overflow-hidden flex items-center justify-center">
              {/* Stylised monogram */}
              <div class="flex flex-col items-center gap-1 select-none">
                <span class="text-4xl font-bold text-gradient leading-none">EK</span>
                <span class="text-[9px] uppercase tracking-[0.2em] text-secondary/60">ML Engineer</span>
              </div>
            </div>

            {/* Floating dot accents */}
            <div class="absolute top-4 right-8 w-2 h-2 rounded-full bg-accent-blue/60" style="animation: float 4s ease-in-out infinite;" />
            <div class="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-accent-violet/60" style="animation: float 5s ease-in-out infinite 1s;" />
            <div class="absolute top-1/2 -right-2 w-1 h-1 rounded-full bg-accent-blue/40" style="animation: float 6s ease-in-out infinite 2s;" />
          </div>
        </div>

        {/* Right: bio + stats */}
        <div class="order-1 lg:order-2 flex flex-col gap-6">
          <div class="reveal">
            <p class="section-eyebrow mb-3">About Me</p>
            <h2 class="section-heading mb-6">
              Engineer at the intersection of ML and product.
            </h2>
          </div>

          <div class="reveal space-y-4 text-secondary leading-relaxed text-[17px]">
            <p>
              I'm a software engineer focused on machine learning and AI systems.
              I build everything from raw model training pipelines to the APIs and UIs
              that put them in front of users.
            </p>
            <p>
              I care about making powerful systems feel fast and intuitive — bridging
              the gap between research and production without sacrificing either.
            </p>
          </div>

          {/* Now / focus strip */}
          <div class="reveal mt-2 flex flex-col gap-2 text-sm text-secondary">
            {[
              { label: 'Now', value: 'Building ML infrastructure and AI products' },
              { label: 'Focus', value: 'LLMs, inference systems, full-stack engineering' },
              { label: 'Based', value: 'UK' },
            ].map(({ label, value }) => (
              <div class="flex items-center gap-3">
                <span class="text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary/50 w-12 flex-shrink-0">{label}</span>
                <span class="w-px h-3 bg-white/10" />
                <span class="text-secondary/80">{value}</span>
              </div>
            ))}
          </div>

          {/* Stat strip */}
          <div class="reveal mt-4 grid grid-cols-3 gap-4 border border-white/[0.07] rounded-card-sm p-5 bg-surface">
            {stats.map(({ value, label }) => (
              <div class="flex flex-col items-center text-center gap-1">
                <span class="text-xl font-bold text-primary">{value}</span>
                <span class="text-[11px] text-secondary/60 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-8px); }
      }
    `}} />
  </section>
)
