"use client";
import SplatCanvas from "./SplatCanvas";

export default function Hero() {
  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }} className="grid-bg">
      <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:800, height:500,
        background:"radial-gradient(ellipse,rgba(79,126,255,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", inset:0 }}><SplatCanvas /></div>
      <div style={{ position:"absolute", left:0, right:0, height:1,
        background:"linear-gradient(90deg,transparent,rgba(79,126,255,0.4),transparent)",
        animation:"scanline 6s linear infinite", pointerEvents:"none" }} />
      <div className="container" style={{ position:"relative", zIndex:10, paddingTop:80, paddingBottom:80 }}>
        <div style={{ maxWidth:760 }}>
          <div className="animate-fade-in-up anim-d1" style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"var(--accent-soft)", border:"1px solid rgba(79,126,255,0.2)",
            borderRadius:20, padding:"5px 14px", marginBottom:28,
          }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--green)", display:"inline-block", animation:"pulse-dot 2s ease-in-out infinite" }} />
            <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--accent2)", letterSpacing:1 }}>
              NOW LIVE — GAUSSIAN SPLAT TOURS FOR UK PROPERTY
            </span>
          </div>
          <h1 className="animate-fade-in-up anim-d2" style={{
            fontFamily:"var(--font-display)", fontSize:"clamp(40px,6vw,72px)", fontWeight:800,
            lineHeight:1.05, letterSpacing:"-1.5px", marginBottom:24,
          }}>
            <span className="text-gradient">Every room.</span><br />
            <span style={{ color:"var(--text)" }}>Every detail.</span><br />
            <span style={{ color:"var(--text2)", fontWeight:400, fontSize:"clamp(32px,5vw,60px)" }}>Sold before they land.</span>
          </h1>
          <p className="animate-fade-in-up anim-d3" style={{
            fontSize:"clamp(16px,2vw,19px)", color:"var(--text2)", lineHeight:1.65,
            maxWidth:560, marginBottom:40, fontWeight:300,
          }}>
            OmniTour.ai creates immersive 3D Gaussian Splat walkthroughs of UK properties —
            letting overseas buyers, investors, and tenants experience every room before booking a single flight.
          </p>
          <div className="animate-fade-in-up anim-d4" style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:56 }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize:15, padding:"13px 28px" }}>
              Book a free demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#how-it-works" className="btn btn-outline" style={{ fontSize:15, padding:"13px 28px" }}>See how it works</a>
          </div>
          <div className="animate-fade-in-up anim-d5" style={{ display:"flex", gap:32, flexWrap:"wrap", alignItems:"center" }}>
            {[
              { label:"Properties toured", val:"500+" },
              { label:"Agent partners", val:"40+" },
              { label:"Avg. time on listing", val:"8 min" },
              { label:"Overseas enquiries up", val:"3.2×" },
            ].map((s,i) => (
              <div key={i}>
                <div style={{ fontFamily:"var(--font-display)", fontSize:22, fontWeight:700, color:"var(--text)", lineHeight:1 }}>{s.val}</div>
                <div style={{ fontSize:12, color:"var(--text3)", marginTop:3, fontFamily:"var(--font-mono)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:160,
        background:"linear-gradient(to bottom,transparent,var(--bg))", pointerEvents:"none" }} />
      <style>{`@keyframes scanline{0%{top:-2px}100%{top:100%}} @keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}}`}</style>
    </section>
  );
}
