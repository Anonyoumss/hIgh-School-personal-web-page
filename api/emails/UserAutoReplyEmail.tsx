import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Column,
} from "@react-email/components";

interface UserAutoReplyEmailProps {
  recipientName: string;
}

export const UserAutoReplyEmail = ({
  recipientName,
}: UserAutoReplyEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out! I'll reply soon 🚀</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={headerText}>Thanks for reaching out! 🚀</Text>
          </Section>

          <Container style={innerContainer}>
            <Section style={content}>
              <Row>
                <Column align="center">
                  <Img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                    width="150"
                    height="150"
                    alt="Yassin DevHacker"
                    style={profileImage}
                  />
                </Column>
              </Row>

              <Text style={name}>Yassin (DevHacker)</Text>
              <Text style={title}>
                16-year-old developer & creative thinker
              </Text>

              <Hr style={hr} />

              <Text style={bioText}>
                Hi {recipientName}! Thanks so much for reaching out. I'm a
                16-year-old high school student passionate about building
                innovative projects and exploring new technologies. I love
                turning ideas into code and creating things that matter.
              </Text>

              <Text style={bioText}>
                I'll get back to you with more info about what I'm working on
                soon. In the meantime, feel free to check out my work on GitHub,
                subscribe to my YouTube, or hit me up on Telegram!
              </Text>

              <Section style={buttonsSection}>
                <Row>
                  <Column style={buttonColumn}>
                    <Button
                      pX={20}
                      pY={12}
                      style={buttonTelegram}
                      href="https://t.me/DevHackerG"
                    >
                      Telegram
                    </Button>
                  </Column>
                  <Column style={buttonColumn}>
                    <Button
                      pX={20}
                      pY={12}
                      style={buttonGitHub}
                      href="https://github.com/Anonyoumss"
                    >
                      GitHub
                    </Button>
                  </Column>
                  <Column style={buttonColumn}>
                    <Button
                      pX={20}
                      pY={12}
                      style={buttonYouTube}
                      href="https://www.youtube.com/@Anonyoumss"
                    >
                      YouTube
                    </Button>
                  </Column>
                </Row>
              </Section>

              <Hr style={hr} />

              <Text style={signature}>
                - Yassin DevHacker | Building ideas into reality ✨
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

export default UserAutoReplyEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const innerContainer = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  margin: "0 auto",
  marginBottom: "64px",
  overflow: "hidden" as const,
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const header = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "30px",
  textAlign: "center" as const,
};

const headerText = {
  color: "white",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  padding: "40px 30px",
};

const profileImage = {
  borderRadius: "50%",
  border: "4px solid #667eea",
  marginBottom: "20px",
  objectFit: "cover" as const,
};

const name = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 5px 0",
  textAlign: "center" as const,
};

const title = {
  color: "#666",
  fontSize: "14px",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const bioText = {
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 15px 0",
};

const buttonsSection = {
  margin: "30px 0",
};

const buttonColumn = {
  padding: "0 8px",
};

const buttonTelegram = {
  backgroundColor: "#0088cc",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const buttonGitHub = {
  backgroundColor: "#333",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const buttonYouTube = {
  backgroundColor: "#ff0000",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const signature = {
  color: "#999",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
  marginTop: "20px",
  borderTop: "1px solid #eee",
  paddingTop: "20px",
};
