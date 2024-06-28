import "./css/ranking.css";
import RankingHeader from "./RankingHedaer";
import RankingInner from "./RankingInner";
import { useState, createContext } from "react";

const leaderBoardChange = createContext();

const Ranking = () => {
  const [leaderboard, setLeaderBoard] = useState(true);

  // true => totalMoney
  // false => pureMoney

  return (
    <div className="ranking">
      <leaderBoardChange.Provider value={leaderboard}>
        <RankingHeader />
        {leaderboard ? <RankingInner /> : <RankingInner />}
      </leaderBoardChange.Provider>
    </div>
  );
};
export default Ranking;
