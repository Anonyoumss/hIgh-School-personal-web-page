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
            backgroundColor: "#faf8f3",
            borderRadius: "20px",
            padding: "32px",
            border: "2px solid #1f2937",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          {/* Sky Blue Tag */}
          <div
            style={{
              position: "absolute",
              top: "-16px",
              left: "20px",
              backgroundColor: "#7dd3fc",
              color: "#1f2937",
              padding: "4px 16px",
              fontWeight: "bold",
              border: "2px solid #1f2937",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transform: "rotate(-2deg)",
              fontSize: "12px",
            }}
          >
            📨 New Message
          </div>

          <div style={{ paddingTop: "20px" }}>
            <div
              style={{
                backgroundColor: "#e0f2fe",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #1f2937",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 4px 0",
                }}
              >
                From
              </p>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "0",
                }}
              >
                {senderName}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#a7f3d0",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #1f2937",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 4px 0",
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
                  fontWeight: "bold",
                }}
              >
                {senderEmail}
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#fef3c7",
                padding: "16px",
                borderRadius: "12px",
                border: "2px solid #1f2937",
              }}
            >
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 8px 0",
                }}
              >
                Message
              </p>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "0",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {message}
              </p>
            </div>

            <p
              style={{
                color: "#666",
                fontSize: "12px",
                margin: "24px 0 0 0",
                paddingTop: "16px",
                borderTop: "2px solid #1f2937",
                textAlign: "center",
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
