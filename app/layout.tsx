// app/layout.tsx
//import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Deportivo",
  description: "Opinión y análisis sobre deporte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}