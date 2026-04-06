const stats = [
  { value: '5 yrs',  label: 'industry experience' },
  { value: '50+',    label: 'freelance clients' },
  { value: 'AI + Audio + Web', label: 'core focus areas' },
]

export const About = () => (
  <section id="about" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: avatar visual */}
        <div class="reveal order-2 lg:order-1 flex items-center justify-center">
          <div class="relative w-72 h-72 lg:w-80 lg:h-80">

            <div class="absolute inset-0 rounded-full border border-white/[0.07]"
              style="animation: spin 30s linear infinite;" />

            <div class="absolute inset-6 rounded-full border border-dashed border-accent-blue/20"
              style="animation: spin 20s linear infinite reverse;" />

            <div class="absolute inset-12 rounded-full bg-gradient-to-br from-accent-blue/15 to-accent-violet/20 blur-sm" />

            <div class="absolute inset-12 rounded-full bg-surface border border-white/10 overflow-hidden flex items-center justify-center">
              <div class="flex flex-col items-center gap-1 select-none">
                <span class="text-4xl font-bold text-gradient leading-none">EK</span>
                <span class="text-[9px] uppercase tracking-[0.2em] text-secondary/60">Glasgow, UK</span>
              </div>
            </div>

            <div class="absolute top-4 right-8 w-2 h-2 rounded-full bg-accent-blue/60"
              style="animation: float 4s ease-in-out infinite;" />
            <div class="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-accent-violet/60"
              style="animation: float 5s ease-in-out infinite 1s;" />
            <div class="absolute top-1/2 -right-2 w-1 h-1 rounded-full bg-accent-blue/40"
              style="animation: float 6s ease-in-out infinite 2s;" />
          </div>
        </div>

        {/* Right: bio */}
        <div class="order-1 lg:order-2 flex flex-col gap-6">

          <div class="reveal">
            <p class="section-eyebrow mb-3">About Me</p>
            <h2 class="section-heading mb-6">
              Engineer at the intersection of AI, audio, and product.
            </h2>
          </div>

          <div class="reveal space-y-4 text-secondary leading-relaxed text-[17px]">
            <p>
              Software and AI engineer with 5 years of experience across applied machine
              learning, generative audio, and full-stack engineering. I've worked at
              Continuata since 2021 — researching and building AI systems for music and audio,
              integrating frontier models, and shipping products end to end.
            </p>
            <p>
              I care about making powerful systems feel fast and useful, whether that's a
              GAN-based piano synthesiser, a production LLM gateway, or a mobile AI coach.
              Currently completing a BSc in Computer Science at the University of Glasgow.
            </p>
          </div>

          {/* Now / focus strip */}
          <div class="reveal mt-2 flex flex-col gap-2 text-sm">
            {[
              { label: 'Now',    value: 'AI Research Assistant at Continuata Ltd' },
              { label: 'Study',  value: 'BSc (Hons) Computer Science — University of Glasgow (2026)' },
              { label: 'Focus',  value: 'Generative audio, LLM systems, full-stack engineering' },
              { label: 'Based',  value: 'Glasgow, UK' },
            ].map(({ label, value }) => (
              <div class="flex items-start gap-3">
                <span class="text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary/50 w-12 flex-shrink-0 mt-0.5">{label}</span>
                <span class="w-px h-4 bg-white/10 flex-shrink-0 mt-0.5" />
                <span class="text-secondary/80">{value}</span>
              </div>
            ))}
          </div>

          {/* Stat strip */}
          <div class="reveal mt-4 grid grid-cols-3 gap-4 border border-white/[0.07] rounded-card-sm p-5 bg-surface">
            {stats.map(({ value, label }) => (
              <div class="flex flex-col items-center text-center gap-1">
                <span class="text-lg font-bold text-primary leading-tight">{value}</span>
                <span class="text-[11px] text-secondary/60 leading-tight">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes spin  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
      @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    `}} />
  </section>
)
