import "@styles/globals.css";
import { Footer, Nav } from "@components";
import { Providers } from "./providers";

export const metadata = {
  title: "Степанов Игорь",
  description:
    "Степанов Игорь веб-приложение с использованием Next.js, Typescript, Tailwind и адаптивной версткой",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
