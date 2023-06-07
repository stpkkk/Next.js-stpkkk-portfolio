import "@styles/globals.css";
import { Footer } from "@components/Footer";
import Nav from "@components/Nav";
import { Providers } from "./providers";

export const metadata = {
  title: "Stepanov Igor",
  description:
    "Stepanov Igor portfolio responsive web app, using Next.js, Typescript and Tailwind",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
