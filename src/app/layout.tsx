import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Ujaan Das",
  description: "Ujaan's personal website",
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
          <main className="md:p-2 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
