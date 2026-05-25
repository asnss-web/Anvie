import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anvié — Start living in English",
  description:
    "Anvié is a premium English-speaking space with speaking practice, community, buddy-system, live feedback and personal growth through real communication.",
  openGraph: {
    title: "Anvié — Start living in English",
    description: "Not lessons. A new English-speaking environment.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
