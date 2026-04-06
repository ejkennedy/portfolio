const steps = [
  {
    label: 'Problem',
    text: 'LLM inference needs vary wildly across models and tenants — routing, rate limiting, cost tracking, and streaming all need to work together at the edge with zero cold starts.',
    icon: '01',
  },
  {
    label: 'Architecture',
    text: 'Three Cloudflare Workers: a gateway handling SSE streams and request IDs, a KV-backed router resolving model policy, and an observability worker writing to Analytics Engine.',
    icon: '02',
  },
  {
    label: 'Stack',
    text: 'TypeScript throughout. Durable Objects for per-user rate limiting and budget state. Workers AI + external provider fallback. JWT auth with JWKS or shared-secret verification.',
    icon: '03',
  },
  {
    label: 'Outcome',
    text: 'Fully validated end-to-end: authenticated chat inference, stable SSE contract, budget-aware model fallback, and near-real-time cost summaries — all running at the edge.',
    icon: '04',
  },
]

const metrics = [
  { value: 'Edge',  label: 'deployment target',  sub: 'Cloudflare Workers — global' },
  { value: '0',     label: 'cold starts',         sub: 'always-on Durable Objects' },
  { value: '3',     label: 'microworkers',         sub: 'gateway · router · observability' },
  { value: 'SSE',   label: 'streaming protocol',  sub: 'normalised gateway events' },
]

export const CaseStudy = () => (
  <section id="case-study" class="py-28 px-8 lg:px-12 border-t border-white/[0.05]">
    <div class="max-w-[1280px] mx-auto">

      <div class="reveal mb-14">
        <p class="section-eyebrow mb-3">Case Study</p>
        <h2 class="section-heading max-w-xl">
          LLM Inference Platform — architecture walkthrough
        </h2>
      </div>

      {/* Process strip */}
      <div class="reveal mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-card overflow-hidden border border-white/[0.07]">
        {steps.map((step) => (
          <div class="bg-surface p-7 flex flex-col gap-4 group hover:bg-surface-alt transition-colors duration-200">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-blue/70">{step.label}</span>
              <span class="text-2xl font-black text-white/[0.06] group-hover:text-white/10 transition-colors">{step.icon}</span>
            </div>
            <p class="text-sm text-secondary leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      {/* Metric blocks */}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div class="reveal card text-center" style={`transition-delay: ${i * 80}ms;`}>
            <div class="text-2xl font-black mb-1 text-gradient">{m.value}</div>
            <div class="text-sm font-semibold text-primary mb-0.5">{m.label}</div>
            <div class="text-xs text-secondary/60">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Terminal mockup */}
      <div class="reveal mt-10 rounded-card border border-white/[0.07] bg-surface overflow-hidden">
        <div class="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div class="w-3 h-3 rounded-full bg-red-500/60" />
          <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div class="w-3 h-3 rounded-full bg-green-500/60" />
          <span class="ml-3 text-[11px] text-secondary/50 font-mono">llm-gateway · workers/gateway</span>
        </div>

        <div class="p-6 font-mono text-[13px] leading-7 overflow-x-auto">
          <p><span class="text-secondary/50">$</span> <span class="text-accent-blue">curl</span> https://gateway.workers.dev/v1/chat \</p>
          <p class="pl-4 text-secondary/70">-H <span class="text-green-400">"Authorization: Bearer $JWT"</span> \</p>
          <p class="pl-4 text-secondary/70">-d <span class="text-green-400">'{`{"messages":[{"role":"user","content":"Explain attention in transformers"}]}`}'</span></p>
          <p class="mt-2 text-secondary/50"># Normalised SSE stream</p>
          <p><span class="text-accent-blue">data:</span> <span class="text-accent-violet">{"{"}</span><span class="text-accent-blue">"event"</span>:<span class="text-green-400">"meta"</span>, <span class="text-accent-blue">"request_id"</span>:<span class="text-green-400">"req-9f3a"</span>, <span class="text-accent-blue">"model"</span>:<span class="text-green-400">"@cf/meta/llama-3-8b"</span><span class="text-accent-violet">{"}"}</span></p>
          <p><span class="text-accent-blue">data:</span> <span class="text-accent-violet">{"{"}</span><span class="text-accent-blue">"event"</span>:<span class="text-green-400">"token"</span>, <span class="text-accent-blue">"text"</span>:<span class="text-green-400">"Attention allows models"</span><span class="text-accent-violet">{"}"}</span></p>
          <p><span class="text-accent-blue">data:</span> <span class="text-accent-violet">{"{"}</span><span class="text-accent-blue">"event"</span>:<span class="text-green-400">"usage"</span>, <span class="text-accent-blue">"tokens"</span>:<span class="text-yellow-400">142</span>, <span class="text-accent-blue">"cost_usd"</span>:<span class="text-yellow-400">0.00021</span><span class="text-accent-violet">{"}"}</span></p>
          <p><span class="text-accent-blue">data:</span> <span class="text-green-400">[DONE]</span></p>
        </div>
      </div>

    </div>
  </section>
)
