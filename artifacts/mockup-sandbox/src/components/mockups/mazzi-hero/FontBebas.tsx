import { ArrowRight } from "lucide-react";

const DOT_GRID = {
  backgroundImage: "radial-gradient(circle, rgba(235,37,113,0.09) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export function FontBebas() {
  return (
    <div style={{ background: "#080810", minHeight: "100vh", fontFamily: "Inter, sans-serif", color: "#F5F0EB" }}>
      {/* Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(8,8,16,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "0 48px", height: "60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#EB2571" }}>mazzi</span>
          <span style={{ color: "#F5F0EB", fontWeight: 400 }}>studios</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Services", "Fractional CMO", "AI Automation", "Blog"].map(item => (
            <span key={item} style={{ fontSize: "13px", color: "#94A3B8", cursor: "pointer" }}>{item}</span>
          ))}
          <button style={{
            background: "#EB2571", color: "#fff", border: "none",
            padding: "8px 20px", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
            borderRadius: 0,
          }}>Book a Call</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ ...DOT_GRID, padding: "80px 48px 96px", display: "flex", gap: "64px", alignItems: "flex-start" }}>
        {/* Left */}
        <div style={{ flex: "0 0 58%" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(235,37,113,0.8)", marginBottom: "14px" }}>
            AI-Powered Fractional CMO
          </p>
          <div style={{ width: "100%", height: "1px", background: "rgba(235,37,113,0.25)", marginBottom: "28px" }} />

          {/* BIG Bebas Neue headline */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "108px",
            fontWeight: 400,
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            marginBottom: "32px",
            color: "#F5F0EB",
          }}>
            AI-Powered<br />
            Marketing<br />
            <span style={{ color: "#EB2571" }}>Leadership.</span>
          </h1>

          <p style={{ fontSize: "17px", color: "#94A3B8", lineHeight: 1.65, maxWidth: "480px", marginBottom: "40px" }}>
            Fractional CMO services, AI automation, and growth marketing for healthcare and B2B companies ready to scale.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <button style={{
              background: "#EB2571", color: "#fff", border: "none",
              padding: "14px 32px", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: 0, display: "flex", alignItems: "center", gap: "8px",
            }}>
              Book Your Strategy Call <ArrowRight size={14} />
            </button>
            <button style={{
              background: "transparent", color: "#EB2571",
              border: "1px solid rgba(235,37,113,0.35)",
              padding: "14px 32px", fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
              borderRadius: 0,
            }}>
              See Our Services
            </button>
          </div>
        </div>

        {/* Right — availability card */}
        <div style={{
          flex: 1,
          background: "#0F0F1C",
          border: "1px solid rgba(235,37,113,0.2)",
          padding: "28px",
          marginTop: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{
              display: "inline-block", width: "8px", height: "8px",
              borderRadius: "50%", background: "#22C55E",
              boxShadow: "0 0 6px #22C55E", animation: "pulse 2s infinite",
            }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8" }}>Accepting 2 clients — Q3 2026</span>
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", marginBottom: "20px" }} />
          {[
            ["Fractional CMO", "$7,500/mo"],
            ["AI Automation", "$5,000+"],
            ["Growth Marketing", "$1,500/mo"],
          ].map(([service, price]) => (
            <div key={service} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ fontSize: "13px", color: "#F5F0EB" }}>{service}</span>
              <span style={{ fontSize: "13px", color: "#EB2571", fontWeight: 600 }}>{price}</span>
            </div>
          ))}
          <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "6px", color: "#2AC4EA", fontSize: "13px", cursor: "pointer" }}>
            Next strategy session <ArrowRight size={13} />
          </div>
        </div>
      </section>

      {/* Font label */}
      <div style={{ background: "#EB2571", padding: "12px 48px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        Option A — Bebas Neue · Condensed · Impactful
      </div>
    </div>
  );
}
