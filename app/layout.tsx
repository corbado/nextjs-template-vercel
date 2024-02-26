import "@/app/ui/global.css";

import { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import Navbar from "./navbar";
import ProviderWrapper from "./utils/ProviderWrapper";

export const metadata: Metadata = {
  title: "Corbado Next Template",
  description: "The official Corbado Next.js template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          <main>{children}</main>
        </body>
      </ProviderWrapper>
    </html>
  );
}
