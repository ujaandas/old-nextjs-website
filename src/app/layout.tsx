import "./globals.css";

export const metadata = {
  title: "Ujaan Das",
  description: "Blog and portfolio of Ujaan Das",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="app">{children}</body>
    </html>
  );
}
