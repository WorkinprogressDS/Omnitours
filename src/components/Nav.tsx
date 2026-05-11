"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100, transition:"all 0.3s ease",
      background: scrolled ? "rgba(8,11,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
    }}>
      <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10 }}>
          <div style={{
            width:32, height:32, borderRadius:8,
            background:"linear-gradient(135deg,#4F7EFF,#7BA3FF)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:14, fontWeight:700, color:"#fff", fontFamily:"var(--font-display)",
          }}>O</div>
          <span style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:18, color:"var(--text)", letterSpacing:"-0.3px" }}>
            OmniTour<span style={{ color:"var(--accent)" }}>.ai</span>
          </span>
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:8 }} className="desktop-nav">
          {["How it works","Pricing","For agents"].map((label,i) => (
            <a key={i} href={`#${label.toLowerCase().replace(/ /g,"-")}`} className="btn btn-ghost">{label}</a>
          ))}
          <div style={{ width:1, height:20, background:"var(--border)", margin:"0 4px" }} />
          <a href="#contact" className="btn btn-primary" style={{ fontSize:13, padding:"9px 20px" }}>
            Book a demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display:"none", background:"none", border:"none", cursor:"pointer", color:"var(--text)", padding:8,
        }} className="mobile-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></> : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div style={{ background:"var(--bg2)", borderTop:"1px solid var(--border)", padding:"16px 24px 24px" }}>
          {["How it works","Pricing","For agents"].map((label,i) => (
            <a key={i} href={`#${label.toLowerCase().replace(/ /g,"-")}`} onClick={() => setMenuOpen(false)}
              style={{ display:"block", padding:"12px 0", color:"var(--text2)", textDecoration:"none", fontSize:15, borderBottom:"1px solid var(--border)" }}>
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop:16, width:"100%", justifyContent:"center" }}>Book a demo</a>
        </div>
      )}
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}.mobile-btn{display:block!important}}`}</style>
    </nav>
  );
}
