const roles = [
  {
    period: 'Aug 2021 — Present',
    title: 'AI Research Assistant / Software Engineer',
    company: 'Continuata Ltd',
    description: 'Researching and prototyping AI methods for music and audio — diffusion models, GANs, DDSP-style approaches. Building experimental systems with frontier AI APIs (OpenAI, Claude, Gemini, ElevenLabs) and contributing full-stack to the Continuata website and Conduct App.',
    highlights: ['Generative audio models', 'LLM API integration', 'Agile full-stack dev'],
    accent: '#4CC9F0',
  },
  {
    period: '2025 — 2026',
    title: 'Software Development Team Coach',
    company: 'University of Glasgow',
    description: 'Coached a third-year software engineering team through a complete development lifecycle. Supported Agile practices and collaborative workflows, and facilitated workshops alongside industry training from JP Morgan engineers.',
    highlights: ['Agile coaching', 'Team leadership', 'JP Morgan workshops'],
    accent: '#7C3AED',
  },
  {
    period: '2020 — Present',
    title: 'Freelance Creative & Technical Work',
    company: 'Independent',
    description: 'Delivered technical and creative projects for 50+ clients across software, audio, and design — managing requirements, timelines, and long-term professional relationships independently.',
    highlights: ['50+ clients', 'End-to-end delivery', 'Technical consulting'],
    accent: '#4CC9F0',
  },
]

export const Experience = () => (
  <section id="experience" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      <div class="reveal mb-14">
        <p class="section-eyebrow mb-3">Experience</p>
        <h2 class="section-heading">Where I've worked and built</h2>
      </div>

      <div class="relative">
        {/* Timeline rail */}
        <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/40 via-accent-violet/30 to-transparent hidden md:block" />

        <div class="flex flex-col gap-8">
          {roles.map((role, i) => (
            <div class="reveal relative md:pl-10" style={`transition-delay: ${i * 100}ms;`}>
              {/* Timeline dot */}
              <div
                class="absolute left-0 top-6 w-3.5 h-3.5 rounded-full border-2 border-bg hidden md:block"
                style={`background: ${role.accent}; box-shadow: 0 0 12px ${role.accent}60;`}
              />

              <div class="card group">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 class="text-base font-bold text-primary group-hover:text-accent-blue transition-colors duration-200">
                      {role.title}
                    </h3>
                    <p class="text-sm text-secondary mt-0.5">{role.company}</p>
                  </div>
                  <span
                    class="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0 self-start whitespace-nowrap"
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

      {/* Education note */}
      <div class="reveal mt-10 flex items-start gap-4 border border-white/[0.07] rounded-card-sm p-5 bg-surface">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-blue/10 border border-accent-blue/20">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L15 5v4c0 3.31-3 6-7 6S1 12.31 1 9V5l7-4z" stroke="#4CC9F0" stroke-width="1.3" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold text-primary">BSc (Hons) Computer Science</p>
          <p class="text-xs text-secondary mt-0.5">University of Glasgow — Expected 2026 · AI, Machine Learning, Deep Learning</p>
        </div>
      </div>

    </div>
  </section>
)
