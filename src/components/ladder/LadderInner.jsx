// 사다리 게임 내부 컴포넌트

import React, { useEffect, useRef, useState } from "react";
import "./css/ladder.css";

// 랜덤 사다리 위치 생성 함수
const generateRandomLadders = () => {
  const numberOfLadders = Math.floor(Math.random() * 2) + 3; // 3 또는 4
  const ladderPositions = [];
  for (let i = 0; i < numberOfLadders; i++) {
    ladderPositions.push((i + 1) * (100 / (numberOfLadders + 1)));
  }
  return ladderPositions;
};

// LadderInner 컴포넌트: 사다리 게임의 애니메이션 및 경로 설정
const LadderInner = ({ result, startSide, setAnimationFinished, gameStarted }) => {
  const ladderRef = useRef(null);
  const playerRef = useRef(null);
  const [position, setPosition] = useState({
    top: "0%",
    left: startSide === "left" ? "0%" : "calc(100% - 40px)",
  });
  const [ladderPositions, setLadderPositions] = useState(generateRandomLadders());
  const [path, setPath] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (result) {
      setIsPlaying(true);
      const movePlayer = () => {
        let currentPosition = startSide === "left" ? 0 : 1;
        const intervals = [];
        const newPath = [];

        ladderPositions.forEach((pos, index) => {
          intervals.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
          });
          newPath.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "0%" : "calc(100% - 40px)",
            type: "vertical",
          });

          intervals.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "calc(100% - 40px)" : "0%",
          });
          newPath.push({
            top: `${pos}%`,
            left: currentPosition % 2 === 0 ? "calc(100% - 40px)" : "0%",
            type: "horizontal",
          });

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
      setLadderPositions(generateRandomLadders());
      setPath([]);
    }
  }, [result, startSide]);

  return (
      <div className="ladder-container" ref={ladderRef}>
        <div className="line vertical" style={{ left: "0%" }}></div>
        <div className="line vertical" style={{ left: "calc(100% - 40px)" }}></div>
        {gameStarted &&
            ladderPositions.map((pos, index) => (
                <div key={index} className="line horizontal" style={{ top: `${pos}%` }}></div>
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
            <div className="player" ref={playerRef} style={{ top: position.top, left: position.left }}></div>
        )}
      </div>
  );
};

export default LadderInner;