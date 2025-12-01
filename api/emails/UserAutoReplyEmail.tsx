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
        {/* Header with sky blue background */}
        <div
          style={{
            backgroundColor: "#7dd3fc",
            borderRadius: "12px 12px 0 0",
            padding: "32px",
            border: "2px solid #1f2937",
            borderBottom: "none",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              margin: "0",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Thanks for reaching out! 🚀
          </h1>
        </div>

        {/* Main content */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "0 0 12px 12px",
            padding: "32px",
            border: "2px solid #1f2937",
            borderTop: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* Profile section */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              alt="Yassin DevHacker"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "4px solid #14b8a6",
                marginBottom: "16px",
                objectFit: "cover",
              }}
            />
            <h2
              style={{
                color: "#1f2937",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 8px 0",
              }}
            >
              Yassin (DevHacker)
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                margin: "0 0 24px 0",
              }}
            >
              16-year-old developer &amp; creative thinker
            </p>
          </div>

          <div style={{ borderTop: "2px solid #1f2937", paddingTop: "24px" }}>
            {/* Bio section with mint background */}
            <div
              style={{
                backgroundColor: "#a7f3d0",
                padding: "20px",
                borderRadius: "8px",
                border: "2px solid #1f2937",
                marginBottom: "24px",
                transform: "rotate(-1deg)",
              }}
            >
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "0 0 12px 0",
                }}
              >
                Hi {recipientName}! Thanks so much for reaching out. I'm a
                16-year-old high school student passionate about building
                innovative projects and exploring new technologies. I love
                turning ideas into code and creating things that matter.
              </p>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                I'll get back to you with more info about what I'm working on
                soon. In the meantime, feel free to check out my work below!
              </p>
            </div>

            {/* Social links section with sky background */}
            <div
              style={{
                backgroundColor: "#e0f2fe",
                padding: "20px",
                borderRadius: "8px",
                border: "2px solid #1f2937",
                marginBottom: "24px",
                transform: "rotate(1deg)",
              }}
            >
              <p
                style={{
                  color: "#1f2937",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  margin: "0 0 12px 0",
                }}
              >
                Connect with me
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a
                  href="https://t.me/DevHackerG"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "#0088cc",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontSize: "13px",
                    border: "2px solid #1f2937",
                  }}
                >
                  Telegram
                </a>
                <a
                  href="https://github.com/Anonyoumss"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "#1f2937",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontSize: "13px",
                    border: "2px solid #1f2937",
                  }}
                >
                  GitHub
                </a>
                <a
                  href="https://www.youtube.com/@Anonyoumss"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    fontSize: "13px",
                    border: "2px solid #1f2937",
                  }}
                >
                  YouTube
                </a>
              </div>
            </div>

            {/* Signature */}
            <p
              style={{
                color: "#999",
                fontSize: "12px",
                textAlign: "center",
                margin: "0",
                borderTop: "1px dashed #ddd",
                paddingTop: "16px",
              }}
            >
              - Yassin DevHacker | Building ideas into reality ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
