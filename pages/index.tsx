import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neutrino</title>
        <meta name="description" content="Notes app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Neutrino
        </h1>

        <p className={styles.description}>
          A simple note writing app with that integrates with GitHub.
        </p>

        <div className={styles.grid}>
          <div
            className={styles.card}
          >
            <h2>Cross platform</h2>
            <p>
              Supported on Windows, Mac, Linux, Android and iOS... or just in your browser.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Encryption</h2>
            <p>Optionally encrypt your notes so that they can only be read by you!</p>
          </div>

          <div className={styles.card}>
            <h2>GitHub</h2>
            <p>Connect to your Github account to access your notes across all your devices and keep a history of all your changes.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Front matter</h2>
            <p>Stores notes metadata as yaml front matter so that you can easily generate Jekyll or Hugo page from your notes.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by <a href="https://georgebutter.com">George Butter</a></p>
      </footer>
    </div>
  )
}

export default Home
