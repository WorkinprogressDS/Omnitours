"use client";
export default function Testimonials() {
  const testimonials = [
    { quote:"We listed a Canary Wharf flat with an OmniTour embed. Within 72 hours we had three serious enquiries from Singapore — none of whom would have booked a viewing trip.", name:"James Whitfield", role:"Director, Whitfield & Co Estate Agents", location:"London E14", initials:"JW" },
    { quote:"Our show home in Manchester sold 4 units off-plan to Hong Kong buyers who toured via OmniTour. The ROI compared to flying them over was extraordinary.", name:"Sarah Chen", role:"Sales Director, Apex Residential Developments", location:"Manchester", initials:"SC" },
    { quote:"My Airbnb in Edinburgh went from 65% to 89% occupancy after I added the 3D tour. International guests say it's the reason they booked over competitors.", name:"Rory MacAllister", role:"Short-let host", location:"Edinburgh", initials:"RM" },
  ];
  return (
    <section style={{ padding:"96px 0", background:"var(--bg2)" }}>
      <div className="container">
        <div style={{ marginBottom:56, textAlign:"center" }}>
          <div className="section-label" style={{ justifyContent:"center" }}>Social proof</div>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(26px,3.5vw,40px)", fontWeight:700, letterSpacing:"-0.5px" }}>What our clients say</h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
          {testimonials.map((t,i) => (
            <div key={i} className="card" style={{ padding:"28px 24px" }}>
              <div style={{ display:"flex", gap:3, marginBottom:20 }}>
                {Array(5).fill(0).map((_,j) => <span key={j} style={{ color:"var(--amber)", fontSize:14 }}>★</span>)}
              </div>
              <p style={{ fontSize:14, color:"var(--text)", lineHeight:1.7, marginBottom:24, fontStyle:"italic", borderLeft:"2px solid var(--accent)", paddingLeft:16 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{
                  width:40, height:40, borderRadius:"50%", background:"var(--accent-soft)",
                  border:"1px solid rgba(79,126,255,0.3)", display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"var(--font-display)", fontSize:13, fontWeight:700, color:"var(--accent2)", flexShrink:0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600 }}>{t.name}</div>
                  <div style={{ fontSize:11, color:"var(--text2)", fontFamily:"var(--font-mono)" }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
