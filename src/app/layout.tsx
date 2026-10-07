import type { Metadata, Viewport } from "next";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { iconNames } from "@/components/icon";
import { site } from "@/lib/site";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Google Fonts serves only the listed glyphs, keeping the icon font tiny.
const iconFontUrl = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&icon_names=${[
  ...iconNames,
]
  .sort()
  .join(",")}&display=block`;

export const metadata: Metadata = {
  title: `${site.name} | Mobile Massage in Lagos`,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#3e232c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={iconFontUrl} />
      </head>
      <body className="bg-background font-sans text-body-md text-on-surface">
        {children}
      </body>
    </html>
  );
}
