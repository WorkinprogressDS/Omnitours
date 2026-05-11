"use client";
import { useEffect, useRef } from "react";

export default function SplatCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let t = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const colors: [number,number,number][] = [
      [79,126,255],[123,163,255],[147,197,253],[30,64,175],[99,102,241],[167,139,250],[34,212,122],[16,185,129],
    ];
    const particles = Array.from({ length: 800 }, () => ({
      ox: Math.random(), oy: Math.random(),
      r: Math.random() * 3 + 0.5,
      a: Math.random() * Math.PI * 2,
      spd: Math.random() * 0.008 + 0.002,
      amp: Math.random() * 0.04 + 0.01,
      col: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.15,
    }));
    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      t += 0.006;
      particles.forEach(p => {
        const x = (p.ox + Math.sin(p.a + t * p.spd * 10) * p.amp) * W;
        const y = (p.oy + Math.cos(p.a + t * p.spd * 8) * p.amp * 0.6) * H;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        const [r,g,b] = p.col;
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.85 }} />;
}
