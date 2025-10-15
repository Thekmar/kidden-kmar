import "./globals.css";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";

export const metadata = {
  title: "Kidden Kindergarten",
  description: "The safest and happiest kindergarten for your children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-poppins">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
