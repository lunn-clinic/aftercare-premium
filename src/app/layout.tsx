import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lunn-aftercare.local"),
  title: {
    default: "시술 후 관리 가이드 | 룬피부과의원",
    template: "%s | 룬피부과의원",
  },
  description:
    "룬피부과의원 환자분을 위한 시술 후 회복·관리 가이드. 시기별 주의사항, 자가 체크, 시너지 추천까지 한 곳에서 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
      </body>
    </html>
  );
}
