import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>
        <main className="layout">
          <div />
          <div className="content">{children}</div>
        </main>
      </body>
    </html>
  );
}
