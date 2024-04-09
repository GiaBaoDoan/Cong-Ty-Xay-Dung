import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CongTyXayDung",
  description: "Tìm Kiếm Hợp Đồng Xây Dựng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
