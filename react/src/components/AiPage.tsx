import React from "react";

/**
 * ECommerceModernization.tsx
 * Dark / premium theme page for:
 * "E-Commerce Platform Modernization"
 *
 * Requirements satisfied:
 * - Responsive layout (mobile -> desktop)
 * - Rich content sections (overview, features, cards, tech stack, metrics, testimonials, FAQ)
 * - Image URLs included (Unsplash royalty-free)
 * - Tailwind CSS utility classes assumed available
 *
 * Use: import and add route e.g. /ecommerce-modernization
 */

const FeatureCard: React.FC<{ title: string; text: string; icon?: React.ReactNode }> = ({
  title,
  text,
  icon,
}) => {
  return (
    <article className="bg-[#122033] border border-[#1f3a53] rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-orange-400 bg-white/5 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
          {icon ?? <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5"/></svg>}
        </div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
    </article>
  );
};

// export default function ECommerceModernization(): JSX.Element {
export default function ECommerceModernization() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#071026] to-[#0f2233] text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <header className="grid gap-8 lg:grid-cols-2 items-center mb-12">
          <div>
            <p className="inline-block text-sm text-orange-300 font-medium bg-white/5 px-3 py-1 rounded-full mb-4">Case Study · Web Development</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              E-Commerce Platform Modernization
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Modernizing legacy storefronts into scalable, AI-ready e-commerce platforms — faster checkouts, personalized merchandising, resilient infrastructure, and measurable revenue uplift.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-3 rounded-2xl shadow">
                Request Demo
              </button>
              <a href="#features" className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 rounded-2xl text-sm text-gray-200 hover:bg-white/5">
                See Features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">+62%</p>
                <p className="text-xs text-gray-400">Conversion uplift</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">-35%</p>
                <p className="text-xs text-gray-400">Infrastructure cost</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">99.99%</p>
                <p className="text-xs text-gray-400">Availability SLA</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">Real-time</p>
                <p className="text-xs text-gray-400">Analytics & personalization</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop"
              alt="Modern e-commerce design"
              className="w-full h-80 object-cover"
            />
          </div>
        </header>

        {/* Overview & Challenges */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-12">
          <div className="lg:col-span-2 bg-[#0d1b2a] border border-[#1b3245] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We partnered with a top retail brand to modernize their monolithic e-commerce stack. The objective: migrate to a composable, headless architecture, enable AI-driven personalization, and reduce latency for global customers while cutting operational costs.
            </p>

            <h3 className="text-lg font-semibold mb-2">Key challenges</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              <li>Legacy checkout causing poor conversion and cart abandonment.</li>
              <li>Single-region hosting triggering high latency for international markets.</li>
              <li>Limited instrumentation — no real-time insights for merchandising.</li>
              <li>Rigid product catalog and slow release cycles.</li>
            </ul>
          </div>

          <aside className="bg-[#0c1720] border border-[#162a3a] rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-3">Project Snapshot</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div><strong>Duration:</strong> 6 months</div>
              <div><strong>Team:</strong> 14 engineers, 2 data scientists, 1 product manager</div>
              <div><strong>Stack:</strong> React, Node.js, Kubernetes, Redis, Postgres</div>
              <div><strong>Outcome:</strong> 62% conversion uplift within 90 days</div>
            </div>
          </aside>
        </section>

        {/* Features Grid */}
        <section id="features" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Core Capabilities & Modern Features</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Headless Commerce"
              text="Decoupled frontend and APIs for rapid experimentation — replace UX without touching backend commerce rules."
              icon={
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/></svg>
              }
            />
            <FeatureCard
              title="AI Personalization"
              text="Real-time recommendations and personalized catalogs powered by hybrid models (collaborative + content-based) and on-device inference for speed."
              icon={<svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5"/></svg>}
            />
            <FeatureCard
              title="Fast Global CDN + Edge Functions"
              text="Edge-rendered critical paths and cached product pages for sub-200ms TTFB across regions; edge functions for A/B tests and personalization."
            />
            <FeatureCard
              title="Scalable Microservices"
              text="Containerized services with autoscaling, service mesh observability, and circuit breakers to maintain availability during traffic spikes."
            />
            <FeatureCard
              title="Resilient Checkout"
              text="Modular checkout pipeline with idempotent operations, resumable carts, and optimized payment gateway routing to maximize throughput."
            />
            <FeatureCard
              title="Observability & SRE"
              text="Distributed tracing, anomaly detection, SLOs & error budgets with automated rollback and canary promotion for safe deployments."
            />
          </div>
        </section>

        {/* Architecture / Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Architecture Highlights</h2>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-[#0c1720] border border-[#163042] rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">Data & AI Layer</h4>
              <p className="text-gray-300 text-sm mb-4">Centralized event stream, feature store for recommendations, and model training pipelines with MLOps automation.</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>Event bus (Kafka/Kinesis)</li>
                <li>Model registry & CI for ML</li>
                <li>Real-time feature serving</li>
              </ul>
            </div>

            <div className="bg-[#0c1720] border border-[#163042] rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">Platform & Infra</h4>
              <p className="text-gray-300 text-sm mb-4">Kubernetes-backed platform, Terraform infra-as-code, multi-region failover and automated runbooks.</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>Terraform + GitOps</li>
                <li>HPA & Cluster autoscaler</li>
                <li>Blue/green & canary deployments</li>
              </ul>
            </div>

            <div className="bg-[#0c1720] border border-[#163042] rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">Frontend & UX</h4>
              <p className="text-gray-300 text-sm mb-4">React + SSR/edge rendering, accessible components, performance budgets and image optimization pipeline.</p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>Headless CMS for content</li>
                <li>Image CDN & lazy loading</li>
                <li>Core Web Vitals monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual section */}
        <section className="mb-12 grid gap-6 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              alt="dashboard"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Merchandising Dashboard</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A unified dashboard for product performance, promotion experiments, cohort analysis and recommendation tuning. Business users can target segments without engineering support.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-[#091521] p-4 rounded-lg border border-[#123146]">
                <p className="text-xs text-gray-400">Active A/B Tests</p>
                <p className="text-xl font-bold">12</p>
              </div>
              <div className="bg-[#091521] p-4 rounded-lg border border-[#123146]">
                <p className="text-xs text-gray-400">Avg. Order Value</p>
                <p className="text-xl font-bold">$124.50</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "GraphQL", "Postgres", "Redis", "Kubernetes", "Docker", "Terraform", "Kafka", "PyTorch"].map(
              (t) => (
                <span key={t} className="px-3 py-1 bg-white/5 text-sm text-gray-200 rounded-full">
                  {t}
                </span>
              )
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Customer Success</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-[#09151f] p-6 rounded-2xl border border-[#113142]">
              <p className="text-gray-300 italic mb-4">
                "The migration was seamless — performance improved immediately, and our marketing team can now iterate promotions independently. Conversion rates soared."
              </p>
              <p className="text-sm font-medium">— VP Product, Retail Brand</p>
            </div>
            <div className="bg-[#09151f] p-6 rounded-2xl border border-[#113142]">
              <p className="text-gray-300 italic mb-4">
                "Operational overhead dropped significantly after we moved to the new platform. The SRE runbooks and observability saved us hours during peak traffic events."
              </p>
              <p className="text-sm font-medium">— Director of Engineering</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-[#0b1a26] rounded-lg p-4 border border-[#12313f]">
              <summary className="cursor-pointer font-medium">How long does a typical modernization take?</summary>
              <div className="mt-2 text-gray-300 text-sm">
                A typical program (discovery &gt migration &gt validation) spans 4–6 months for a medium-sized retailer. Phased rollouts and parallel workstreams shorten time-to-value.
              </div>
            </details>

            <details className="bg-[#0b1a26] rounded-lg p-4 border border-[#12313f]">
              <summary className="cursor-pointer font-medium">Will user experience be disrupted during migration?</summary>
              <div className="mt-2 text-gray-300 text-sm">
                We use a strangler pattern + canary deployments to minimize disruption. Critical flows are A/B tested at low traffic before full promotion.
              </div>
            </details>

            <details className="bg-[#0b1a26] rounded-lg p-4 border border-[#12313f]">
              <summary className="cursor-pointer font-medium">How do you measure success?</summary>
              <div className="mt-2 text-gray-300 text-sm">
                Success is measured via uplift in conversion, average order value, page load metrics, and operational cost reduction — tracked against pre-defined SLOs.
              </div>
            </details>
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="bg-[#07121b] border border-[#133146] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to modernize your e-commerce platform?</h3>
          <p className="text-gray-300 mb-6">Schedule a free technical assessment and see a tailored roadmap for your business.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-orange-600">Request Assessment</button>
            <a href="/projects" className="px-6 py-3 rounded-full border border-white/10 text-sm text-gray-200 hover:bg-white/5">View More Projects</a>
          </div>
        </footer>

      </div>
    </main>
  );
}
