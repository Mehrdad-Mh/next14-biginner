import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>logo</div>
        <div>
            <Link href="/">HomePage</Link>
            <Link href="/about">AboutPage</Link>
            <Link href="/blog">BlogPage</Link>
            <Link href="/contact">ContactPage</Link>
        </div>
    </div>
  )
}

export default Navbar