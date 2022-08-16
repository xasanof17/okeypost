import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-gilroy bg-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
