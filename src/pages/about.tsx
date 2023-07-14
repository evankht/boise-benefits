import Head from "next/head";
import { type NextPage } from "next";

export const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boise Benefits</title>
        <meta name="description" content="Boise Benefits" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
};

export default About;
