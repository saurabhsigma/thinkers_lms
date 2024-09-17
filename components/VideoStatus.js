"use client";
import React from "react";

const styles = {
  square: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: '5px', // optional spacing between squares
  },

  renderedSquares: {
    display: "flex",
    flexDirection: "row",
  },
};

const VideoStatus = ({ totalNumber, currentIndex }) => {
  return (
    <div style={styles.renderedSquares}>
      {Array.from({ length: totalNumber }).map((_, index) => {
        let color;
        if (index === currentIndex) {
          color = 'blue';
        } else if (index < currentIndex) {
          color = 'green';
        } else {
          color = 'gray';
        } 

        

        return (
          <div
            key={index}
            style={{ ...styles.square, backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
};

export default VideoStatus;
