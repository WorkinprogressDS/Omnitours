"use client";
export default function Footer() {
  return (
    <footer style={{ background:"var(--bg2)", borderTop:"1px solid var(--border)", padding:"48px 0 32px" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40, marginBottom:48 }} className="footer-grid">
          <div>
            <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:18, marginBottom:12, color:"var(--text)" }}>
              OmniTour<span style={{ color:"var(--accent)" }}>.ai</span>
            </div>
            <p style={{ fontSize:13, color:"var(--text2)", lineHeight:1.65, maxWidth:260, marginBottom:20 }}>
              Immersive 3D Gaussian Splat property tours for UK estate agents, developers, and short-let hosts.
            </p>
          </div>
          {[
            { heading:"Services", links:["Estate agents","Developers","Airbnb hosts","HMO landlords"] },
            { heading:"Company", links:["How it works","Pricing","Case studies","Book a demo"] },
            { heading:"Legal", links:["Privacy policy","Terms of service","Cookie policy"] },
          ].map(col => (
            <div key={col.heading}>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:1, textTransform:"uppercase", color:"var(--text3)", fontFamily:"var(--font-mono)", marginBottom:16 }}>{col.heading}</div>
              <ul style={{ listStyle:"none" }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom:10 }}>
                    <a href="#" style={{ fontSize:13, color:"var(--text2)", textDecoration:"none" }}
                      onMouseEnter={e=>(e.currentTarget.style.color="var(--text)")}
                      onMouseLeave={e=>(e.currentTarget.style.color="var(--text2)")}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid var(--border)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontSize:12, color:"var(--text3)", fontFamily:"var(--font-mono)" }}>© 2025 OmniTour.ai · Registered in England & Wales</p>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--green)", animation:"pulse-dot 2s ease-in-out infinite" }} />
            <span style={{ fontSize:12, color:"var(--text3)", fontFamily:"var(--font-mono)" }}>All systems operational</span>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse-dot{0%,100%{opacity:1}50%{opacity:0.4}} @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}} @media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
