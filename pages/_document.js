import Document, { Head, Main, NextScript } from 'next/document'
import Logo from '../public/assets/images/favicon.png'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        return renderPage();
    }

    render() {
        return (
            <html>
                <Head>
                    <title>BusLine - React Landing Page</title>
                    <link rel="shortcut icon" href={Logo} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}