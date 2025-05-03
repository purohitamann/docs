'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
          <footer className="text-center text-xs text-stone-400 py-10">
        © {new Date().getFullYear()} Boilrplate. <Link href="/terms" className="underline">Terms of Service</Link> & <Link className="underline" href={"/terms/privacy"}>Privacy Policy</Link>
      </footer>

    </div>
  )
}

export default Footer
