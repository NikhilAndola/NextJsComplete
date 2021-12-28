import Link from "next/link"
import Navbar from "../components/Navbar"
import styles from '../styles/index.module.css'
import Head from "next/head"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}


const index = ({data}) => {
  console.log(data);
  return (
    <>
     <Head>
          <title>Home Page</title>
          <meta charset="UTF-8" />
            <meta name="description" content="Next.js Web tutorials" />
            <meta name="keywords" content="HTML, CSS, JavaScript, React, NEXT, Next.Js, npm" />
            <meta name="author" content="Nikhil andola" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className={`${styles.colorBg} ${styles.text_color} `}>
    <Navbar/>
    <h1>
       <Link href="/blog">
            <a>Blog</a>
          </Link>
         Welcome to <a href="https://nextjs.org">Next js! by Nikhil</a>
    </h1>
   </div>
   {
     data.map((curElem) => {
        return  <div key={curElem.id}>
            <h3>{curElem.id} </h3>
            <h2>{curElem.title}</h2>
        </div>
     })
   }
    </>
  )
}

export default index
//Export default is must here
