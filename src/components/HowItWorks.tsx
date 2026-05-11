"use client";
export default function HowItWorks() {
  const steps = [
    { num:"01", title:"We capture your property", body:"Our team visits with specialist 360° scanning equipment. A typical property takes 60–90 minutes to capture fully — every room, hallway, and outdoor space.", tag:"On-site capture", tagColor:"tag-blue" },
    { num:"02", title:"AI processes the splat", body:"Raw scan data is converted into a photorealistic 3D Gaussian Splat — a point-cloud model that lets viewers move freely through space at 60fps, in any browser.", tag:"AI processing", tagColor:"tag-amber" },
    { num:"03", title:"You get an embed link", body:"We deliver a hosted viewer link and an iframe embed code. Drop it into Rightmove, your website, WhatsApp — anywhere. Works on mobile, tablet, and desktop.", tag:"Instant delivery", tagColor:"tag-green" },
    { num:"04", title:"Buyers tour from anywhere", body:"A buyer in Dubai, Singapore, or Hong Kong walks every room at midnight — no flights, no wasted viewings. Hotspot annotations guide them through key features.", tag:"Global reach", tagColor:"tag-blue" },
  ];
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div style={{ marginBottom:64 }}>
          <div className="section-label">The process</div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,44px)", fontWeight:700, letterSpacing:"-0.8px", lineHeight:1.1, maxWidth:520 }}>
            From front door to <span className="text-gradient">global audience</span> in 48 hours
          </h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:24 }}>
          {steps.map((step,i) => (
            <div key={i} className="card" style={{ padding:"28px 24px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-12, right:16, fontFamily:"var(--font-display)", fontSize:80, fontWeight:800, color:"rgba(79,126,255,0.05)", lineHeight:1, userSelect:"none" }}>{step.num}</div>
              <div className={`tag ${step.tagColor}`} style={{ marginBottom:14 }}>{step.tag}</div>
              <h3 style={{ fontFamily:"var(--font-display)", fontSize:18, fontWeight:600, marginBottom:10, lineHeight:1.2 }}>{step.title}</h3>
              <p style={{ fontSize:14, color:"var(--text2)", lineHeight:1.65 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
