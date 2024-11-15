import Header from "@/components/header";
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
      <body id="app" className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto max-w-3xl py-2">
          <Header />
          <main className="md:px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
