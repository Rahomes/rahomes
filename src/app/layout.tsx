import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/content/site";
import { QuoteProvider } from "@/components/QuoteProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1E4A28",
};

const display = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand.fullName} · Interior Design`,
    template: `%s · ${site.brand.fullName}`,
  },
  description:
    "RA HOMES INTERIORS WORLD — residential interior design in Thiruninravur, Tamil Nadu. Modular kitchens, wardrobes, living spaces, and full-home turnkey interiors.",
  keywords: [
    "interior design",
    "RA HOMES",
    "Thiruninravur",
    "Chennai interiors",
    "modular kitchen",
    "home interiors",
    "Tamil Nadu",
  ],
  openGraph: {
    title: site.brand.fullName,
    description: `${site.hero.headline} — residential interiors crafted with care.`,
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-ink">
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
