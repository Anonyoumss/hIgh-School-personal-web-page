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
    <div style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif', backgroundColor: "#faf8f3", padding: "20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Main Card with rounded corners */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "24px",
          overflow: "hidden",
          border: "2px solid #1f2937",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>
          
          {/* Header Section */}
          <div style={{
            backgroundColor: "#7dd3fc",
            padding: "28px 24px",
            textAlign: "center",
            borderBottom: "2px solid #1f2937"
          }}>
            <h1 style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              margin: "0",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
            }}>
              📨 New Message
            </h1>
          </div>

          {/* Content Section */}
          <div style={{ padding: "28px 24px" }}>
            
            {/* From Section - Rounded */}
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
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
                letterSpacing: "0.5px"
              }}>
                From
              </p>
              <p style={{
                color: "#1f2937",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0"
              }}>
                {senderName}
              </p>
            </div>

            {/* Email Section - Rounded */}
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
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
                letterSpacing: "0.5px"
              }}>
                Email
              </p>
              <a href={`mailto:${senderEmail}`} style={{
                color: "#0066cc",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "bold",
                wordBreak: "break-all"
              }}>
                {senderEmail}
              </a>
            </div>

            {/* Message Section - Rounded */}
            <div style={{
              backgroundColor: "#fef3c7",
              borderRadius: "14px",
              padding: "16px",
              border: "2px solid #1f2937"
            }}>
              <p style={{
                color: "#666",
                fontSize: "11px",
                fontWeight: "bold",
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

            {/* Footer */}
            <p style={{
              color: "#999",
              fontSize: "12px",
              textAlign: "center",
              margin: "24px 0 0 0",
              paddingTop: "16px",
              borderTop: "2px solid #e5e7eb"
            }}>
              Reply to {senderEmail} to respond
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
