import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import CardFile from "../Component/CardFile";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
        <CardFile/>
    </div>
  )
}

export default IndexPage
