"use client";
export default function Stats() {
  return (
    <section style={{ padding:"80px 0", background:"var(--bg3)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40 }}>
          {[
            { val:"8×", label:"Longer average time on listing vs standard photos" },
            { val:"3.2×", label:"More overseas enquiries for OmniTour properties" },
            { val:"48hr", label:"Turnaround from capture to live viewer" },
            { val:"£0", label:"Setup fees — no contracts on one-off packages" },
          ].map((s,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div className="stat-number text-gradient">{s.val}</div>
              <div style={{ fontSize:13, color:"var(--text2)", marginTop:8, lineHeight:1.4, maxWidth:180, margin:"8px auto 0" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
