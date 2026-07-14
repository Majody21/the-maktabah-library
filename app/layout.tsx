import type { Metadata, Viewport } from "next";
import { Lora, Crimson_Pro, Amiri } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Maktabah Library — Learn Your Deen with Proof",
    template: "%s | The Maktabah Library",
  },
  description:
    "Structured, proof-based Islamic courses for English speakers — aqeedah, fiqh, Quran, hadith and Arabic, drawn from the scholars of Ahlus Sunnah upon the way of the Salaf.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#222222" },
  ],
};

// Light by default; dark mode only when the visitor has chosen it.
const themeInit = `(function(){try{if(localStorage.getItem("maktabah-theme")==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${crimson.variable} ${amiri.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <p
          lang="ar"
          dir="rtl"
          className="arabic border-b border-line !py-3 text-center !text-[1.85rem] !leading-normal text-ink"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
