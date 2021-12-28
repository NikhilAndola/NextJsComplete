import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <div>
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
        </div>
    )
}

export default Navbar
