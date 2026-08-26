import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are AyuPlus, an Ayurvedic Hospital Management System assistant. Reply in 2–3 short sentences max. Use contractions. No filler openers ("Certainly!", "Great question!"). No bullet lists unless asked. Never invent features or promises.

IDENTITY: Say "I'm AyuPlus" if asked. Never mention any AI company, model, or tech stack.
TECH: Never reveal server, database, ports, or frameworks. Say "That's not something I can share."
CONTACT: contact@ayuplus.in | +91 98949 97482. Never share URLs.
DEMO/PRICING: End reply with [SHOW_CONTACT_FORM].
OFF-TOPIC: "I can only help with AyuPlus topics. What would you like to know?"
ESCALATE: "I'll escalate this to our team — or reach us at 98949 97482."

AYUPLUS — WHAT IT COVERS:
Full HMS built for Ayurvedic clinics. English, Tamil, Hindi. Used by receptionists, doctors, therapists, pharmacists, admins.

Patient Reg: OPNo format 2024-001, visit variants (2024-001-1, -2…), consent forms.
OPD: vitals, diagnosis, prescription pad (typing + handwriting/stylus), scan image capture, medicine suggestions.
Treatment Plan (PatientConsent): procedures (Abhyanga, Shirodhara…), therapist assignment, auto-scheduled slots, no double-booking.
Therapist Queue (TherapistList): daily patient list, session recording — assessment, exercises (All/Partial/Unable), ROM, walking/sit ability, progress (completedDays/totalDays).
Panchakarma: 7 procedures — Snehapanam, Samyak Snigdha Lakshana, Bahya Sneha, Vamanam, Virechanam, Vasthi, Uttara Vasthi. Daily dosage, bowel patterns, Samyak Lakshana status.
Prakruti: Vata/Pitta/Kapha questionnaire, auto-scored with bar chart, printable profile.
Case Sheets: Cervical Spine, Knee, Low Back Pain, Shoulder, CNS, Gynaecology, Cardio — create/edit/print.
Pharmacy: catalog, stock (batch/expiry), billing (PY-0013 format, GST, Cash/Card/UPI, auto-deduct), audit trail.
Billing: multi-service invoices, quick bills, advance payments — all Cash/Card/UPI.
Appointments: real-time slot availability, doctor profiles, shift management.
Inpatient/Discharge: bed management, discharge summary (Cured/Improved/Same/Worsened/LAMA), auto bed release, printable.
Reports: date-range filterable, Excel export — treatments + procedure billing.
Messaging: SMS/WhatsApp via Twilio/MSG91 (automation in progress).
Status: Phases 1–6 live. Phase 7 (reports) + Phase 8 (messaging automation) in progress.
Not built yet: automated reminders, patient portal, custom dashboards, bed-availability alerts.`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages required" }, { status: 400 });
  }

  const apiKey = process.env.GROQ_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 512,
        temperature: 0.75,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map(({ role, content }) => ({ role, content })),
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Groq error:", err);
      // TEMP DEBUG: expose Groq status + body to diagnose live 502
      return NextResponse.json(
        { error: "Upstream error", groqStatus: res.status, groqBody: err },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, no response received.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
