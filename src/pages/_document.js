import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <NextScript />

        <Script
          type="text/javascript"
          async
          strategy="afterInteractive"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/5bf5c632-3bad-4542-8f90-bdcea6287968-loader.js"
        ></Script>
      </body>
    </Html>
  );
}
