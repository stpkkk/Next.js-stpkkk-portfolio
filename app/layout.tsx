import "@styles/globals.css";

export const metadata = {
  title: "stpkkk-portfolio",
  description:
    "Stepanov Igor portfolio responsive web app, using Next.js, Typescript and Tailwind",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
