import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {


    return(
        <Layout>
        <Head>
            <title> About </title>
        </Head>
        <div className="imgs">
            
        </div>
        <img src="./images/img1.jpg" ></img>
        <img src="./images/img2.jpg" ></img>
        <img src="./images/img3.jpg" ></img>
        <img src="./images/img4.jpg" ></img>
        <img src="./images/img5.jpg" ></img>
        <img src="./images/img6.jpg" ></img>
        <img src="./images/img7.jpg" ></img>
       
        <style jsx>{` 
            .img {
                padding-top: 5rem;
                
                } 
        `}</style>
    
       
        
        
        </Layout>
    )
}