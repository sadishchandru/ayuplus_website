import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, hospital, city, hospitalSize, interest, message } = body;

  if (!name || !phone || !email || !hospital || !city || !hospitalSize || !interest) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lead = {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    name,
    phone,
    email,
    hospital,
    city,
    hospitalSize,
    interest,
    message: message || "",
  };

  // Save lead to data/leads.json
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
    const leadsFile = path.join(dataDir, "leads.json");
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      try { leads = JSON.parse(fs.readFileSync(leadsFile, "utf8")); } catch { leads = []; }
    }
    leads.push(lead);
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf8");
    console.log("Lead saved:", name, email);
  } catch (err) {
    console.error("Failed to save lead:", err.message);
  }

  const resend = new Resend(process.env.RESEND_KEY);
  const adminEmail = process.env.LEADS_EMAIL || "contact@ayuplus.in";
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // ── 1. Admin notification email ──────────────────────────────────────────
  try {
    const { data, error } = await resend.emails.send({
      from: "Ayuplus Leads <noreply@ayuplus.in>",
      to: adminEmail,
      subject: `New Demo Request — ${name} | ${hospital}, ${city}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background:#00A63E;padding:28px 32px;">
            <h1 style="color:white;margin:0;font-size:20px;font-weight:700;">🌿 New Demo Request</h1>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:13px;">Submitted on ${submittedAt} IST</p>
          </div>
          <div style="padding:28px 32px;background:#f9fafb;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:10px 0;color:#6b7280;width:130px;vertical-align:top;font-weight:600;">Name</td><td style="padding:10px 0;color:#111827;font-weight:700;">${name}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Phone</td><td style="padding:10px 0;color:#111827;">${phone}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#00A63E;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Hospital</td><td style="padding:10px 0;color:#111827;">${hospital}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">City</td><td style="padding:10px 0;color:#111827;">${city}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Hospital Size</td><td style="padding:10px 0;color:#111827;">${hospitalSize}</td></tr>
              <tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Interest</td><td style="padding:10px 0;color:#111827;">${interest}</td></tr>
              ${message ? `<tr><td style="padding:10px 0;color:#6b7280;vertical-align:top;font-weight:600;">Message</td><td style="padding:10px 0;color:#111827;">${message}</td></tr>` : ""}
            </table>
          </div>
          <div style="padding:16px 32px;background:#fff;border-top:1px solid #e5e7eb;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;padding:10px 24px;background:#00A63E;color:white;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });
    if (error) console.error("Admin email error:", JSON.stringify(error));
    else console.log("Admin email sent →", adminEmail, "| id:", data?.id);
  } catch (err) {
    console.error("Admin email failed:", err.message);
  }

  // ── 2. User confirmation email ───────────────────────────────────────────
  try {
    const { data, error } = await resend.emails.send({
      from: "Ayuplus Team <noreply@ayuplus.in>",
      to: email,
      subject: "We received your demo request — Ayuplus",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background:#00A63E;padding:28px 32px;text-align:center;">
            <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">Thank you, ${name}!</h1>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:14px;">We've received your demo request for <strong>${hospital}</strong>.</p>
          </div>
          <div style="padding:32px;background:#fff;">
            <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 20px;">Our team will review your request and reach out within <strong>24 hours</strong> to schedule your personalized demo.</p>
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:20px 24px;margin:0 0 24px;">
              <p style="color:#166534;font-size:13px;font-weight:700;margin:0 0 12px;">What happens next:</p>
              <ol style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
                <li>Our team reviews your request</li>
                <li>We call you to schedule a 60-min live demo</li>
                <li>Personalized walkthrough for <strong>${hospital}</strong></li>
                <li>Custom proposal based on your needs</li>
              </ol>
            </div>
            <p style="color:#6b7280;font-size:13px;margin:0;">Need immediate help? Reach us at <a href="mailto:contact@ayuplus.in" style="color:#00A63E;">contact@ayuplus.in</a> or call <a href="tel:+919894997482" style="color:#00A63E;">+91 98949 97482</a></p>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="color:#9ca3af;font-size:12px;margin:0;">© 2026 Gleaming Software · Ayuplus Hospital Management System</p>
          </div>
        </div>
      `,
    });
    if (error) console.error("User email error:", JSON.stringify(error));
    else console.log("User confirmation sent →", email, "| id:", data?.id);
  } catch (err) {
    console.error("User email failed:", err.message);
  }

  return NextResponse.json({ success: true });
}
