const steps = [
  {
    label: 'Problem',
    text: 'High-throughput inference for LLMs is expensive and slow at scale. Naive serving leaves 70%+ GPU utilisation on the table.',
    icon: '01',
  },
  {
    label: 'System Design',
    text: 'Continuous batching + paged attention to saturate GPU memory. Request routing layer distributes across replicas using load-aware scheduling.',
    icon: '02',
  },
  {
    label: 'Stack',
    text: 'vLLM serving engine, Go request router, Redis queue, Prometheus + Grafana for SLO tracking. Deployed on GKE with HPA.',
    icon: '03',
  },
  {
    label: 'Outcome',
    text: 'Sub-50ms p99 latency at 500 req/s. 60% reduction in per-token compute cost. Zero-downtime weight swapping for model updates.',
    icon: '04',
  },
]

const metrics = [
  { value: '50ms', label: 'p99 latency', sub: 'at 500 req/s' },
  { value: '60%', label: 'cost reduction', sub: 'vs. naive serving' },
  { value: '3×', label: 'throughput', sub: 'via continuous batching' },
  { value: '0', label: 'downtime', sub: 'on weight hot-swap' },
]

export const CaseStudy = () => (
  <section id="case-study" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      {/* Header */}
      <div class="reveal mb-14">
        <p class="section-eyebrow mb-3">Case Study</p>
        <h2 class="section-heading max-w-xl">
          LLM Inference Platform — how it was built
        </h2>
      </div>

      {/* Process strip */}
      <div class="reveal mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-card overflow-hidden border border-white/[0.07]">
        {steps.map((step, i) => (
          <div class="bg-surface p-7 flex flex-col gap-4 group hover:bg-surface-alt transition-colors duration-200">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-blue/70">{step.label}</span>
              <span class="text-2xl font-black text-white/[0.06] group-hover:text-white/10 transition-colors">{step.icon}</span>
            </div>
            <p class="text-sm text-secondary leading-relaxed">{step.text}</p>
            {i < steps.length - 1 && (
              <div class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-white/10">
                {/* connector arrow handled by gap-px */}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Metric blocks */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div
            class="reveal card text-center"
            style={`transition-delay: ${i * 80}ms;`}
          >
            <div
              class="text-3xl font-black mb-1 text-gradient"
            >
              {m.value}
            </div>
            <div class="text-sm font-semibold text-primary mb-0.5">{m.label}</div>
            <div class="text-xs text-secondary/60">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Terminal mockup */}
      <div class="reveal mt-10 rounded-card border border-white/[0.07] bg-surface overflow-hidden">
        {/* Window chrome */}
        <div class="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div class="w-3 h-3 rounded-full bg-red-500/60" />
          <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div class="w-3 h-3 rounded-full bg-green-500/60" />
          <span class="ml-3 text-[11px] text-secondary/50 font-mono">inference-server — bash</span>
        </div>

        {/* Terminal content */}
        <div class="p-6 font-mono text-[13px] leading-7 overflow-x-auto">
          <p><span class="text-secondary/50">$</span> <span class="text-accent-blue">curl</span> https://api.inference.local/v1/generate \</p>
          <p class="pl-4 text-secondary/70">-H <span class="text-green-400">"Authorization: Bearer $TOKEN"</span> \</p>
          <p class="pl-4 text-secondary/70">-d <span class="text-green-400">'{`{"model":"llama-3-70b","prompt":"Explain attention","max_tokens":256}`}'</span></p>
          <p class="mt-2 text-secondary/50"># Response</p>
          <p><span class="text-accent-violet">{"{"}</span></p>
          <p class="pl-4"><span class="text-accent-blue">"id"</span>: <span class="text-green-400">"gen-9f3a2b"</span>,</p>
          <p class="pl-4"><span class="text-accent-blue">"model"</span>: <span class="text-green-400">"llama-3-70b"</span>,</p>
          <p class="pl-4"><span class="text-accent-blue">"latency_ms"</span>: <span class="text-yellow-400">42</span>,</p>
          <p class="pl-4"><span class="text-accent-blue">"tokens_per_sec"</span>: <span class="text-yellow-400">318</span>,</p>
          <p class="pl-4"><span class="text-accent-blue">"text"</span>: <span class="text-green-400">"Attention allows models to weigh..."</span></p>
          <p><span class="text-accent-violet">{"}"}</span></p>
        </div>
      </div>

    </div>
  </section>
)
