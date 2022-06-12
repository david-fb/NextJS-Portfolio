import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="David Basto web developer" />
        <meta name="keywords" content="Web Developer,Javascript,NextJS,React,NodeJS,Full stack developer,David Basto,David Basto Martinez,David Basto linkedin" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.davidbasto.dev" />
        <meta name="robots" content="index, nofollow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="David Basto" />
        <meta property="og:description" content="David Basto - Web Developer - Portfolio." />
        <meta name="image" property="og:image" content="https://davidbasto.dev/image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta property="og:url" content="https://davidbasto.dev" />
        <meta property="og:site_name" content="davidbasto" />
        <meta name="author" content="David Basto" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="David Basto" />
        <meta name="twitter:description" content="Web Developer - Portfolio." />
        <meta name="twitter:image" content="https://davidbasto.dev/image.png" />
        <meta name="twitter:image:alt" content="David Basto" />
        <meta name="twitter:creator" content="@DavidB_M1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
