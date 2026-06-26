import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2E7D32",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Ojas Sanjivani",
    default: "Ojas Sanjivani - Premium Digital Healthcare & Wellness Platform",
  },
  description: "Experience the synergy of Ayurveda, Homeopathy, and digital health consultations at Ojas Sanjivani. Connect with qualified doctors, order genuine medicines online, and embrace a healthier lifestyle with customized natural wellness plans.",
  keywords: [
    "Ojas Sanjivani",
    "Ayurveda",
    "Homeopathy",
    "Digital Health Assistant",
    "Online Doctor Consultation",
    "Online Medicine Delivery",
    "Wellness E-commerce",
    "Natural Wellness",
    "Natural Healing",
    "Indian Healthcare Platform"
  ],
  authors: [{ name: "Ojas Sanjivani Team" }],
  creator: "Ojas Sanjivani Healthcare",
  publisher: "Ojas Sanjivani Healthcare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ojas Sanjivani - Premium Digital Healthcare & Wellness Platform",
    description: "Consult qualified doctors, receive digital health assessments, and order authentic Ayurvedic & Homeopathic medicines with seamless home delivery.",
    url: "https://ojassanjivani.com",
    siteName: "Ojas Sanjivani",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojas Sanjivani - Premium Digital Healthcare & Wellness Platform",
    description: "Experience the synergy of Ayurveda, Homeopathy, and digital consultations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-white text-text-main font-sans selection:bg-light-green selection:text-primary">
        {children}
      </body>
    </html>
  );
}
