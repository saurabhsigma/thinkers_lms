"use client"
import Link from "next/link";
import React from "react";
import Nav from "../components/Nav";


const page = () => {
    return (

        <>
            <div>
                < Nav />
                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe
                        src="https://pictoblox.ai/"  // The URL of the website you want to embed
                        width="80%"                    // Adjust width as needed
                        height="90%"                   // Adjust height as needed
                        style={{ border: 'none' }}      // Optional: Remove iframe border
                        title="External Website"
                    ></iframe>
                </div>
            </div>
            {/* <h1>This is the main page</h1> */}
        </>
    )
}

export default page;