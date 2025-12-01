import React from "react";

interface UserAutoReplyEmailProps {
  recipientName: string;
}

export const UserAutoReplyEmail = ({
  recipientName,
}: UserAutoReplyEmailProps) => {
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
          
          {/* Header Section - Sky Blue */}
          <div style={{
            backgroundColor: "#7dd3fc",
            padding: "32px 24px",
            textAlign: "center",
            borderBottom: "2px solid #1f2937"
          }}>
            <h1 style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              margin: "0",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
            }}>
              Thanks for reaching out! 🚀
            </h1>
          </div>

          {/* Content Section */}
          <div style={{ padding: "32px 24px" }}>
            
            {/* Profile with Image */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=220&h=220&fit=crop"
                alt="Yassin"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "16px",
                  border: "3px solid #1f2937",
                  objectFit: "cover",
                  marginBottom: "16px"
                }}
              />
              <h2 style={{
                color: "#1f2937",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 6px 0"
              }}>
                Yassin (DevHacker)
              </h2>
              <p style={{
                color: "#666",
                fontSize: "14px",
                margin: "0 0 24px 0"
              }}>
                16-year-old developer &amp; creative thinker
              </p>
            </div>

            {/* Bio Section - Cream background with rounded corners */}
            <div style={{
              backgroundColor: "#faf8f3",
              borderRadius: "16px",
              padding: "20px",
              border: "2px solid #1f2937",
              marginBottom: "24px",
              position: "relative"
            }}>
              {/* Bio tag */}
              <div style={{
                position: "absolute",
                top: "-12px",
                left: "20px",
                backgroundColor: "#f97316",
                color: "white",
                padding: "4px 12px",
                fontWeight: "bold",
                border: "2px solid #1f2937",
                borderRadius: "6px",
                fontSize: "11px"
              }}>
                Bio
              </div>
              
              <p style={{
                color: "#1f2937",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "16px 0 12px 0"
              }}>
                Hi {recipientName}! I'm a 16-year-old high school student passionate about building innovative projects and exploring new technologies. I love turning ideas into code and creating things that matter.
              </p>
              <p style={{
                color: "#1f2937",
                fontSize: "15px",
                lineHeight: "1.6",
                margin: "0"
              }}>
                Currently exploring 3D design, TypeScript, machine learning, and circuit design. I'll get back to you soon with more info about my projects!
              </p>
            </div>

            {/* Skills Section - Grid with rounded backgrounds */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "24px"
            }}>
              <div style={{
                backgroundColor: "#e0f2fe",
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #1f2937",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1f2937"
              }}>
                🚀 3D Design
              </div>
              <div style={{
                backgroundColor: "#a7f3d0",
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #1f2937",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1f2937"
              }}>
                💻 TypeScript
              </div>
              <div style={{
                backgroundColor: "#fef3c7",
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #1f2937",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1f2937"
              }}>
                🧠 ML
              </div>
              <div style={{
                backgroundColor: "#fbcfe8",
                borderRadius: "12px",
                padding: "12px",
                border: "2px solid #1f2937",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1f2937"
              }}>
                🐍 Python
              </div>
            </div>

            {/* Social Links - Rounded buttons */}
            <div style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "24px"
            }}>
              <a href="https://t.me/DevHackerG" style={{
                display: "inline-block",
                padding: "10px 16px",
                backgroundColor: "#0088cc",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "12px",
                border: "2px solid #1f2937"
              }}>
                Telegram
              </a>
              <a href="https://github.com/Anonyoumss" style={{
                display: "inline-block",
                padding: "10px 16px",
                backgroundColor: "#1f2937",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "12px",
                border: "2px solid #1f2937"
              }}>
                GitHub
              </a>
              <a href="https://www.youtube.com/@Anonyoumss" style={{
                display: "inline-block",
                padding: "10px 16px",
                backgroundColor: "#ef4444",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "12px",
                border: "2px solid #1f2937"
              }}>
                YouTube
              </a>
            </div>

            {/* Footer */}
            <p style={{
              color: "#999",
              fontSize: "12px",
              textAlign: "center",
              margin: "0",
              paddingTop: "16px",
              borderTop: "2px solid #e5e7eb"
            }}>
              - Yassin DevHacker | Building ideas into reality ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
