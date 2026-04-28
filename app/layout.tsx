import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: "Sofia Asif | Cybersecurity Professional",
  description:
    "Entry-level cybersecurity practitioner with hands-on exposure to offensive and defensive security, network monitoring, and SIEM deployment.",
  generator: "v0.app",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "network security",
    "SIEM",
    "Wazuh",
    "ethical hacking",
  ],

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Sofia Asif | Cybersecurity Professional",
    description:
      "Entry-level cybersecurity practitioner with hands-on exposure to offensive and defensive security, network monitoring, and SIEM deployment.",
    url: "https://www.sofia-asif.me/", // replace after deploy
    siteName: "Sofia Asif Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sofia Asif | Cybersecurity Professional",
    description:
      "Entry-level cybersecurity practitioner with hands-on exposure to offensive and defensive security, network monitoring, and SIEM deployment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
