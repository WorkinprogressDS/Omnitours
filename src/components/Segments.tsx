"use client";
export default function Segments() {
  const segments = [
    { icon:"🏠", title:"Independent estate agents", body:"Stand out on Rightmove and Zoopla with immersive 3D listings that hold attention 8× longer. Book fewer wasted viewings and close faster.", benefits:["Embed in any listing","Mobile-ready viewer","Shared embed code"], price:"From £149 per property", badge:"Most popular", badgeColor:"tag-blue", featured:true },
    { icon:"🏗️", title:"Property developers", body:"Sell off-plan and pre-completion to overseas investors. A splat of your show home closes deals before a single flight is booked.", benefits:["Show home capture","Off-plan renders","Investor portal ready"], price:"From £499 per development", badge:"Highest ROI", badgeColor:"tag-green", featured:false },
    { icon:"🛋️", title:"Airbnb & short-let hosts", body:"Boost booking rates with a 3D walkthrough that builds trust instantly. International guests book with confidence when they can tour remotely.", benefits:["Listing-ready link","Annual refresh option","Multi-unit packages"], price:"From £99 per property", badge:"Fastest growing", badgeColor:"tag-amber", featured:false },
    { icon:"🏢", title:"HMO & commercial landlords", body:"Reduce void periods with remote tours for every room. Tenants and buyers anywhere in the world can make decisions before visiting.", benefits:["Room-by-room tours","Portfolio pricing","Commercial ready"], price:"From £299 per property", badge:"Untapped", badgeColor:"tag-gray", featured:false },
  ];
  return (
    <section id="for-agents" style={{ padding:"96px 0", background:"var(--bg2)" }}>
      <div className="container">
        <div style={{ marginBottom:64, display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:24 }}>
          <div>
            <div className="section-label">Who we work with</div>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,44px)", fontWeight:700, letterSpacing:"-0.8px", lineHeight:1.1 }}>
              Built for every part of <span className="text-gradient">UK property</span>
            </h2>
          </div>
          <a href="#contact" className="btn btn-outline">Get a quote →</a>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
          {segments.map((seg,i) => (
            <div key={i} style={{
              background: seg.featured ? "linear-gradient(135deg,rgba(79,126,255,0.08),rgba(79,126,255,0.02))" : "var(--bg3)",
              border:`1px solid ${seg.featured ? "rgba(79,126,255,0.3)" : "var(--border)"}`,
              borderRadius:16, padding:"28px 24px", transition:"transform 0.2s",
            }}
              onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-3px)")}
              onMouseLeave={e=>(e.currentTarget.style.transform="translateY(0)")}
            >
              <div style={{ fontSize:28, marginBottom:16 }}>{seg.icon}</div>
              <div className={`tag ${seg.badgeColor}`} style={{ marginBottom:14 }}>{seg.badge}</div>
              <h3 style={{ fontFamily:"var(--font-display)", fontSize:17, fontWeight:600, marginBottom:10, lineHeight:1.2 }}>{seg.title}</h3>
              <p style={{ fontSize:13, color:"var(--text2)", lineHeight:1.65, marginBottom:20 }}>{seg.body}</p>
              <ul style={{ listStyle:"none", marginBottom:24 }}>
                {seg.benefits.map((b,j) => (
                  <li key={j} style={{ fontSize:12, color:"var(--text2)", marginBottom:6, display:"flex", alignItems:"center", gap:8, fontFamily:"var(--font-mono)" }}>
                    <span style={{ color:"var(--green)", fontSize:14 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <div style={{ fontSize:13, fontWeight:600, color:seg.featured?"var(--accent2)":"var(--text2)", borderTop:"1px solid var(--border)", paddingTop:16 }}>
                {seg.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
