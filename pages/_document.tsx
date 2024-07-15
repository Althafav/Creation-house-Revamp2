// _document.tsx
import HeaderComponent from "@/components/HeaderComponent";
import ScriptsComponents from "@/components/ScriptsComponents";

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />
        <HeaderComponent />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ScriptsComponents />

      </body>
    </Html>
  );
}
