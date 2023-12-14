'use client'
import {useState, useEffect} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Script from 'next/script'
import { getParam } from '../components/utils.mjs'

export default function Register() {
    return (
        <>
        <title>Create Account</title>
            <Header />
            <main className="text-[1.35rem] leading-[1.618] max-w-[38em] text-[#4a4a4a] bg-[#f9f9f9] m-auto p-[13px]">
                <h1 className="create-account leading-[1.1] font-bold break-words mt-12 mb-6 text-[2.35em]">Create Account</h1>
                <p className="message mt-0 mb-10"></p>
                <form className="blue-form register-form" action="/api/session" method="post">
                    <fieldset className="register-form-fieldset block font-semibold mb-2">
                    <label className="block font-semibold mb-2">
                        Name<span className="text-red-500 asterisk">*</span>
                        <input
                        type="text"
                        name="name"
                        required=""
                        placeholder=""
                        className="block border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                        />
                    </label>
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
                    <p className="mt-0 mb-10">
                    Passwords must be at least 8 characters and contain at least 1 number, 1
                            capital letter and 1 special character.
                    </p>
                    <input
                        className="submit-button border border-solid border-[#4a4a4a] text-[#4a4a4a] bg-[#f1f1f1] shadow-none box-border mb-[10px] px-[10px] py-[6px] rounded-[4px] border-[#f1f1f1]"
                        type="submit"
                        defaultValue="Create Account"
                    />
                    </fieldset>
                    </form>
            </main>
                {/*<main>
                <p className='create-account'>Create Account</p>
                <form className="register-form blue-form" method="post" action="/api/clients">
                    <fieldset className="password-fieldset">
                        <label className="block">
                        Name<span className="asterisk">*</span>
                        <input className="block border-2 border-black"
                            type="text"
                            name="name"
                            title="Required field"
                            required=""
                            placeholder=""
                        />
                        </label>
                        <label className="block">
                        Email<span className="asterisk">*</span>
                        <input className="block border-2 border-black"
                            type="email"
                            name="email"
                            title="Required field"
                            required=""
                            placeholder=""
                        />
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
                        <span className="block">
                            Passwords must be at least 8 characters and contain at least 1 number, 1
                            capital letter and 1 special character
                        </span>
                        </label>
                        <input
                        className="submit-button block cursor-pointer pd-4 border-2 border-black"
                        type="submit"
                        defaultValue="Create Account"
                        />
                    </fieldset>
                    </form>
    </main>*/}
            <Footer />
            <Script type='module' src='/js/register.js' />
        </>
    )}