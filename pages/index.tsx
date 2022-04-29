import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next App Wireframe</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <a
                    href="https://github.com/phoenixVS/valentyn-js-test"
                    className={styles.neonText}
                >
                    Checkout out open source repo at github
                </a>
            </main>
        </div>
    )
}

export default Home
