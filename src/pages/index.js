import Head from 'next/head'
import {Route} from '../components'
import Newsletter from "../components/newsletter";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <section className={utilStyles.headingMd}>
      <Newsletter/>
        
      </section>
      
      </Layout> 
      
    </>
    )
}
