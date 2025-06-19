
import Header from "@widgets/Header/ui";
import type { Metadata } from "next";
import '@shared/styles/global.scss';

export const metadata: Metadata = {
  title: "Nevo Devs",
  description: "Nevo Devs — студия веб-разработки. Создаём современные сайты, интернет-магазины и цифровые решения, которые повышают продажи, автоматизируют бизнес и усиливают онлайн-присутствие.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header/>
        <main >
        {children}
        </main>
      </body>
    </html>
  );
}
