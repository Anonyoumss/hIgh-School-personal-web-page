import React from "react";

interface AdminContactEmailProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

export const AdminContactEmail = ({
  senderName,
  senderEmail,
  message,
}: AdminContactEmailProps) => {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div
        style={{
          backgroundColor: "#faf8f3",
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "32px",
            border: "2px solid #1f2937",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#1f2937",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "0 0 20px 0",
            }}
          >
            📨 New Contact Message
          </h2>

          <div style={{ borderTop: "2px solid #1f2937", paddingTop: "16px" }}>
            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  color: "#666",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                From
              </p>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                {senderName}
              </p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  color: "#666",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                Email
              </p>
              <a
                href={`mailto:${senderEmail}`}
                style={{
                  color: "#0066cc",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                {senderEmail}
              </a>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  color: "#666",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                Message
              </p>
              <div
                style={{
                  backgroundColor: "#f3f4f6",
                  padding: "12px",
                  borderRadius: "6px",
                  color: "#1f2937",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {message}
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "2px solid #1f2937",
              paddingTop: "16px",
              marginTop: "24px",
            }}
          >
            <p
              style={{
                color: "#666",
                fontSize: "12px",
                margin: "0",
              }}
            >
              Reply directly to {senderEmail} to respond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
