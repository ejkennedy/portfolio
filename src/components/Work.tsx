const projects = [
  {
    id: 'llm-gateway',
    size: 'large',
    title: 'LLM Inference Platform',
    description: 'Edge-native LLM gateway built on Cloudflare Workers. Authenticated chat inference, router-backed model selection, SSE streaming, Durable Object rate limiting, budget enforcement, and Analytics Engine observability — fully validated end to end.',
    impact: 'Sub-100ms edge inference with per-user budget tracking and zero cold starts.',
    tags: ['Cloudflare Workers', 'TypeScript', 'SSE', 'LLMs'],
    gradient: 'from-accent-blue/10 to-accent-violet/5',
    accentColor: '#4CC9F0',
    link: 'https://github.com/ejkennedy/LLM-Inference-Platform',
  },
  {
    id: 'realtime-ml',
    size: 'medium',
    title: 'Real-Time Fraud Detection',
    description: 'End-to-end MLOps platform: Flink streaming features, Feast/Redis online serving, Ray Serve + ONNX inference, MLflow shadow deployment, and drift monitoring with Evidently.',
    impact: 'Shadow deployment + rollback workflow with Prometheus/Grafana SLO tracking.',
    tags: ['Python', 'Ray Serve', 'Flink', 'MLflow'],
    gradient: 'from-accent-violet/10 to-accent-blue/5',
    accentColor: '#7C3AED',
    link: 'https://github.com/ejkennedy/Real-Time-Fraud-Detection-MLOps-Platform',
  },
  {
    id: 'evolve',
    size: 'medium',
    title: 'Evolve — AI Habits Coach',
    description: 'Flutter app with a Claude-powered coaching chat that knows your goals, streaks, and logs. SMART goal management, predictive insights, and weekly AI review.',
    impact: 'Context-aware AI coach that adapts to your pace and history.',
    tags: ['Flutter', 'Claude API', 'Supabase', 'Dart'],
    gradient: 'from-green-500/10 to-accent-blue/5',
    accentColor: '#22c55e',
    link: 'https://github.com/ejkennedy/evolve-app',
  },
  {
    id: 'midi-piano',
    size: 'small',
    title: 'MIDI→Piano Neural Synthesis',
    description: 'Dissertation: GAN-based architecture converting MIDI to realistic piano audio with expressive timing, dynamics, and timbral characteristics.',
    impact: 'Expressive piano synthesis from symbolic input.',
    tags: ['PyTorch', 'GANs', 'Audio ML'],
    gradient: 'from-orange-500/10 to-accent-violet/5',
    accentColor: '#f97316',
    link: 'https://github.com/ejkennedy',
  },
  {
    id: 'social-pocket',
    size: 'small',
    title: 'Social Pocket',
    description: 'Charity directory platform for Wild and Kind (Glasgow). Built in a 5-person team with full-stack role across Hono, HTMX, Cloudflare, and Tailwind.',
    impact: 'Live directory connecting 50+ Glasgow charities with supporters.',
    tags: ['Hono', 'HTMX', 'Cloudflare'],
    gradient: 'from-pink-500/10 to-accent-violet/5',
    accentColor: '#ec4899',
    link: 'https://github.com/ejkennedy',
  },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

const LargeCard = ({ project }: { project: typeof projects[0] }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block rounded-card border border-white/[0.07] bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
  >
    {/* Gradient header */}
    <div class={`relative h-52 bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] flex items-center justify-center overflow-hidden`}>
      <div class="absolute inset-0 grid-bg opacity-50" />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-500"
        style={`background: radial-gradient(circle, ${project.accentColor}66, transparent 70%);`}
      />
      <div class="relative z-10 flex flex-col items-center gap-3 text-center px-8">
        <div
          class="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10"
          style={`background: ${project.accentColor}22;`}
        >
          <div class="w-5 h-5 rounded-sm" style={`background: ${project.accentColor};`} />
        </div>
        <span class="text-xs font-medium text-secondary/60 uppercase tracking-widest">Featured Project</span>
      </div>
    </div>

    <div class="p-7">
      <div class="flex items-start justify-between gap-4 mb-3">
        <h3 class="text-xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-200">{project.title}</h3>
        <span class="text-secondary/50 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1 flex-shrink-0">
          <ArrowIcon />
        </span>
      </div>
      <p class="text-sm text-secondary leading-relaxed mb-3">{project.description}</p>
      <p class="text-sm font-medium mb-5" style={`color: ${project.accentColor};`}>{project.impact}</p>
      <div class="flex flex-wrap gap-2">
        {project.tags.map((tag) => <span class="tag-chip">{tag}</span>)}
      </div>
    </div>
  </a>
)

const MediumCard = ({ project }: { project: typeof projects[0] }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block rounded-card border border-white/[0.07] bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
  >
    <div class={`relative h-32 bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] overflow-hidden`}>
      <div class="absolute inset-0 grid-bg opacity-50" />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
        style={`background: ${project.accentColor};`}
      />
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between gap-3 mb-2">
        <h3 class="text-base font-bold text-primary group-hover:text-accent-blue transition-colors duration-200">{project.title}</h3>
        <span class="text-secondary/50 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5 flex-shrink-0">
          <ArrowIcon />
        </span>
      </div>
      <p class="text-sm text-secondary leading-relaxed mb-4">{project.description}</p>
      <div class="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => <span class="tag-chip">{tag}</span>)}
      </div>
    </div>
  </a>
)

const SmallCard = ({ project }: { project: typeof projects[0] }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    class="group relative block rounded-card-sm border border-white/[0.07] bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-card-hover"
  >
    <div class="flex items-start justify-between gap-3 mb-3">
      <div
        class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
        style={`background: ${project.accentColor}22; border: 1px solid ${project.accentColor}33;`}
      >
        <div class="w-3 h-3 rounded-sm" style={`background: ${project.accentColor};`} />
      </div>
      <span class="text-secondary/40 group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0">
        <ArrowIcon />
      </span>
    </div>
    <h3 class="text-sm font-bold text-primary group-hover:text-accent-blue transition-colors duration-200 mb-1.5">{project.title}</h3>
    <p class="text-xs text-secondary leading-relaxed mb-3">{project.impact}</p>
    <div class="flex flex-wrap gap-1.5">
      {project.tags.slice(0, 2).map((tag) => <span class="tag-chip">{tag}</span>)}
    </div>
  </a>
)

export const Work = () => {
  const [featured, ...rest] = projects
  const medium = rest.filter((p) => p.size === 'medium')
  const small  = rest.filter((p) => p.size === 'small')

  return (
    <section id="work" class="py-32 px-8 lg:px-12 border-t border-white/[0.05]">
      <div class="max-w-[1280px] mx-auto">

        <div class="reveal mb-14">
          <p class="section-eyebrow mb-3">Featured Work</p>
          <h2 class="section-heading max-w-lg">Selected projects and experiments</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div class="reveal lg:col-span-2">
            <LargeCard project={featured} />
          </div>

          <div class="flex flex-col gap-5">
            {medium.map((p) => (
              <div class="reveal"><MediumCard project={p} /></div>
            ))}
          </div>

          {small.map((p) => (
            <div class="reveal"><SmallCard project={p} /></div>
          ))}

        </div>

        <div class="reveal mt-10 flex justify-center">
          <a
            href="https://github.com/ejkennedy"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
