'use client'
import Script from 'next/script'

export default function Footer() {
    return (
        <>
        <footer className="footer bg-zinc-800 pt-8 pb-4 px-4 sm:pl-12 lg:pl-[calc(50vw_-_30rem)]">
        <a className="has-bottom-logo" href="/">
            <img
            className="bottom-logo w-70 pb-12"
            src="/images/site/TailwindifyLogo3.svg"
            alt="logo image"
            />
        </a>
        <p className="footer-description text-[1.1rem] text-[white] font-normal max-w-[80%] m-0 pb-8 p-0">
        Transform your styles effortlessly with our CSS to Tailwind CSS converter.</p>
        <p className="footer-description text-[1.1rem] text-[white] font-normal max-w-[80%] m-0 pb-8 p-0">
        Unlock the power of Tailwind CSS by converting your traditional CSS files seamlessly. Streamline your workflow and enhance your coding experience with a simple and efficient conversion process.
        </p>
        <nav>
            <p
            id="bottom-nav-title"
            className="bottom-nav-title text-base text-[white] font-extrabold m-0 p-0"
            >
            SITE LINKS
            </p>
            <ul className="bottom-nav pl-0">
            <li>
                <a
                href="/account"
                className="block text-[white] pb-[0.4rem] pt-3"
                >
                Sign up
                </a>
            </li>
            <li>
                <a
                href="/register"
                className="block text-[white] pb-[0.4rem]"
                >
                Create Account
                </a>
            </li>
            <li>
                <a
                href="/how-it-works"
                className="block text-[white] pb-[0.4rem]"
                >
                How It Works
                </a>
            </li>
            </ul>
        </nav>
        <p className="copyright text-center text-[0.9rem] text-[white] m-0 pt-4">
            © 2023 Tailwindify, Inc. All rights reserved.
        </p>
        </footer>
        <Script type='module' src="/js/footer.js" />
        </>
        )}