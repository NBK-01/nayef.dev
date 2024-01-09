import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/nav.components";
import { ThemeProvider, UIProvider } from "@/components/layout/providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nayef Kanaan",
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
            <Toaster position="top-center" richColors />
            <Navbar />
            {children}
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
