"use client";
import React, { useState, useRef } from "react";
import VideoStatus from "../../components/VideoStatus";
import Nav from "../../components/Nav";

const Page = () => {
    const videos = [
        "/assets/dummy-vid.mp4",
        "/assets/vid-two.mp4",
        "assets/vid-three.mp4",
        "assets/vid-four.mp4",
    ];

    const len = videos.length;

    const [videoIndex, setVideoIndex] = useState(0);
    const videoRef = useRef(null);
    let count = 1;

    let chapterCompleted = false

    const nextVideo = () => {
        setVideoIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % videos.length;
            if (videoRef.current) {
                videoRef.current.load();
                count +=1;
            }
            return newIndex;
        });
    };

    const currentVideoSrc = videos[videoIndex];

    return (
        <>
            <Nav />
            <div>
                <VideoStatus totalNumber={len} currentIndex={videoIndex} />
            </div>
            <div>
                <h1>My Video</h1>
                <video
                    ref={videoRef}
                    width="640"
                    height="360"
                    controls
                >
                    <source src={currentVideoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br />
            <button onClick={nextVideo}>Next video</button>
        </>
    );
};

export default Page;



const todos = [
    {
        id: 1,
        title: "go to the gym",
        desc: "go to the gym in the morning"
    },
    {
        id: 2,
        title: "go take a shower",
        desc: "go take a shower, you stink"
    },
]

// users = [{
//     id: 1,
//     username: "saurabh",
//     password: "saurabh@123",
// },
// {
//     id: 2,
//     username: "divyansh",
//     password: "divyansh@123",
// }
// ]