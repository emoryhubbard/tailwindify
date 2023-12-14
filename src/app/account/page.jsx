'use client'
import Header from '../components/header'
import Footer from '../components/footer'
import {useState, useEffect} from 'react'
import Script from 'next/script'
const dotenv = require('dotenv')
dotenv.config()

export default function Account() {
    const [allValues, setAllValues] =  useState({name: null, email: null})
    useEffect( () => {
       fetch('/api/session')
        .then((response) => response.json())
        .then((data) => {
            const { name, email } = data.session
            setAllValues({name: name, email: email})
        })
        }, [])
    return (
            <>
            <title>Sign In</title>
                <Header />
                <main className="text-[1.35rem] leading-[1.618] max-w-[38em] text-[#4a4a4a] bg-[#f9f9f9] m-auto p-[13px]">
                <h1 className="leading-[1.1] font-bold break-words mt-12 mb-6 text-[2.35em]">{(allValues.name) ? ("You are currently signed in as " + allValues.name + "."): 'Please Sign In'}</h1>
                <a
                    href="/"
                    className="no-underline text-[#1d7484] visited:text-[#144f5a] hover:text-[#982c61] hover:border-b-2 hover:border-b-[#4a4a4a] hover:border-solid"
                >
                    Back to Converter
                </a>
                <span>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</span>
                <a
                    href="javascript:"
                    className={((!allValues.name) ? "hidden ": "inline ") + "sign-out no-underline text-[#1d7484] visited:text-[#144f5a] hover:text-[#982c61] hover:border-b-2 hover:border-b-[#4a4a4a] hover:border-solid"}
                >
                    {'Sign out'}
                </a>
                <form className="blue-form login-form" action="/api/session" method="post">
                    <fieldset className="login-form-fieldset block font-semibold mb-2">
                    <label className="block font-semibold mb-2">
                        Email<span className="text-red-500 asterisk">*</span>
                        <input
                        type="email"
                        name="email"
                        required=""
                        placeholder=""
                        className="block border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                        />
                    </label>
                    <label
                        className="block font-semibold mb-2"
                        title="Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character"
                    >
                        Password<span className="text-red-500 asterisk">*</span>
                        <input
                        className="block password-input border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                        type="password"
                        name="password"
                        title="Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character"
                        required=""
                        pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        placeholder=""
                        />
                    </label>
                    <input
                        className="submit-button border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                        type="submit"
                        defaultValue="Sign in"
                    />
                    <label className="no-account block font-semibold mb-2">
                        {'No account?\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                        <a
                        href="/register"
                        className="no-underline text-[#1d7484] visited:text-[#144f5a] hover:text-[#982c61] hover:border-b-2 hover:border-b-[#4a4a4a] hover:border-solid"
                        >
                        Sign up
                        </a>
                    </label>
                    <input
                        type="hidden"
                        name="action"
                        defaultvalue="submit-login"
                        className="border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                    />
                    </fieldset>
                </form>
                </main>

                    {/*<main>
                    <p className="please-sign-in">{(allValues.name) ? ("You are currently signed in as " + allValues.name + "."): "Please Sign In:"}</p>
                    <a className={(allValues.name ? "block ": "hidden ") + "p-4 border-2 border-black"} href={"/"}>Access unlimited conversions</a>
                    <a className={((!allValues.name) ? "hidden ": "block ") + "sign-out border-2 border-black p-4"} href="javascript:">Sign out</a>
                    <form
                    className={((allValues.name) ? "hidden ": "block ") + "blue-form login-form"}
                    action="/api/session"
                    method="post"
                    >
                    <fieldset className="login-form-fieldset">
                        <label className="block">
                        Email<span className="asterisk">*</span>
                        <input className="block border-2 border-black" type="email" name="email" required="" placeholder="" />
                        </label>
                        <label className="block" title="Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character">
                        Password<span className="asterisk">*</span>
                        <input
                            className="password-input block border-2 border-black"
                            type="password"
                            name="password"
                            title="Passwords must be at least 8 characters and contain at least 1 number, 1 capital letter and 1 special character"
                            required=""
                            pattern="(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                            placeholder=""
                        />
                        <span>
                            Passwords must be at least 8 characters and contain at least 1 number, 1
                            capital letter and 1 special character
                        </span>
                        </label>
                        <input className="submit-button block cursor-pointer p-4 border-2 border-black" type="submit" defaultValue="Sign in" />
                        <label className="no-account block">
                        No account?{" "}
                        <a className="block p-4 border-2 border-black" href="/register">Sign up</a>
                        </label>
                        <input type="hidden" name="action" defaultValue="submit-login" />
                    </fieldset>
                    </form>
    </main>*/}
                <Footer />
                <Script type="module" src="/js/account.js" />
            </>)}