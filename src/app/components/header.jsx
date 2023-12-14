'use client'
import Script from 'next/script'

export default function Header() {
    return (
        <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=product-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            media="screen"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
            <div className="sticky-header sticky z-[9] top-0">
            <header>
                <div className="has-header flex justify-between relative bg-zinc-800 p-1">
                <a
                    className="has-top-logo sm:ml-8 lg:ml-[calc(50vw_-_31rem)]"
                    href="/"
                >
                    <img
                    className="top-logo h-8 box-content p-4"
                    src="/images/site/TailwindifyLogo3.svg"
                    alt="logo image"
                    />
                </a>
                
                <a className='text-white pt-5 hidden sm:block md:block lg:block' href="/how-it-works">How It Works</a>
                <a className='text-white pt-5 hidden sm:block md:block lg:block' href="/account">Login</a>
                <a className='text-white pt-5 hidden sm:block md:block lg:block' href="/register">Sign Up</a>
                <div className="has-my-account flex gap-[1.2rem] pr-4 pt-4 sm:mr-8 lg:mr-[calc(50vw_-_30rem)]">
                    <a href="javascript:">
                    <img
                        className="burger-icon h-[1.6rem] box-border p-[0.2rem]"
                        src="/images/site/BurgerWhite.svg"
                        alt="burger icon"
                    />
                    </a>
                </div>
                <div className="slideout-menu absolute w-full max-w-[25rem] z-[999] top-0">
                    <div className="has-menu-search-form flex justify-between">
                    <div className="has-menu-close-icon pl-3 pr-4 pt-4">
                        <a href="javascript:">
                        <img
                            className="menu-close-icon h-[1.6rem] box-content pr-4"
                            src="/images/site/CloseIconWhite.svg"
                            alt="close (as in the verb close) icon"
                        />
                        </a>
                    </div>
                    </div>
                    <ul className="menu-nav pl-4 pb-[0.3rem]">
                    <li>
                        <a
                        href="/account"
                        className="pt-4 flex justify-between items-center text-white"
                        >
                        <p className='bg-black/90 p-2 rounded-lg'>Sign In</p>
                        </a>
                    </li>{" "}
                    <li>
                        <a
                        href="/register"
                        className="pt-4 flex justify-between items-center text-white"
                        >
                        <p className='bg-black/90 p-2 rounded-lg'>Create Account</p>
                        </a>
                    </li>{" "}
                    <li>
                        <a
                        className="pt-4 find-product-option flex justify-between items-center text-white"
                        href="/how-it-works"
                        >
                        <p className='bg-black/90 p-2 rounded-lg'>How It Works</p>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="dark-overlay fixed w-full h-full bg-[rgba(0,0,0,0.7)] z-[99] left-0 top-0" />
                </div>{" "}
            </header>
            </div>
            <Script type='module' src="/js/header.js" />
        </>
    );
}

