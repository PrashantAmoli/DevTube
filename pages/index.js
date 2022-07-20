import Head from 'next/head';
import Layout from '../components/layout/Layout.js';
import Welcome from '../components/layout/Welcome.js';
import styles from '../styles/Home.module.css';
import Course from '../components/video/Course.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>DevTube </title>
      </Head>

      <Layout>
        <Welcome />

        {/* <Course /> */}
      </Layout>
    </>
  );
}
