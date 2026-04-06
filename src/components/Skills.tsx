const skillPills = [
  'Python', 'TypeScript', 'Go', 'C++',
  'PyTorch', 'TensorFlow', 'GANs', 'Diffusion Models',
  'Generative Audio', 'LLM APIs', 'DSP / Synthesis', 'VST Development',
  'Hono', 'FastAPI', 'HTMX', 'Cloudflare Workers',
  'Docker', 'Ray Serve', 'MLflow', 'Flink',
]

const capabilities = [
  {
    title: 'AI & Machine Learning',
    description: 'Applied ML across audio, language, and structured data. Experience with GANs, diffusion models, fine-tuning, RAG pipelines, and integrating frontier LLM APIs (Claude, GPT-4, Gemini).',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="2.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="4"  cy="6"  r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="18" cy="6"  r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="4"  cy="16" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="18" cy="16" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <line x1="5.5" y1="6.5"  x2="9.5"  y2="9.5"  stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="16.5" y1="6.5" x2="12.5" y2="9.5"  stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="5.5" y1="15.5" x2="9.5"  y2="12.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="16.5" y1="15.5" x2="12.5" y2="12.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
      </svg>
    ),
    stack: ['PyTorch', 'TensorFlow', 'GANs', 'Diffusion Models', 'Claude API', 'OpenAI'],
    accent: '#4CC9F0',
  },
  {
    title: 'Generative Audio & DSP',
    description: 'Deep background in AI for music and audio — generative models, physical modelling synthesis, MIDI systems, and VST plugin development using JUCE and DDSP-style approaches.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11 Q5 6 8 11 Q11 16 14 11 Q17 6 20 11" stroke="#7C3AED" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        <circle cx="8"  cy="11" r="1.5" fill="#7C3AED" fill-opacity="0.5"/>
        <circle cx="14" cy="11" r="1.5" fill="#7C3AED" fill-opacity="0.5"/>
      </svg>
    ),
    stack: ['PyTorch Audio', 'JUCE', 'MIDI', 'Physical Modelling', 'VST', 'C++'],
    accent: '#7C3AED',
  },
  {
    title: 'Full-Stack & Infrastructure',
    description: 'End-to-end product engineering with fast backends, clean APIs, and modern frontends. Comfortable taking a product from prototype to deployed Cloudflare edge worker.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="12" rx="2" stroke="#4CC9F0" stroke-width="1.5"/>
        <path d="M7 10l-2 2 2 2M15 10l2 2-2 2M12 8l-2 6" stroke="#4CC9F0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 19h8" stroke="#4CC9F0" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
    stack: ['TypeScript', 'Go', 'Hono', 'Python', 'HTMX', 'Cloudflare'],
    accent: '#4CC9F0',
  },
]

export const Skills = () => (
  <section id="skills" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      <div class="reveal mb-10">
        <p class="section-eyebrow mb-3">Capabilities</p>
        <h2 class="section-heading">What I work with</h2>
      </div>

      {/* Pill strip */}
      <div class="reveal mb-14 flex flex-wrap gap-2.5">
        {skillPills.map((skill) => (
          <span class="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium border border-white/10 text-secondary bg-white/[0.03] hover:border-accent-blue/40 hover:text-primary transition-all duration-200 cursor-default">
            {skill}
          </span>
        ))}
      </div>

      {/* Capability cards */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {capabilities.map((cap) => (
          <div class="reveal card flex flex-col gap-5">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0"
              style={`background: ${cap.accent}15; border-color: ${cap.accent}30;`}
            >
              {cap.icon}
            </div>
            <div>
              <h3 class="text-base font-semibold text-primary mb-2">{cap.title}</h3>
              <p class="text-sm text-secondary leading-relaxed">{cap.description}</p>
            </div>
            <div class="mt-auto flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
              {cap.stack.map((item) => (
                <span class="text-[10px] px-2.5 py-1 rounded-full font-medium border border-white/10 text-secondary/70">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
)
