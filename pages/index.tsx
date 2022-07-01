import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TestWords from '../components/TestWords'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TestWords/>
    </div>
  )
}

export default Home
