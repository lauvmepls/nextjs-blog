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
        <h1><b>My impression of the first month as a CPE third year student.</b></h1>
        <p>Being a Computer Engineering student is really fun, challenging but fun.</p>
        <p>Our schedule is kinda hectic and is very tiring sometimes.</p>
        <p>Our professor in Software Development is very kind and very handsome and he gives very very high grades.</p>
        <p>I hope he lives a fulfilling life and a healthy one.</p>
        <p>I hope I won't fail on all of my subjects so I can graduate, yehey!</p>
        <p>I know now how to push update my website</p>
        <p>We are trying to build a sample website using:{' '}
        <a href="https://nextjs.org/learn"> our Next.js tutorial </a> </p> 
      </section>
    </Layout>
  );
}