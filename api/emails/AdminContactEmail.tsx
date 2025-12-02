import React from "react";

interface AdminContactEmailProps {
  senderName: string;
  senderEmail: string;
  message: string;
  timestamp?: string;
}

export const AdminContactEmail = ({
  senderName,
  senderEmail,
  message,
  timestamp = new Date().toLocaleString(),
}: AdminContactEmailProps) => {
  return (
    <div style={{ fontFamily: '"Inter", "-apple-system", "Segoe UI", sans-serif', backgroundColor: "#faf8f3", padding: "20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "24px",
          overflow: "hidden",
          border: "2px solid #1f2937",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>

          <div style={{
            backgroundColor: "#7dd3fc",
            padding: "32px 24px",
            textAlign: "center",
            borderBottom: "2px solid #1f2937"
          }}>
            <h1 style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
            }}>
              📨 New Contact Message
            </h1>
          </div>

          <div style={{ padding: "32px 24px" }}>

            <div style={{
              backgroundColor: "#e0f2fe",
              borderRadius: "14px",
              padding: "16px",
              border: "2px solid #1f2937",
              marginBottom: "16px"
            }}>
              <p style={{
                color: "#666",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                margin: "0 0 6px 0",
                letterSpacing: "0.5px"
              }}>
                From
              </p>
              <p style={{
                color: "#1f2937",
                fontSize: "16px",
                fontWeight: "700",
                margin: "0",
                wordBreak: "break-word"
              }}>
                {senderName}
              </p>
            </div>

            <div style={{
              backgroundColor: "#a7f3d0",
              borderRadius: "14px",
              padding: "16px",
              border: "2px solid #1f2937",
              marginBottom: "16px"
            }}>
              <p style={{
                color: "#666",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                margin: "0 0 6px 0",
                letterSpacing: "0.5px"
              }}>
                Email
              </p>
              <a href={`mailto:${senderEmail}`} style={{
                color: "#0066cc",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                wordBreak: "break-all"
              }}>
                {senderEmail}
              </a>
            </div>

            <div style={{
              backgroundColor: "#fbcfe8",
              borderRadius: "14px",
              padding: "16px",
              border: "2px solid #1f2937",
              marginBottom: "16px"
            }}>
              <p style={{
                color: "#666",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                margin: "0 0 6px 0",
                letterSpacing: "0.5px"
              }}>
                Timestamp
              </p>
              <p style={{
                color: "#1f2937",
                fontSize: "14px",
                margin: "0"
              }}>
                {timestamp}
              </p>
            </div>

            <div style={{
              backgroundColor: "#fef3c7",
              borderRadius: "14px",
              padding: "16px",
              border: "2px solid #1f2937",
              marginBottom: "24px"
            }}>
              <p style={{
                color: "#666",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                margin: "0 0 8px 0",
                letterSpacing: "0.5px"
              }}>
                Message
              </p>
              <p style={{
                color: "#1f2937",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word"
              }}>
                {message}
              </p>
            </div>

            <div style={{
              backgroundColor: "#f3f4f6",
              borderRadius: "12px",
              padding: "12px 16px",
              border: "1px solid #e5e7eb",
              textAlign: "center",
              marginBottom: "16px"
            }}>
              <p style={{
                color: "#6b7280",
                fontSize: "12px",
                margin: "0"
              }}>
                💡 Reply directly to <strong>{senderEmail}</strong> to respond
              </p>
            </div>

            <p style={{
              color: "#999",
              fontSize: "11px",
              textAlign: "center",
              margin: "24px 0 0 0",
              paddingTop: "16px",
              borderTop: "2px solid #e5e7eb"
            }}>
              This email was sent from your contact form. Do not reply to this address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
