"use client"
import React from 'react';
import styles from '../auth.module.css'; // Import the CSS module
import Link from 'next/link';


const Signup = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.form}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input type="text" id="name" name="name" className={styles.input} required />

          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />

          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" name="password" className={styles.input} required />

          <label htmlFor="confirm-password" className={styles.label}>Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" className={styles.input} required />

          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
        <p className={styles.redirect}>
          Already have an account? <Link href="/Login" className={styles.link}>Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
