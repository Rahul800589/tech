import React from "react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
}> = ({ title, desc }) => (
  <div className="bg-[#0b2a36] border border-[#184151] p-6 rounded-2xl hover:shadow-xl transition">
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-sm leading-relaxed text-gray-300">{desc}</p>
  </div>
);

// export default function SaaSAnalyticsDashboard(): JSX.Element {
export default function SaaSAnalyticsDashboard() {
  return (
    <main className="bg-gradient-to-b from-[#05121b] to-[#0d2835] min-h-screen text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div>
            <p className="text-sm px-3 py-1 bg-white/5 rounded-full inline-block text-blue-400">
              SaaS · Case Study
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              SaaS Analytics Dashboard Modernization
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-xl">
              A real-time analytics platform that empowers SaaS businesses with smart insights,
              automated alerts, and predictive growth analysis to improve user retention and revenue.
            </p>

            <div className="grid grid-cols-3 gap-5 max-w-md">
              <div>
                <p className="text-xl font-bold">+120%</p>
                <p className="text-xs text-gray-400">User Retention</p>
              </div>
              <div>
                <p className="text-xl font-bold">2M+</p>
                <p className="text-xs text-gray-400">Daily API Events</p>
              </div>
              <div>
                <p className="text-xl font-bold">99.98%</p>
                <p className="text-xs text-gray-400">Core uptime</p>
              </div>
            </div>

            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg">
              Download Case Study
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
            alt="Analytics dashboard"
            className="rounded-2xl shadow-xl w-full h-96 object-cover"
          />
        </section>

        {/* Overview */}
        <section className="grid gap-8 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 bg-[#0b2530] border border-[#144150] p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              We redesigned an aging SaaS dashboard into a modern, modular data experience.
              The updated application integrates real-time analytics, flexible report building, 
              automated trend detection, and data-driven recommendations for enterprise clients.
            </p>
          </div>

          <div className="bg-[#091e28] border border-[#13404c] p-6 rounded-2xl">
            <h4 className="text-xl font-semibold mb-3">Quick Info</h4>
            <p className="text-sm text-gray-300 mb-1">Duration: 6 Months</p>
            <p className="text-sm text-gray-300 mb-1">Team: 8 Devs · 2 BI Engineers</p>
            <p className="text-sm text-gray-300 mb-1">Stack: React · Node.js · Kafka · MongoDB</p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Key Product Highlights</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Real-time Data"
              desc="Sub-second dashboard updates for faster decisions and monitoring."
            />
            <FeatureCard
              title="Preset Templates"
              desc="BI-powered insights for churn, revenue performance, and behavior analytics."
            />
            <FeatureCard
              title="User Funnels"
              desc="Track conversion flows with automated journey optimization insights."
            />
            <FeatureCard
              title="Cohort Analysis"
              desc="Measure lifetime value with precise breakdowns by activity groups."
            />
            <FeatureCard
              title="Predictive Models"
              desc="Machine learning forecasts future behavior and revenue direction."
            />
            <FeatureCard
              title="Custom Alerts"
              desc="Trigger notifications for events like spikes or drops in KPIs."
            />
          </div>
        </section>

        {/* Data Visual Section */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <img
            src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vYmlsZSUyMGJhbmNraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
            alt="Data visualization"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3">Visual-First Insights</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Data becomes meaningful only when it is clearly understood. We built 
              reusable chart modules with interactive drill-downs, dynamic filters, 
              and visual storytelling for enterprise analytics teams.
            </p>
            <ul className="list-disc ml-5 text-gray-400 text-sm leading-relaxed space-y-2">
              <li>Export to PPT, PDF, or CSV</li>
              <li>Multi-tenant data isolation</li>
              <li>Custom theme and access roles</li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "React",
              "Node.js",
              "Kafka",
              "MongoDB",
              "Redis",
              "AWS",
              "GraphQL",
              "Docker",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-1 text-sm rounded-full bg-white/5 text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5">Client Feedback</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-[#0a2330] border border-[#133c48] p-6 rounded-2xl">
              <p className="italic text-gray-300 mb-4">
                "The best analytics upgrade we have ever made. Our product leads 
                love the new cohort insights."
              </p>
              <footer className="text-sm text-gray-400">
                — VP of Product, SaaS Unicorn
              </footer>
            </blockquote>

            <blockquote className="bg-[#0a2330] border border-[#133c48] p-6 rounded-2xl">
              <p className="italic text-gray-300 mb-4">
                "The new dashboard significantly increased adoption of analytics 
                across our org. Easier, faster, smarter."
              </p>
              <footer className="text-sm text-gray-400">
                — Chief Data Officer, Enterprise Tech
              </footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-4">
            <details className="bg-[#09232d] border border-[#133b46] p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">
                Does the dashboard support role-based control?
              </summary>
              <p className="text-gray-300 text-sm mt-1">
                Yes, admins manage permissions by teams, regions, and data zones.
              </p>
            </details>

            <details className="bg-[#09232d] border border-[#133b46] p-4 rounded-lg">
              <summary className="font-medium cursor-pointer">
                Can clients build custom reports?
              </summary>
              <p className="text-gray-300 text-sm mt-1">
                Absolutely. Users can save, share, and export custom dashboards instantly.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#071821] border border-[#133a45] p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to scale data-driven success?
          </h3>
          <p className="text-gray-300 mb-6">
            Partner with us to build actionable analytics tools your customers love.
          </p>
          <button className="bg-blue-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-blue-600">
            Start Your Project
          </button>
        </section>

      </div>
    </main>
  );
}
