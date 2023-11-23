import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NewsletterEmailProps {
  firstName: string;
  lastName: string;
}

const baseUrl = process.env.COMPANY_URL
  ? `https://${process.env.COMPANY_URL}`
  : "";

const CompanyName = process.env.COMPANY_NAME;

export const NewsletterEmail = ({
  firstName,
  lastName,
}: NewsletterEmailProps) => (
  <Html>
    <Head />
    <Preview>Streamify OTT - An OTT template</Preview>
    <Body style={main}>
      <Tailwind>
        <Container style={container}>
          <Img
            src="https://assets.streamify.dev/logo/streamify-logo-purpur.svg"
            width="170"
            height="50"
            alt="Streamify"
            style={logo}
          />
          <Heading style={h1}>Welcome to the Streamify OTT newsletter</Heading>
          <Text style={paragraph}>
            Thank you for your interest in Streamify. You will receive news
            about the progress of the project as well as new features and
            articles about content monetization.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={baseUrl} className="my-6">
              Go to website
            </Button>
          </Section>
          <Text style={paragraph}>
            Best regards,
            <br />
            Team {CompanyName}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Based in Stuttgart (Germany)</Text>
        </Container>
      </Tailwind>
    </Body>
  </Html>
);

export default NewsletterEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system, "Inter", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const h1 = {
  color: "#000000",
  fontFamily: "-apple-system, 'Inter', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#B21064",
  borderRadius: "4px",
  color: "#ffffff",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const hr = {
  borderColor: "#D9D9D9",
  margin: "20px 0",
};

const footer = {
  color: "#D9D9D9",
  fontSize: "12px",
};
