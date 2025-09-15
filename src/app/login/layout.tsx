export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <main className="px-4 py-6">{children}</main>
    </div>
  );
}
