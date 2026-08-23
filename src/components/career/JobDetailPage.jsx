import { useState, useEffect } from "react";
import { DEPT_COLORS } from "../../data/careerConstants";
import { Btn } from "./UI";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

const HIRING_PROCESS = [
  "Application review (within 5 days)",
  "Intro call — 30 min",
  "Technical / skills interview — 60 min",
  "Team interviews — 90 min",
  "Offer",
];

/** Fetch the job whose title matches jobTitle (case-insensitive). */
function useJobByTitle(jobTitle) {
  const [job, setJob]         = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    if (!jobTitle) { setLoading(false); return; }
    let cancelled = false;
    setLoading(true);
    setError("");

    fetch(`${API}/api/jobs`)
      .then(res => res.json().then(body => ({ ok: res.ok, body })))
      .then(({ ok, body }) => {
        if (cancelled) return;
        if (!ok) throw new Error(body.error || "Failed to load job.");
        const match = body.find(
          j => j.title.toLowerCase() === jobTitle.toLowerCase()
        );
        setJob(match || null);
      })
      .catch(err => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [jobTitle]);

  return { job, loading, error };
}

export default function JobDetailPage({ jobTitle, onApply, onBack }) {
  const color = jobTitle ? (DEPT_COLORS[jobTitle.dept] || { bg: "#F3F4F6", text: "#555" }) : {};

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#111", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Breadcrumb */}
        <button onClick={onBack} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: 13, color: "#888", marginBottom: 32, padding: 0,
          display: "flex", alignItems: "center", gap: 6,
        }}>← All open roles</button>

        {/* Content */}
        {jobTitle && (
          <>
            {/* Header */}
            <div style={{ marginBottom: 40 }}>
              <span style={{
                display: "inline-block", fontSize: 11, fontWeight: 700,
                padding: "4px 12px", borderRadius: 99, marginBottom: 14,
                background: color.bg, color: color.text,
              }}>{jobTitle.dept}</span>
              <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>
                {jobTitle.title}
              </h1>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: "#888" }}>📍 {jobTitle.location}</span>
                <span style={{ fontSize: 13, color: "#888" }}>🕐 {jobTitle.type}</span>
                <span style={{ fontSize: 13, color: "#888" }}>💰 Competitive + equity</span>
              </div>
            </div>

            <Btn onClick={onApply} variant="blue" style={{ marginBottom: 48 }}>
              Apply for this role →
            </Btn>

            {/* Body */}
            <div style={{ lineHeight: 1.75, fontSize: 15, color: "#333" }}>
              {jobTitle.summary && (
                <p style={{ marginBottom: 32 }}>{jobTitle.summary}</p>
              )}

              {jobTitle.responsibilities?.length > 0 && (
                <>
                  <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>What you'll do</h2>
                  <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
                    {jobTitle.responsibilities.map((r, i) => (
                      <li key={i} style={{ marginBottom: 8, color: "#444" }}>{r}</li>
                    ))}
                  </ul>
                </>
              )}

              {jobTitle.requirements?.length > 0 && (
                <>
                  <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>What we're looking for</h2>
                  <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
                    {jobTitle.requirements.map((r, i) => (
                      <li key={i} style={{ marginBottom: 8, color: "#444" }}>{r}</li>
                    ))}
                  </ul>
                </>
              )}

              {jobTitle.nice_to_have?.length > 0 && (
                <>
                  <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>Nice to have</h2>
                  <ul style={{ paddingLeft: 20, marginBottom: 40 }}>
                    {jobTitle.nice_to_have.map((r, i) => (
                      <li key={i} style={{ marginBottom: 8, color: "#444" }}>{r}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Hiring Process */}
              <div style={{ background: "#F9FAFB", borderRadius: 12, padding: "24px 20px", marginBottom: 40 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Our hiring process</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {HIRING_PROCESS.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: "50%", background: "#111",
                        color: "#fff", fontSize: 11, fontWeight: 700,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>{i + 1}</div>
                      <span style={{ fontSize: 13, color: "#555" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Btn onClick={onApply} variant="blue">Apply for this role →</Btn>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
