import Head from "next/head";

function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Slice of Life organization website. Get information and register. Next.js app created by Jonathan Nguyen." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Slice of Life" />
            <meta property="og:description" content="Slice of Life organization website. Get information and register. Next.js app created by Jonathan Nguyen."/>
            <meta property="og:image" content="https://sliceoflifesb.org/sliceLogoSquare.jpeg"/>
            <link rel="icon" href="/media/icons/sliceFavicon.png" />
        </Head>
    )
}

export default Meta;