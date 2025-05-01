import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-8 text-sm justify-center sm:justify-start font-medium text-stone-600 dark:text-stone-400">
    <Link href="/">home</Link>
    <Link href="https://www.npmjs.com/package/boilrplate" target="_blank">npm registry</Link>
    <Link href="https://github.com/purohitamann/boilrplate" target="_blank">github</Link>
    <Link href="/docs">docs</Link>
    <Link href="/create">Get Started</Link>
  </div>

  )
}

export default Navbar
