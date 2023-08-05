import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my Name is Jhon Denielle Sunga a 3rd year BS Computer Engineering student at University of the Assumption</p>
        
      </section>
    </Layout>
  );
}