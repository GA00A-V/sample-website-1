import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className={''}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
        <body className={'dark:bg-gray-900'}>
            <Main />
        <NextScript />
        </body>
        </Html>
    )
}