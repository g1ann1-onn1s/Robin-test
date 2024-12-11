import "@/app/globals.css";
import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-[100vh]">
        <Header />
        <main className="flex-1 p-2 sm:p-4 lg:p-11">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
