// 랭킹 페이지를 렌더링하는 컴포넌트

import "./css/ranking.css";
import RankingHeader from "./RankingHeader";
import RankingInner from "./RankingInner";
import { useState, createContext } from "react";

export const LeaderBoardChange = createContext();

const Ranking = () => {
  const [leaderboard, setLeaderBoard] = useState(true);

  // true => totalMoney
  // false => pureMoney

  // changeEvent 함수: 리더보드를 변경
  const changeEvent = (direction) => {
    if (direction === "left") {
      setLeaderBoard(true);
    } else {
      setLeaderBoard(false);
    }
  };

  return (
      <div className="ranking">
        <LeaderBoardChange.Provider value={{ leaderboard, changeEvent }}>
          <RankingHeader />
          <RankingInner leaderboard={leaderboard} />
        </LeaderBoardChange.Provider>
      </div>
  );
};

export default Ranking;