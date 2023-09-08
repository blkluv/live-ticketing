import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MintButton from '../components/MintButton';
import CollectContact from '../components/CollectContact';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} background`}>
      <Head>
        <title>Arvrtise Events</title>
        <meta
          name="description"
          content='Distribute tickets for your live event using Arvrtise NFTs.'
        />
        <link rel="icon" href="/images/favi.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} font-medium tracking-widest font-[500] text-5xl`}>
          ["wavWRLD]
        </h1>

        <div className={`${styles.description} items-center gap-2`}>
          <p className='tracking-widest uppercase font-[400]'>Cross Community-Driven Art + Music Experience</p>
          <MintButton 
            address="0xDF56aE86DBd9c5643735E40429b0FC1D1e6EfA93"
            buttonText="Claim ETH Ticket"
            width={24}
          />
        </div>

        <CollectContact />

        <div className={`${styles.grid} cursor-pointer`}>
          <Link href='http://www.tiktok.com/t/ZT829PTEg'>
          <div className={`${styles.card} bg-gradient-to-br from-indigo-900 to-transparent`}>
            <h2 className='tracking-widest font-[500] uppercase'>AR Filter Challenge</h2>
            <p className='tracking-widest'>Create the #1 ETH head TikTok Reel to win a VIP upgrade. </p>
          </div>
          </Link>

          <a href="https://www.spatial.io/s/Arvrtises-Lo-Fi-Scene-64fa8ceea41443c6406b4e9e?share=9183908625530175045" className={`${styles.card} bg-gradient-to-tl from-indigo-900 to-transparent`}>
            <h2 className='tracking-widest font-[500] uppercase'>Join our Metaverse</h2>
            <p className='tracking-widest'>Connect with fellow event attendees and even resell your ticket if you wish.</p>
          </a>
        </div>
      </main>

      <footer className='py-8 border-t border-white text-white'>
        <a className='flex justify-center items-center text-xl' href="https://arvrtise.com" target="_blank" rel="noopener noreferrer">
          <Image src='/images/decent.png' height={18} width={100} alt='Decent 💪' />
          <span className='pl-4 tracking-widest font-[400] uppercase text-sm'></span> 
        </a>
      </footer>
    </div>
  );
};

export default Home;
