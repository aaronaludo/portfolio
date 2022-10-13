import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Aaron Aludo - Software Developer",
    description: `A 19-year-old software developer based in Philippines.`,
    image: "/art.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://aaronaludo.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://aaronaludo.com${router.asPath}`}
        />  
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aaron Aludo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aaronaludo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <link rel="shortcut icon" href="/circle.png" />
      </Head>
      <main className="dark:bg-gradient-to-l dark:from-[#0f0f0f] w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}