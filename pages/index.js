import Head from 'next/head';
import Layout from '../components/layout/Layout.js';
import Welcome from '../components/layout/Welcome.js';
import Course from '../components/video/Course.js';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>DevTube</title>
      </Head>

      <Layout>
        <Welcome />

        {/* <Course /> */}
      </Layout>
    </>
  );
}
