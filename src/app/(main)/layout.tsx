import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider, UIProvider } from "@/components/layout/providers";
import { Toaster } from "sonner";
import { Nav } from "@/components/layout/nav.components";
import { BackToTop } from "@/components/comps/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nayef Kanaan",
  description: "A showcase of my work, projects, journey, and some writing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="" style={inter.style}>
        <UIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="bottom-right" richColors />
            <div id="top">
              <Nav />
            </div>
            <BackToTop/>
            <main className="mx-auto max-w-screen-md">
              {children}
            </main>
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
