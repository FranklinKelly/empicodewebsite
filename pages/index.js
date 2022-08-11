import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';
import logo from '../public/empicode logo.png';

export default function Home() {
  const link = '/privateportal/333133/ton/crs/Home/'

  return (
    <div className={styles.container}>
      <Head>
        <title>EmpiCode</title>
        <meta name="description" content="A team based on the Island of Empirion" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
          <Image src={logo} alt="EmpiCode"/>
          <h1 className={styles.title}>
            Welcome to EmpiCode!
          </h1>
          <br></br>
        <Link href={link}><button className={styles.card}>Open private portal</button></Link>
      </header>
      <main className={styles.main}>
        <p className={styles.about}>
          EmpiCode is a team of experienced developers based in Island of Empirion. <br/>Our developers are dedicated to <strong>safe, secure, and efficient solutions</strong> to your problems.
        </p>
      </main>

      <footer className={styles.footer}>
          <p>Powered by NorthView Mock Trial Academy</p>
        
      </footer>
    </div>
  )
}
