import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/core'
import 'styles/globals.scss'
import theme from 'styles/theme'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Lamesa</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SnackbarProvider>
            </ThemeProvider>
        </>
    )
}
export default MyApp
