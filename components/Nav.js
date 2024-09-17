"use client"

import React from "react";
import styles from "./nav.module.css"
import Link from "next/link";

const Nav =()=>{
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}><Link href="/"><h1>Logo</h1></Link></div>
            <div className={styles.navs}>
                <button className={styles.button}><Link href="/Signup">Signup</Link></button>
                <button className={styles.button}><Link href="/Login">Login</Link></button>
                <button className={styles.button}><Link href="/Content-view">Content</Link></button>
                <button className={styles.button}><Link href="/Dashboard">Dashboard</Link></button>
            </div>
        </div>
    )
}


export default Nav;