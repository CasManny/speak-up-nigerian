import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const monsetserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "speakupnigeria",
  description: "We invite you to join us in our mission to improve communities across Nigeria. Whether you are a concerned citizen, a government official, or a member of an organization, your participation is vital to our success. Report an issue, provide feedback, or become a volunteer—every action counts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${monsetserrat.className} bg-white-3`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>

    </ClerkProvider>
  );
}
