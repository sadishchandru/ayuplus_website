"use client";

const OPD_PATIENTS = [
  { id: "OPD1001", name: "Devi Sridhar" },
  { id: "OPD1002", name: "Fatima Rehmat" },
  { id: "OPD1003", name: "Arokiyasamy" },
  { id: "OPD1004", name: "Kathirvelan" },
];

export default function ClientShowcase() {
  return (
    <section style={{
      background: "white",
      padding: "60px 5%",
      borderBottom: "1px solid #e8f0ea",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <p style={{
        fontSize: "12px",
        color: "#4a6654",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: "40px",
        textAlign: "center",
      }}>
        Trusted by Ayurvedic hospitals across India
      </p>

      <div style={{
        border: "1px solid #c8e6d0",
        borderRadius: "20px",
        padding: "32px 36px",
        background: "#f7faf8",
        display: "flex",
        alignItems: "flex-start",
        gap: "32px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "820px",
        margin: "0 auto",
        width: "100%",
      }}>

        {/* Left: logo + info */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flex: "1 1 260px", minWidth: "220px" }}>
          <img
            src="/images/hari_logo.png"
            alt="Hari Ashtanga Ayurveda Chikitsalaya logo"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
              borderRadius: "50%",
              border: "2px solid #e0ede4",
              flexShrink: 0,
            }}
          />
          <div>
            <p style={{
              fontSize: "11px",
              color: "#00A63E",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}>Featured Client</p>
            <h3 style={{
              fontSize: "17px",
              fontWeight: 800,
              color: "#003d1a",
              lineHeight: 1.3,
              marginBottom: "6px",
            }}>
              Hari Ashtanga Ayurveda Chikitsalaya
            </h3>
            <p style={{ fontSize: "12px", color: "#4a6654", marginBottom: "4px", fontWeight: 500 }}>
              Speciality Centre for Ayurveda, Panchakarma, Shalyatantra, Varma &amp; Yoga
            </p>
            <p style={{ fontSize: "11px", color: "#6a8e74", marginBottom: "10px" }}>
              Dr. N. Jeeva Anand — BAMS., PGDIP, ACU., M.Sc (Varmam &amp; Thokkanam Science) · Reg. No. 379
            </p>
            <p style={{ fontSize: "12px", color: "#3a6b48", fontWeight: 600 }}>
              📍 Moolakulam, Puducherry
            </p>
          </div>
        </div>

        {/* Right: OPD patient list mini-preview */}
        <div style={{
          flex: "1 1 260px",
          minWidth: "240px",
          background: "#fff",
          borderRadius: "14px",
          border: "1px solid #e8f0ea",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          {/* Header */}
          <div style={{ padding: "14px 18px 10px", borderBottom: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#101828", margin: 0 }}>OPD Patient List</p>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "2px 0 0" }}>Today&apos;s registrations</p>
              </div>
              <span style={{
                background: "#00A63E",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: "6px",
              }}>Add Patient</span>
            </div>
          </div>

          {/* Table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr 80px",
            padding: "8px 18px",
            borderBottom: "1px solid #f5f5f5",
            background: "#fafafa",
          }}>
            {["Patient ID", "Name", "Status"].map((h) => (
              <span key={h} style={{ fontSize: "11px", fontWeight: 600, color: "#9CA3AF" }}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          {OPD_PATIENTS.map((p, i) => (
            <div key={p.id} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr 80px",
              padding: "10px 18px",
              alignItems: "center",
              borderBottom: i < OPD_PATIENTS.length - 1 ? "1px solid #f5f5f5" : "none",
              background: "#fff",
            }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#101828" }}>{p.id}</span>
              <span style={{ fontSize: "12px", color: "#374151" }}>{p.name}</span>
              <span style={{
                display: "inline-block",
                fontSize: "10px",
                fontWeight: 600,
                color: "#00A63E",
                background: "#f0faf4",
                border: "1px solid #bbf7d0",
                padding: "3px 8px",
                borderRadius: "6px",
                whiteSpace: "nowrap",
              }}>Consulted</span>
            </div>
          ))}
        </div>

      </div>

      <p style={{ textAlign: "center", fontSize: "12px", color: "#9ab0a0", marginTop: "20px", fontStyle: "italic" }}>
        Interested in becoming a featured client?{" "}
        <a href="/contact" style={{ color: "#00A63E", fontWeight: 600 }}>Contact us →</a>
      </p>
    </section>
  );
}
