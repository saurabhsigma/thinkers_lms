"use client";
import React from "react";
import Link from "next/link";
import styles from "./Chapters.module.css"; // Import the CSS module

const chapters = [
  { id: 1, title: "Chapter 1: Introduction to Biology" },
  { id: 2, title: "Chapter 2: Cell Structure" },
  { id: 3, title: "Chapter 3: Genetics" },
  { id: 4, title: "Chapter 4: Photosynthesis" },
  { id: 5, title: "Chapter 5: Evolution" },
  { id: 6, title: "Chapter 6: Human Anatomy" },
  { id: 7, title: "Chapter 7: Environmental Science" },
  { id: 8, title: "Chapter 8: Microbiology" },
  { id: 9, title: "Chapter 9: Biotechnology" },
  { id: 10, title: "Chapter 10: Zoology" },
];

// Array of videos
const videos = [
  "/assets/dummy-vid.mp4",
  "/assets/vid-two.mp4",
  "/assets/vid-three.mp4",
  "/assets/vid-four.mp4",
];

const Chapters = () => {
  const getRandomVideos = () => {
    const randomNumber = Math.floor(Math.random() * (videos.length - 1)) + 1;
    return videos.slice(0, randomNumber);
  };

  return (
    <div className={styles.chapterList}>
      <h2>Available Chapters</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id} className={styles.chapterItem}>
            <Link
              href={{
                pathname: `/content-view/${chapter.id}`,
                query: { videos: JSON.stringify(getRandomVideos()) },
              }}
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chapters;
