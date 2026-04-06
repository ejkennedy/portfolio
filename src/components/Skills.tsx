const skillPills = [
  'ML Systems',
  'LLMs & RAG',
  'Model Fine-tuning',
  'Model Serving',
  'MLOps',
  'Backend Engineering',
  'APIs & Microservices',
  'Cloud & Edge',
  'Data Pipelines',
  'Frontend / UI',
  'Distributed Systems',
  'Vector Databases',
]

const capabilities = [
  {
    title: 'Machine Learning',
    description: 'Model training, fine-tuning, RAG pipelines, and production inference. Comfortable across the full lifecycle from research prototype to deployed service.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="2.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="4" cy="6" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="18" cy="6" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="4" cy="16" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <circle cx="18" cy="16" r="1.5" stroke="#4CC9F0" stroke-width="1.5"/>
        <line x1="5.5" y1="6.5" x2="9.5" y2="9.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="16.5" y1="6.5" x2="12.5" y2="9.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="5.5" y1="15.5" x2="9.5" y2="12.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
        <line x1="16.5" y1="15.5" x2="12.5" y2="12.5" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.5"/>
      </svg>
    ),
    stack: ['PyTorch', 'Transformers', 'LangChain', 'vLLM', 'FAISS'],
    accent: '#4CC9F0',
  },
  {
    title: 'Full-Stack Engineering',
    description: 'Fast, scalable backends in Go and Python with modern frontends. Strong emphasis on performance, clean APIs, and developer experience.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="18" height="12" rx="2" stroke="#7C3AED" stroke-width="1.5"/>
        <path d="M7 10l-2 2 2 2M15 10l2 2-2 2M12 8l-2 6" stroke="#7C3AED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 19h8" stroke="#7C3AED" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    ),
    stack: ['Go', 'Hono', 'Bun', 'React', 'HTMX', 'Tailwind'],
    accent: '#7C3AED',
  },
  {
    title: 'MLOps & Deployment',
    description: 'Containerised model serving, monitoring, autoscaling, and CI/CD pipelines. From a single GPU instance to distributed serving clusters.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L20 7v8l-9 5-9-5V7l9-5z" stroke="#4CC9F0" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M11 2v13M2 7l9 6M20 7l-9 6" stroke="#4CC9F0" stroke-width="1" stroke-opacity="0.4"/>
      </svg>
    ),
    stack: ['Docker', 'Kubernetes', 'Cloudflare', 'GCP', 'Prometheus'],
    accent: '#4CC9F0',
  },
]

export const Skills = () => (
  <section id="skills" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      {/* Header */}
      <div class="reveal mb-10">
        <p class="section-eyebrow mb-3">Capabilities</p>
        <h2 class="section-heading">What I work with</h2>
      </div>

      {/* Skill pills strip */}
      <div class="reveal mb-14 stagger-parent flex flex-wrap gap-2.5">
        {skillPills.map((skill) => (
          <span class="stagger-child reveal inline-flex items-center px-4 py-2 rounded-full text-xs font-medium border border-white/10 text-secondary bg-white/[0.03] hover:border-accent-blue/40 hover:text-primary transition-all duration-200 cursor-default">
            {skill}
          </span>
        ))}
      </div>

      {/* Capability cards */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {capabilities.map((cap) => (
          <div class="reveal card group flex flex-col gap-5">
            {/* Icon */}
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0"
              style={`background: ${cap.accent}15; border-color: ${cap.accent}30;`}
            >
              {cap.icon}
            </div>

            {/* Text */}
            <div>
              <h3 class="text-base font-semibold text-primary mb-2">{cap.title}</h3>
              <p class="text-sm text-secondary leading-relaxed">{cap.description}</p>
            </div>

            {/* Stack chips */}
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
