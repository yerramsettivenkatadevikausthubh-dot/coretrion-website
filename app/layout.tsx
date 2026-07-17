import "./globals.css";

export const metadata = {
  title: "CORETRION™ | Intelligent Computing Platform",
  description:
    "CORETRION™ processor ecosystem with CORELINK™ interconnect and CHIPSETRON™ controllers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}