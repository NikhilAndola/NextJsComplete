import Link from 'next/link'
import React, {useEffect} from 'react'
import {useRouter} from "next/router"

const ErrorPage = () => {

    const router = useRouter();

    const handleNavigate = () => {
        setTimeout(()=> {
            router.push("/");
        }, 2000)
    }

// useEffect(() => {
//     setTimeout(()=> {
//         router.push("/");
//     }, 3000)
// }, [])

useEffect(() => {
        router.push("/");
}, [])


    return (
        <>
        <>
    <div className="parent">
    <nav>
        <ul className="menu-bar">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </ul>
    </nav>
    </div>
    <h1>
        <button >
        <a onClick={()=> router.push("/")} >Back to homepage using inline function</a>
        </button>
        
    </h1>
   </>
        <div className='error'>
           This is Error page
        </div>
        <button >
        <a onClick={handleNavigate} >Back to homepage using function onclick</a>
        </button>
        </>
    )
}

export default ErrorPage
