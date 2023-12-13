// "use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LowerNav, Navbar} from "@/components/layout/nav.components";
import { ThemeProvider, UIProvider } from "@/components/layout/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "excelsior",
  description: "A showcase of Nayef Kanaan's work, projects, and profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden" style={inter.style}>
        <UIProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LowerNav/>
          <Navbar />
          
          {children}
          
        </ThemeProvider>
        </UIProvider>

      </body>
    </html>
  );
}
