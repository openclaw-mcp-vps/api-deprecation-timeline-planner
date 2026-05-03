import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Deprecation Timeline Planner",
  description: "Plan API deprecation timelines and automatically notify affected customers. Built for API product managers and developer relations teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c71ed661-2b04-45fd-bdcd-8d976006aa53"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
