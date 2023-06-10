import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Menu } from '../../componentes/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página Inicial
        </h1>
      </main>
    </div>
  )
}
