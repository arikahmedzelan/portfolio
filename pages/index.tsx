import Image from "next/image";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-scroll z-0"
    >
      <Head>
        <title>Arik Portfolio</title>
      </Head>
      {/* Header*/}

      <Header />

      {/* Hero*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About*/}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/*Experiance*/}

      {/*Skill*/}

      {/*Projects */}

      {/*Contact Me */}
    </div>
  );
};

export default Home;
