import React, { useEffect, useRef, useState } from "react";
import "./css/ladder.css";

const generateRandomLadders = () => {
  const numberOfLadders = Math.floor(Math.random() * 2) + 3; // 3 or 4
  const ladderPositions = [];
  for (let i = 0; i < numberOfLadders; i++) {
    ladderPositions.push((i + 1) * (100 / (numberOfLadders + 1)));
  }
  return ladderPositions;
};

const LadderInner = ({ result, startSide, setAnimationFinished, gameStarted }) => {
  const ladderRef = useRef(null);
  const playerRef = useRef(null);
  const [position, setPosition] = useState({
    top: "0%",
    left: startSide === "left" ? "0%" : "calc(100% - 40px)",
  });
  const [ladderPositions, setLadderPositions] = useState(generateRandomLadders);
  const [path, setPath] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (result) {
      setIsPlaying(true);
      const movePlayer = () => {
        let currentPosition = startSide === "left" ? 0 : 1; // 0 for left, 1 for right
        const intervals = [];
        const newPath = [];

        ladderPositions.forEach((pos, index) => {
          // Move vertically to the horizontal ladder
          intervals.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
          });
          newPath.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
            type: "vertical",
          });

          // Move horizontally
          intervals.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "calc(100% - 40px)" : "0%",
          });
          newPath.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "calc(100% - 40px)" : "0%",
            type: "horizontal",
          });

          // Move vertically down after crossing the horizontal ladder
          currentPosition += 1;
          if (index < ladderPositions.length - 1) {
            intervals.push({
              top: `${ladderPositions[index + 1]}%`,
              left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
            });
            newPath.push({
              top: `${ladderPositions[index + 1]}%`,
              left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
              type: "vertical",
            });
          }
        });

        // Move to the bottom of the ladder
        intervals.push({
          top: "100%",
          left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
        });
        newPath.push({
          top: "100%",
          left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
          type: "vertical",
        });

        setPath(newPath);

        let step = 0;
        const interval = setInterval(() => {
          if (step < intervals.length) {
            setPosition(intervals[step]);
            step += 1;
          } else {
            clearInterval(interval);
            setAnimationFinished(true);
            setIsPlaying(false);
          }
        }, 500);
      };

      movePlayer();
    } else {
      setPosition({
        top: "0%",
        left: startSide === "left" ? "0%" : "calc(100% - 40px)",
      });
      setLadderPositions(generateRandomLadders);
      setPath([]);
    }
  }, [result, startSide]);

  return (
    <div className="ladder-container" ref={ladderRef}>
      <div className="line vertical" style={{ left: "0%" }}></div>
      <div
        className="line vertical"
        style={{ left: "calc(100% - 40px)" }}
      ></div>
      {gameStarted &&
        ladderPositions.map((pos, index) => (
          <div
            key={index}
            className="line horizontal"
            style={{ top: `${pos}%` }}
          ></div>
        ))}
      {path.map((p, index) => (
        <div
          key={index}
          className={`path ${p.type}`}
          style={{
            top: p.type === "vertical" ? p.top : `calc(${p.top} - 20px)`,
            left: p.left,
            height: p.type === "vertical" ? "40px" : "20px",
            width: p.type === "horizontal" ? "100%" : "40px",
          }}
        ></div>
      ))}
      {isPlaying && (
        <div
          className="player"
          ref={playerRef}
          style={{ top: position.top, left: position.left }}
        ></div>
      )}
    </div>
  );
};

export default LadderInner;
