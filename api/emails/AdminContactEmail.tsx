import React from "react";
import {
  Body,
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
} from "@react-email/components";

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
    <Html>
      <Head />
      <Preview>New message from {senderName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={heading}>📨 New Contact Message</Text>
            <Hr style={hr} />
            
            <Section style={contentSection}>
              <Text style={label}>From:</Text>
              <Text style={value}>{senderName}</Text>
              
              <Text style={label}>Email:</Text>
              <Link href={`mailto:${senderEmail}`} style={linkStyle}>
                {senderEmail}
              </Link>
              
              <Text style={label}>Message:</Text>
              <Text style={messageBox}>{message}</Text>
            </Section>

            <Hr style={hr} />
            <Text style={footer}>
              Reply directly to {senderEmail} or visit your contact form dashboard
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default AdminContactEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const heading = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "16px 0",
};

const contentSection = {
  margin: "24px 0",
};

const label = {
  color: "#666",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  marginTop: "16px",
  marginBottom: "4px",
};

const value = {
  color: "#1f2937",
  fontSize: "14px",
  margin: "0",
};

const linkStyle = {
  color: "#0066cc",
  textDecoration: "underline",
};

const messageBox = {
  backgroundColor: "#f3f4f6",
  padding: "12px",
  borderRadius: "4px",
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#666",
  fontSize: "12px",
  marginTop: "24px",
};
