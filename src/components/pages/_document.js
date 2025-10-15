import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Fonts and favicon can be added here */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Poppins:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white text-gray-900 font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
