import type { NextPage } from 'next'
import Header from "../components/Header";
import About from "../components/About";
import Courses from "../components/Courses";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Head from "next/head";
import Newsletter from "../components/Newsletter";

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>Brand | brand slogan</title>
        </Head>
        <Header/>
        <Hero/>
        <About/>
        <Courses/>
        <Testimonials/>
        <Pricing/>
        <Contact/>
        <Newsletter/>
        <Footer/>

    </>
  )
}

export default Home
