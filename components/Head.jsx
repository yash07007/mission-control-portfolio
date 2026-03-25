import Head from "next/head";

const CustomHead = ({ title = "Yash Solanki — Mission Control" }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230a0e17'/><text x='50' y='68' font-size='55' font-family='monospace' font-weight='bold' fill='%2300d4aa' text-anchor='middle'>YS</text></svg>" />
            <meta
                name="description"
                content="Yash Solanki — Software Engineer specializing in wireless protocol design, satellite communication, and systems programming."
            />
            <meta
                name="keywords"
                content="yash solanki, software engineer, wireless protocol, satellite communication, mac layer, systems programming"
            />
            <meta property="og:title" content="Yash Solanki — Mission Control" />
            <meta
                property="og:description"
                content="Software Engineer specializing in wireless protocol design, satellite communication, and systems programming."
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;
