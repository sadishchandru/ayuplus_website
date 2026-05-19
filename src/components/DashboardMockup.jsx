"use client";
import Image from "next/image";

export default function DashboardMockup({
  src = "/images/Dashboard_v1.png",
  alt = "AyuPlus Hospital Dashboard",
  urlBar = "app.ayuplus.in",
  badge = "Live Preview",
  height = 420,
}) {
  return (
    <div style={{ position: "relative", width: "100%", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))" }}>

      {/* Browser chrome */}
      <div style={{
        background: "#1e1e1e",
        borderRadius: "12px 12px 0 0",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "inline-block", flexShrink: 0 }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "inline-block", flexShrink: 0 }} />
        <div className="mockup-url-bar" style={{
          flex: 1, background: "#2d2d2d", borderRadius: "6px",
          padding: "4px 12px", marginLeft: "8px", fontSize: "12px",
          color: "#888", display: "flex", alignItems: "center", gap: "6px",
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#888" style={{ flexShrink: 0 }}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
          {urlBar}
        </div>
      </div>

      {/* Screenshot container */}
      <div
        className="mockup-height"
        style={{
          position: "relative",
          overflow: "hidden",
          height: `${height}px`,
          borderRadius: "0 0 12px 12px",
          border: "1px solid #e0e0e0",
          borderTop: "none",
          background: "#f8f8f8",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            objectPosition: "top",
          }}
          priority
        />

        {/* Bottom fade gradient */}
        <div
          className="mockup-fade"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.75) 55%, #ffffff 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating badge */}
        {badge && (
          <div style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#00A63E",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 600,
            padding: "8px 20px",
            borderRadius: "50px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,166,62,0.35)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}>
            <span style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#fff",
              display: "inline-block",
              animation: "ayuPulse 1.8s infinite",
              flexShrink: 0,
            }} />
            {badge}
          </div>
        )}
      </div>

      <style>{`
        @keyframes ayuPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @media (max-width: 768px) {
          .mockup-height { height: 240px !important; }
          .mockup-url-bar { display: none !important; }
          .mockup-fade { height: 90px !important; }
        }
      `}</style>
    </div>
  );
}
