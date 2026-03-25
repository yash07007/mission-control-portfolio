import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Head from "@/components/Head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head title={pageProps.title ? `${pageProps.title} — Yash Solanki` : undefined} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
