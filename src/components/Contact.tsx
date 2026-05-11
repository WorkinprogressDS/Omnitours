"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", type:"", message:"" });
  const [sent, setSent] = useState(false);
  const input = { width:"100%", background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:8, padding:"11px 14px", color:"var(--text)", fontSize:14, fontFamily:"var(--font-body)", outline:"none", transition:"border-color 0.2s" };
  const label = { display:"block", fontSize:12, color:"var(--text2)", marginBottom:6, fontFamily:"var(--font-mono)", letterSpacing:0.3 } as React.CSSProperties;
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => e.target.style.borderColor="var(--accent)";
  const blur = (e: React.FocusEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => e.target.style.borderColor="var(--border)";
  return (
    <section id="contact" className="section" style={{ position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", bottom:-100, right:-100, width:500, height:500, background:"radial-gradient(circle,rgba(79,126,255,0.06) 0%,transparent 70%)", pointerEvents:"none" }} />
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }} className="contact-grid">
          <div>
            <div className="section-label">Book a demo</div>
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(28px,4vw,44px)", fontWeight:700, letterSpacing:"-0.8px", lineHeight:1.1, marginBottom:20 }}>
              Let&apos;s show you <span className="text-gradient">what&apos;s possible</span>
            </h2>
            <p style={{ color:"var(--text2)", fontSize:15, lineHeight:1.7, marginBottom:40 }}>
              Tell us about your property or portfolio and we&apos;ll put together a tailored demo. No commitment required.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { title:"30-minute video call", body:"We'll walk you through a live OmniTour and answer every question." },
                { title:"Sample splat for your area", body:"We'll share a comparable property tour from our demo library." },
                { title:"Custom quote within 24 hours", body:"Transparent pricing based on your property type and volume." },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <div style={{ width:32, height:32, borderRadius:8, flexShrink:0, background:"var(--accent-soft)", border:"1px solid rgba(79,126,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"var(--accent2)", fontFamily:"var(--font-mono)" }}>{i+1}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>{item.title}</div>
                    <div style={{ fontSize:13, color:"var(--text2)" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding:"32px 28px" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"40px 0" }}>
                <div style={{ fontSize:40, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"var(--font-display)", fontSize:20, fontWeight:700, marginBottom:10 }}>We&apos;ll be in touch shortly</h3>
                <p style={{ fontSize:14, color:"var(--text2)" }}>Expect a message within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div>
                    <label style={label}>Your name</label>
                    <input required style={input} placeholder="Dan Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={label}>Email address</label>
                    <input required type="email" style={input} placeholder="you@agency.co.uk" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label style={label}>Company / agency name</label>
                  <input style={input} placeholder="Whitfield & Co" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={label}>I am a...</label>
                  <select required style={{...input,cursor:"pointer"}} value={form.type} onChange={e=>setForm({...form,type:e.target.value})} onFocus={focus} onBlur={blur}>
                    <option value="">Select type</option>
                    <option>Independent estate agent</option>
                    <option>Property developer</option>
                    <option>Airbnb / short-let host</option>
                    <option>HMO / commercial landlord</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={label}>Tell us about your property (optional)</label>
                  <textarea style={{...input,resize:"vertical",minHeight:80}} placeholder="e.g. 3-bed flat in Manchester, looking to attract Hong Kong investors..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent:"center", fontSize:14, padding:"13px" }}>
                  Book my free demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <p style={{ fontSize:11, color:"var(--text3)", textAlign:"center", fontFamily:"var(--font-mono)" }}>No commitment. No spam. Reply within 24 hours guaranteed.</p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
