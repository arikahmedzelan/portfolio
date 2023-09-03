import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arik Portfolio</title>
      </Head>
      {/* Header*/}

      <Header />

      {/* Hero*/}
      <section id="hero">
        <Hero />
      </section>

      {/* About*/}

      {/*Experiance*/}

      {/*Skill*/}

      {/*Projects */}

      {/*Contact Me */}
    </div>
  );
};

export default Home;
