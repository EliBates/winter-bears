import Head from 'next/head';
import { Navbar } from '@module/Navbar';
import { HomeBanner } from '@module/Homepage/HomeBanner';
import { Welcome } from '@module/Homepage/Welcome';
import dynamic from 'next/dynamic';
const Snowfall = dynamic(() => import('react-snowfall'), { ssr: false });

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen ">
      <Head>
        <title>Winter Bears</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen">
        <Snowfall />
        <Navbar />
        <HomeBanner />
      </div>
      <div className="bg-light">
        <Welcome />
      </div>
    </div>
  );
}
