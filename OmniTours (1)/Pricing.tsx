"use client";
import { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState<"oneoff" | "retainer">("oneoff");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for independent agents wanting to try OmniTour on a single listing.",
      priceOneoff: "£149",
      priceRetainer: "£99/mo",
      priceSubOneoff: "per property",
      priceSubRetainer: "1 property/month",
      features: [
        "Full property capture (up to 5 rooms)",
        "Hosted viewer link",
        "Iframe embed code",
        "Mobile & desktop optimised",
        "48hr turnaround",
        "3 months hosting included",
      ],
      cta: "Get started",
      featured: false,
      tag: null,
    },
    {
      name: "Professional",
      desc: "For active agents and developers listing multiple properties per month.",
      priceOneoff: "£399",
      priceRetainer: "£299/mo",
      priceSubOneoff: "per property (up to 10 rooms)",
      priceSubRetainer: "3 properties/month",
      features: [
        "Full property capture (up to 10 rooms)",
        "Hosted viewer with custom branding",
        "Hotspot annotations",
        "Analytics dashboard",
        "Priority 24hr turnaround",
        "12 months hosting included",
        "OmniTour badge removed",
      ],
      cta: "Most popular — get started",
      featured: true,
      tag: "Most popular",
    },
    {
      name: "Developer",
      desc: "For property developers and larger agents with ongoing pipeline requirements.",
      priceOneoff: "POA",
      priceRetainer: "From £799/mo",
      priceSubOneoff: "bespoke per development",
      priceSubRetainer: "Unlimited properties",
      features: [
        "Unlimited capture sessions",
        "White-label viewer",
        "Client portal access",
        "Overseas buyer viewer app",
        "Mortgage partner integration",
        "Dedicated account manager",
        "SLA guaranteed turnaround",
        "API access (Q3 2025)",
      ],
      cta: "Talk to us",
      featured: false,
      tag: "Enterprise",
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Pricing</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, letterSpacing: "-0.8px",
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Simple, transparent{" "}
            <span className="text-gradient">pricing</span>
          </h2>
          <p style={{ color: "var(--text2)", fontSize: 16, maxWidth: 480, margin: "0 auto 32px" }}>
            No hidden fees. No contracts on one-off captures. Cancel retainers anytime.
          </p>

          {/* Toggle */}
          <div style={{
            display: "inline-flex",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 10, padding: 4, gap: 4,
          }}>
            {(["oneoff", "retainer"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)}
                style={{
                  padding: "7px 20px", borderRadius: 7,
                  fontSize: 13, fontWeight: 500,
                  border: "none", cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  background: billing === b ? "var(--accent)" : "transparent",
                  color: billing === b ? "#fff" : "var(--text2)",
                  transition: "all 0.2s",
                }}>
                {b === "oneoff" ? "One-off" : "Retainer (save 30%)"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.featured ? "linear-gradient(160deg, rgba(79,126,255,0.1), rgba(79,126,255,0.03))" : "var(--bg2)",
              border: `1px solid ${plan.featured ? "rgba(79,126,255,0.4)" : "var(--border)"}`,
              borderRadius: 16, padding: "28px 24px",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}>
              {plan.featured && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                }} />
              )}

              {plan.tag && (
                <div className={`tag ${plan.featured ? "tag-blue" : "tag-gray"}`} style={{ marginBottom: 14, alignSelf: "flex-start" }}>
                  {plan.tag}
                </div>
              )}

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 20, fontWeight: 700, marginBottom: 8,
              }}>{plan.name}</h3>

              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.55, marginBottom: 24 }}>
                {plan.desc}
              </p>

              <div style={{ marginBottom: 24 }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36, fontWeight: 800,
                  color: plan.featured ? "var(--accent2)" : "var(--text)",
                  lineHeight: 1,
                }}>
                  {billing === "oneoff" ? plan.priceOneoff : plan.priceRetainer}
                </div>
                <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                  {billing === "oneoff" ? plan.priceSubOneoff : plan.priceSubRetainer}
                </div>
              </div>

              <ul style={{ listStyle: "none", flex: 1, marginBottom: 28 }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{
                    fontSize: 13, color: "var(--text2)", marginBottom: 8,
                    display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.4,
                  }}>
                    <span style={{ color: "var(--green)", flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={plan.featured ? "btn btn-primary" : "btn btn-outline"}
                style={{ justifyContent: "center", fontSize: 13 }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center", marginTop: 32,
          fontSize: 13, color: "var(--text3)",
          fontFamily: "var(--font-mono)",
        }}>
          All prices ex. VAT · Travel surcharge may apply outside M25 · Hosting included as stated
        </p>
      </div>
    </section>
  );
}
