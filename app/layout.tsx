import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kim Dasom | Creative Director",
  description: "Portfolio of Kim Dasom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </body>
    </html>
  );
}
