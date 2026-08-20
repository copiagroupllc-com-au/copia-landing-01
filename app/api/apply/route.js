import { NextResponse } from "next/server";

export const runtime = "nodejs";
// Allow large multipart bodies (CV + photo + video)
export const maxDuration = 30;

export async function POST(request) {
  try {
    const formData = await request.formData();

    // ── Collect text fields ──────────────────────────────────────
    const fields = {};
    const files = {};

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        // Store file metadata — in production replace this block
        // with upload to S3/Cloudinary/Supabase Storage etc.
        files[key] = {
          name: value.name,
          size: value.size,
          type: value.type,
        };
      } else {
        fields[key] = value;
      }
    }

    const role = fields.role || "Unknown Role";
    const applicantName = fields.name || "Applicant";
    const applicantEmail = fields.email || "";

    // ── Build mailto body ────────────────────────────────────────
    // In production: send via Resend / SendGrid / Nodemailer
    // For now we return success and let the client open mailto as fallback
    const subject = encodeURIComponent(`Job Application — ${role} — ${applicantName}`);
    const body = encodeURIComponent([
      `Role: ${role}`,
      ``,
      `── Personal Info ──`,
      `Name: ${fields.name || ""}`,
      `Email: ${fields.email || ""}`,
      `Phone: ${fields.phone || ""}`,
      `Location: ${fields.location || ""}`,
      `LinkedIn: ${fields.linkedin || ""}`,
      `Portfolio: ${fields.portfolio || ""}`,
      ``,
      `── Experience ──`,
      `Current / Last Position: ${fields.position || ""}`,
      `Years of Experience: ${fields.experience || ""}`,
      `Motivation: ${fields.motivation || ""}`,
      `CV File: ${files.cv?.name || "not attached"}`,
      ``,
      `── Final Details ──`,
      `Cover Letter: ${fields.coverLetter || ""}`,
      `Salary Expectation: ${fields.salary || ""}`,
      `Available From: ${fields.startDate || ""}`,
      `Referral Source: ${fields.referral || ""}`,
      `Work Authorization: ${fields.workAuth || ""}`,
      `Video Intro: ${files.video?.name || "not attached"}`,
    ].join("\n"));

    return NextResponse.json({
      ok: true,
      mailto: `mailto:contact@copiagroupllc.com.au?subject=${subject}&body=${body}`,
      applicantEmail,
    });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ ok: false, error: "Submission failed" }, { status: 500 });
  }
}
