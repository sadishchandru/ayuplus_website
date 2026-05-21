"use client";

export default function ClientShowcase() {
  return (
    <section style={{
      background: "white",
      width: "100%",
      padding: "60px 5%",
      borderBottom: "1px solid #e8f0ea",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{
          fontSize: "13px",
          color: "#4a6654",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "32px",
          textAlign: "center",
          width: "100%",
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
        maxWidth: "860px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}>

        {/* Left: logo + hospital info */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flex: "1 1 220px", minWidth: "200px" }}>
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
            <div style={{ marginTop: "14px", display: "inline-flex", alignItems: "center", gap: "6px", background: "#003d1a", color: "#fff", borderRadius: "20px", padding: "5px 12px" }}>
              <span style={{ fontWeight: 700, fontSize: "13px" }}>14,700+</span>
              <span style={{ fontSize: "11px", color: "#86efac" }}>patient records</span>
            </div>
          </div>
        </div>

        {/* Right: testimonial quote */}
        <div style={{
          flex: "1 1 300px",
          minWidth: "260px",
          background: "#fff",
          borderRadius: "14px",
          border: "1px solid #e8f0ea",
          padding: "22px 24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          position: "relative",
        }}>
          {/* Stars */}
          <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
            {[0,1,2,3,4].map((i) => (
              <span key={i} style={{ color: "#00A63E", fontSize: "14px", lineHeight: 1 }}>★</span>
            ))}
          </div>

          {/* Quote paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              Panchakarma records on paper — day-wise Snehapana, Vamanam, Vasthi — all handwritten. At follow-up, we were often reconstructing from memory. That&apos;s not how a serious practice should run.
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              With Varma and Shalyatantra alongside OPD, our workflows are more layered than a general clinic. AyuPlus was the first system that understood that — Prakruti, Asta Sthana Pariksha, Dosha evaluation all live inside the patient record where they belong. Vaidya Mode lets me complete the full consultation without depending on the front desk.
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              Billing gaps are gone. Panchakarma sessions now tie directly to invoices. We&apos;ve crossed 14,700+ patient records and the team onboarded us in Tamil with no friction.
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.7, color: "#003d1a", fontWeight: 700, margin: 0 }}>
              For any Ayurvedic hospital serious about clinical documentation — this is it.
            </p>
          </div>

          {/* Attribution */}
          <div style={{ borderTop: "1px solid #e8f0ea", paddingTop: "12px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#101828", margin: 0 }}>
              — Dr. N. Jeeva Anand, BAMS
            </p>
            <p style={{ fontSize: "11px", color: "#00A63E", fontWeight: 600, marginTop: "2px" }}>
              Hari Ashtanga Ayurveda Chikitsalaya
            </p>
          </div>
        </div>

      </div>

      <p style={{ textAlign: "center", fontSize: "12px", color: "#9ab0a0", marginTop: "20px", fontStyle: "italic" }}>
        Interested in becoming a featured client?{" "}
        <a href="/contact" style={{ color: "#00A63E", fontWeight: 600 }}>Contact us →</a>
      </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .client-showcase-section { padding: 40px 20px !important; }
          .client-card { padding: 20px !important; }
          .client-logo { width: 64px !important; height: 64px !important; }
        }
      `}</style>
    </section>
  );
}
