import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "postcss";
import { Box } from "@mui/material";
import ResponsiveDrawer from "@/components/drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic NextJS Template",
  description: "Use this as a base to create a new UI with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          <ResponsiveDrawer />
          {children}
        </Box>
      </body>
    </html>
  );
}
