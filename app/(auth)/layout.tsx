import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../globals.css'

const monsetserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "speakupnigeria",
  description:
    "We invite you to join us in our mission to improve communities across Nigeria. Whether you are a concerned citizen, a government official, or a member of an organization, your participation is vital to our success. Report an issue, provide feedback, or become a volunteer—every action counts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${monsetserrat.className} bg-white-3`}>
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
