const roles = [
  {
    period: '2025 — Present',
    title: 'ML Engineer',
    company: 'Independent / Freelance',
    description: 'Designing and shipping ML-powered products end-to-end — from model selection and fine-tuning to inference infrastructure and product UIs.',
    highlights: ['LLM inference optimisation', 'RAG pipeline design', 'Production MLOps'],
    accent: '#4CC9F0',
  },
  {
    period: '2024 — 2025',
    title: 'Software Engineer',
    company: 'Full-Stack Projects',
    description: 'Built SaaS products and developer tools using Go, Hono, Bun, and Cloudflare Workers. Focused on performance-first backends and clean user interfaces.',
    highlights: ['Cloudflare Workers edge deployment', 'Stripe payment integrations', 'HTMX + Tailwind UIs'],
    accent: '#7C3AED',
  },
  {
    period: '2022 — 2024',
    title: 'ML Research & Engineering',
    company: 'University & Research Projects',
    description: 'Deep learning research across audio ML, NLP, and computer vision. Implemented and trained models from scratch; contributed to open source tooling.',
    highlights: ['Audio source separation (PyTorch)', 'LLM fine-tuning experiments', 'Real-time ML pipelines'],
    accent: '#4CC9F0',
  },
]

export const Experience = () => (
  <section id="experience" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      {/* Header */}
      <div class="reveal mb-14">
        <p class="section-eyebrow mb-3">Experience</p>
        <h2 class="section-heading">Where I've worked and built</h2>
      </div>

      {/* Timeline */}
      <div class="relative">

        {/* Vertical rail */}
        <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/40 via-accent-violet/30 to-transparent hidden md:block" />

        <div class="flex flex-col gap-8">
          {roles.map((role, i) => (
            <div
              class="reveal relative md:pl-10"
              style={`transition-delay: ${i * 100}ms;`}
            >
              {/* Timeline dot */}
              <div
                class="absolute left-0 top-6 w-3.5 h-3.5 rounded-full border-2 border-bg hidden md:block"
                style={`background: ${role.accent}; box-shadow: 0 0 12px ${role.accent}60;`}
              />

              {/* Card */}
              <div class="card group">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 class="text-base font-bold text-primary group-hover:text-accent-blue transition-colors duration-200">
                      {role.title}
                    </h3>
                    <p class="text-sm text-secondary mt-0.5">{role.company}</p>
                  </div>
                  <span
                    class="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 self-start"
                    style={`background: ${role.accent}15; color: ${role.accent}; border: 1px solid ${role.accent}30;`}
                  >
                    {role.period}
                  </span>
                </div>

                <p class="text-sm text-secondary leading-relaxed mb-4">{role.description}</p>

                <div class="flex flex-wrap gap-2">
                  {role.highlights.map((h) => (
                    <span class="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-secondary/70">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  </section>
)
