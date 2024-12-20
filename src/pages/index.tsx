import Head from "next/head";
import { type NextPage } from "next";
import Welcome from "../components/Welcome";

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boise Benefits</title>
        <meta name="description" content="Boise Benefits" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Welcome />
      </main>
    </>
  );
};

export default Home;
