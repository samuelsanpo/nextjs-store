import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
