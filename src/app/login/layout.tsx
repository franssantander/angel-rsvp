export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-geist">
      <main>{children}</main>
    </div>
  );
}
