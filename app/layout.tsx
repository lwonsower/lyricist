import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

// Headings — geometric, robotic, futuristic
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// Body — clean monospace for the terminal feel
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Accent / labels / timestamps
const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "LYRICIST // neural songwriting terminal",
  description:
    "A rogue interface for writing lyrics. High-tech, low-life songcraft from the sprawl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      {/* cyber-scanlines paints the full-page CRT overlay via ::after */}
      <body className="cyber-scanlines relative min-h-full flex flex-col font-mono">
        {children}
      </body>
    </html>
  );
}
