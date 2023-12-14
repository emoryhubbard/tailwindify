'use client'
import Script from 'next/script'
import Header from '../components/header'
import Footer from '../components/footer'
import {useState, useEffect} from 'react'

export default function HowItWorks() {
    return (
        <>
        <title>How It Works</title>
        <Header />
        <main className='text-[1.35rem] leading-[1.618] max-w-[38em] text-[#4a4a4a] bg-[#f9f9f9] m-auto p-[13px] sm:text-[1.53rem] md:text-[1.8rem] lg:text-[1.8rem]'>
    <section>
      <h1 className='leading-[1.1] font-bold break-words mt-12 mb-6 text-[2.35em] pb-30'>
        How It Works
      </h1>
      <p className="mt-0 mb-10 pb-30">
        Convert your CSS to Tailwind CSS seamlessly. Paste your HTML
        and CSS code to generate Tailwind-styled HTML output.
      </p>
      <p className="mt-0 mb-10 pb-30">- Convert traditional CSS styles to Tailwind CSS classes.</p>
  <p className="mt-0 mb-10 pb-30">- Integrate Tailwind styles seamlessly into your existing HTML code.</p>
  <p className="mt-0 mb-10 pb-30">- Easy-to-use interface for pasting HTML and CSS code and getting Tailwind-styled output.</p>
    </section>
  </main>
        <Footer />
        </>
    )
}

