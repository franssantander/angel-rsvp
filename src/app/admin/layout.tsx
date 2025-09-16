import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen flex-col font-geist">
        <div>
          <main className="flex-1 px-4 py-6 lg:max-w-4xl mx-auto">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
