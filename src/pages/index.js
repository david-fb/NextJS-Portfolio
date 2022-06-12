import Head from 'next/head';
import Header from '@components/Header';
import Contact from '@components/Contact';
import About from '@components/About';
import Projects from '@components/Projects';
import Nav from '@components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>David Basto</title>
        <meta name="description" content="David Basto web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
