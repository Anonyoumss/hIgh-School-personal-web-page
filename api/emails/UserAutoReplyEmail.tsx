import React from "react";

interface UserAutoReplyEmailProps {
  recipientName: string;
}

export const UserAutoReplyEmail = ({
  recipientName,
}: UserAutoReplyEmailProps) => {
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
          {/* Coral Tag */}
          <div
            style={{
              position: "absolute",
              top: "-16px",
              left: "20px",
              backgroundColor: "#f97316",
              color: "white",
              padding: "4px 16px",
              fontWeight: "bold",
              border: "2px solid #1f2937",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transform: "rotate(-2deg)",
              fontSize: "12px",
            }}
          >
            About Yassin
          </div>

          <div style={{ paddingTop: "20px" }}>
            {/* Profile Photo */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <img
                src="https://cdn.jsdelivr.net/gh/replit/replit-agent@latest/attached_assets/generated_images/teen_profile_with_hood_and_cyan_accents.png"
                alt="Yassin DevHacker"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "20px",
                  border: "2px solid #1f2937",
                  objectFit: "cover",
                  display: "inline-block",
                }}
              />
            </div>

            {/* Bio Text */}
            <p
              style={{
                color: "#1f2937",
                fontSize: "16px",
                lineHeight: "1.6",
                margin: "0 0 16px 0",
                fontWeight: "500",
              }}
            >
              Hi {recipientName}! Thanks so much for reaching out.
            </p>

            <p
              style={{
                color: "#1f2937",
                fontSize: "16px",
                lineHeight: "1.6",
                margin: "0 0 16px 0",
              }}
            >
              I'm Yassin, a 16-year-old developer passionate about building innovative projects and exploring new technologies. I love turning ideas into code and creating things that matter.
            </p>

            {/* Skills Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                margin: "20px 0",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e0f2fe",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "2px solid #1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                🚀 3D Design
              </div>
              <div
                style={{
                  backgroundColor: "#a7f3d0",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "2px solid #1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                💻 TypeScript
              </div>
              <div
                style={{
                  backgroundColor: "#fef3c7",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "2px solid #1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                🧠 Machine Learning
              </div>
              <div
                style={{
                  backgroundColor: "#fbcfe8",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "2px solid #1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#1f2937",
                }}
              >
                🐍 Python
              </div>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                margin: "24px 0",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://t.me/DevHackerG"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  backgroundColor: "#0088cc",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  border: "2px solid #1f2937",
                  cursor: "pointer",
                }}
              >
                💬 Telegram
              </a>
              <a
                href="https://github.com/Anonyoumss"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  backgroundColor: "#1f2937",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  border: "2px solid #1f2937",
                  cursor: "pointer",
                }}
              >
                🐙 GitHub
              </a>
              <a
                href="https://www.youtube.com/@Anonyoumss"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "12px",
                  border: "2px solid #1f2937",
                  cursor: "pointer",
                }}
              >
                📺 YouTube
              </a>
            </div>

            <p
              style={{
                color: "#1f2937",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "24px 0 0 0",
                paddingTop: "16px",
                borderTop: "2px solid #1f2937",
                textAlign: "center",
              }}
            >
              I'll get back to you soon with more info about my projects! Thanks for the interest! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
