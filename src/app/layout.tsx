import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OmniTour.ai — UK Property in Immersive 3D",
  description: "Gaussian Splat 3D property tours for estate agents, developers, and Airbnb hosts. Let overseas buyers walk every room before they book a flight.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
