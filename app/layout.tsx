"use client";
import { Footer } from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Stepanov Igor",
  description:
    "Stepanov Igor portfolio responsive web app, using Next.js, Typescript and Tailwind",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
