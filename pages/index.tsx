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
                <h1 className={styles.title}>
                    Checkout out open source{' '}
                    <a href="https://github.com/phoenixVS/valentyn-js-test">
                        repo
                    </a>{' '}
                    at github
                </h1>
            </main>
        </div>
    )
}

export default Home
